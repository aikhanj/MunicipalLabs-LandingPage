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

  await new Promise((resolve) => setTimeout(resolve, 600));

  console.info("MunicipalLabs request access submission", parsed.data);

  return {
    status: "success",
    message:
      "Thanks for reaching out. We'll share pilot details within one business day."
  };
}

export const initialActionState: ActionState = {
  status: "idle",
  message: ""
};

