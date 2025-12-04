import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Municipal Labs",
  description:
    "How Municipal Labs collects, uses, and protects data for government users and constituents.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pb-16 pt-28 text-sm text-muted-foreground">
      <div className="mx-auto w-[min(900px,92vw)] space-y-10">
        <header className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-medium text-muted-foreground/80 transition hover:text-white"
          >
            <span className="mr-1 text-base" aria-hidden>
              ←
            </span>
            Back to homepage
          </Link>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-white">
              Privacy Policy
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
              MUNICIPAL LABS
            </p>
            <p className="text-xs text-muted-foreground/80">
              Effective Date: November 20, 2025
            </p>
          </div>
        </header>

        <section className="space-y-4">
          <p>
            Municipal Labs provides an AI-powered platform for local
            governments to manage constituent communications. This Privacy
            Policy describes what data we collect, how we use it, how we share
            it, and the rights available to users.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            1. Data We Collect
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-white">
                Account Information:
              </span>{" "}
              Names, emails, and roles for government users.
            </li>
            <li>
              <span className="font-medium text-white">
                Constituent Communications:
              </span>{" "}
              Emails, voicemails, attachments, and related metadata processed
              through government inboxes.
            </li>
            <li>
              <span className="font-medium text-white">Technical Data:</span>{" "}
              IP address, device identifiers, logs, browser type, and similar
              technical information.
            </li>
            <li>
              <span className="font-medium text-white">
                Integrated Services Data:
              </span>{" "}
              Information from Gmail, Outlook, or other integrated services only
              as explicitly authorized by the government office.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            2. How We Use Data
          </h2>
          <p>We use data to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Provide, secure, and improve the Municipal Labs platform and
              related services.
            </li>
            <li>
              Classify, summarize, and present constituent messages to authorized
              government staff.
            </li>
            <li>
              Generate suggested replies and workflows for staff review and
              approval before any message is sent.
            </li>
            <li>
              Comply with legal obligations and enforce platform security and
              acceptable use.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">3. Data Sharing</h2>
          <p className="font-medium text-white">We do not sell personal data.</p>
          <p>We share data only with:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              The government office that controls the constituent data and
              associated accounts.
            </li>
            <li>
              Service providers such as cloud hosting, logging, and monitoring
              vendors that support our operations and are bound by appropriate
              contractual safeguards.
            </li>
            <li>
              Regulators, courts, or law enforcement agencies when legally
              required or necessary to protect rights, safety, or security.
            </li>
            <li>
              Successor entities in the context of mergers, acquisitions, or
              similar corporate transactions, subject to appropriate safeguards.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            4. Data Retention
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Constituent data is retained based on the government office’s
              requirements and applicable law.
            </li>
            <li>
              Account information is retained while your account is active and
              for a reasonable period afterward for security, audit, and
              compliance purposes.
            </li>
            <li>
              Logs and backups are retained as needed to support security,
              reliability, and operations.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">5. User Rights</h2>
          <p>Depending on jurisdiction and applicable law, users may have the right to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Request access to personal data we process on their behalf, subject
              to governmental retention requirements.
            </li>
            <li>
              Request correction or deletion of certain personal data, where
              permitted by law and consistent with the government office’s
              retention rules.
            </li>
            <li>
              Government users may update or request deletion of their account
              information through their administrator or by contacting us.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">6. Security</h2>
          <p>
            We use encryption, access controls, monitoring, and other safeguards
            aligned with industry standards to protect data within the Municipal
            Labs platform. No method of transmission or storage is completely
            secure, but we commit to timely investigation and, where required by
            law, notification of any security incident that affects government
            or constituent data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">7. Contact</h2>
          <p>
            For questions about this Privacy Policy or how we handle data,
            please contact:
          </p>
          <div className="space-y-1">
            <p>Municipal Labs</p>
            <p>20 East End Avenue</p>
            <p>New York, NY</p>
            <p>
              Email:{" "}
              <a
                href="mailto:mason@municipallabs.ai"
                className="text-muted-foreground underline underline-offset-4 transition hover:text-white"
              >
                mason@municipallabs.ai
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}



