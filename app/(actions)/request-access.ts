"use server";

import { z } from "zod";

export type ActionState = {
  status: "idle" | "success" | "error";
  message: string;
};

const schema = z.object({
  email: z
    .string()
    .email("Enter a valid work email.")
    .min(5, "Email must be at least 5 characters."),
  organization: z
    .string()
    .min(2, "Organization name is required.")
    .max(120, "Keep organization names under 120 characters."),
  teamSize: z.string().optional()
});

const REQUEST_ACCESS_INBOX = process.env.REQUEST_ACCESS_INBOX;

export async function requestAccessAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const payload = {
    email: formData.get("email"),
    organization: formData.get("organization"),
    teamSize: formData.get("teamSize")
  };

  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please check the form."
    };
  }

  if (!REQUEST_ACCESS_INBOX || !process.env.RESEND_API_KEY) {
    console.error(
      "Request access form is missing RESEND_API_KEY or REQUEST_ACCESS_INBOX env vars."
    );
    return {
      status: "error",
      message:
        "Something went wrong on our side. Please email us directly and we’ll get you set up."
    };
  }

  const { email, organization, teamSize } = parsed.data;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: "MunicipalLabs <no-reply@municipallabs.ai>",
        to: [REQUEST_ACCESS_INBOX],
        subject: "New Legaside early access request",
        text: [
          `Email: ${email}`,
          `Organization: ${organization}`,
          `Team size: ${teamSize || "n/a"}`
        ].join("\n")
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);
      throw new Error("Failed to send email via Resend");
    }

    console.info("MunicipalLabs request access submission", parsed.data);

    return {
      status: "success",
      message:
        "Thanks for reaching out. We'll share pilot details within one business day."
    };
  } catch (error) {
    console.error("Error sending request access email", error);
    return {
      status: "error",
      message:
        "We couldn't send your request just now. Please email us directly and we’ll follow up."
    };
  }
}

