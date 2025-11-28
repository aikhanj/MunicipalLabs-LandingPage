import Link from "next/link";

export const metadata = {
  title: "Data Processing Agreement — Municipal Labs",
  description:
    "How Municipal Labs processes government and constituent data as a processor to government controllers.",
};

export default function DataProcessingAgreementPage() {
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
              Data Processing Agreement (DPA)
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
              MUNICIPAL LABS
            </p>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">1. Roles</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-white">Controller:</span> The
              government office using Municipal Labs.
            </li>
            <li>
              <span className="font-medium text-white">Processor:</span>{" "}
              Municipal Labs, processing data solely on the Controller&apos;s
              documented instructions.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            2. Personal Data Processed
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Constituent messages, contact information, and attachments.</li>
            <li>Government user account information.</li>
            <li>System, security, and audit logs.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            3. Processing Purposes
          </h2>
          <p>Municipal Labs processes personal data to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Provide, maintain, and support the Municipal Labs platform.</li>
            <li>Classify, analyze, and organize constituent communications.</li>
            <li>
              Ensure security, reliability, and operational continuity of the
              Service.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            4. Confidentiality
          </h2>
          <p>
            All Municipal Labs personnel with access to personal data are bound
            by confidentiality obligations. Data is only accessed as needed to
            provide, secure, or support the platform in accordance with the
            Controller&apos;s instructions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            5. Security Measures
          </h2>
          <p>
            Municipal Labs implements appropriate technical and organizational
            measures to protect personal data, including:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Encryption in transit and at rest where appropriate.</li>
            <li>Access controls and role-based permissions.</li>
            <li>Security monitoring, logging, and alerting.</li>
            <li>Regular backups and tested recovery procedures.</li>
            <li>Vulnerability management and security reviews.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">6. Subprocessors</h2>
          <p>
            Municipal Labs may engage authorized subprocessors, such as cloud
            hosting, logging, and email providers, to support delivery of the
            Service. Municipal Labs remains responsible for the performance of
            subprocessors and will ensure they are subject to data protection
            obligations at least as protective as those in this DPA.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            7. Data Subject Rights
          </h2>
          <p>
            Municipal Labs will reasonably assist the Controller in responding
            to requests from data subjects to exercise rights of access,
            correction, deletion, or other rights available under applicable
            law, to the extent such requests relate to data processed on behalf
            of the Controller.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            8. Breach Notification
          </h2>
          <p>
            Municipal Labs will notify the Controller without undue delay after
            becoming aware of a personal data breach affecting data processed on
            the Controller&apos;s behalf. The notification will include, to the
            extent known:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The nature of the breach.</li>
            <li>The categories of data and data subjects affected.</li>
            <li>
              Actions taken or proposed to address and mitigate the breach.
            </li>
            <li>
              Recommendations to help the Controller meet any legal or
              notification obligations.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            9. Data Return and Deletion
          </h2>
          <p>
            Upon termination of the Services or upon the Controller&apos;s
            request, Municipal Labs will delete or return personal data
            processed on the Controller&apos;s behalf, unless retention is
            required by law. Backups containing personal data will be deleted on
            their normal rotation schedule.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            10. Governing Law
          </h2>
          <p>
            This Data Processing Agreement is governed by the laws of the State
            of New Jersey, without regard to its conflict of laws principles,
            and follows the governing law provisions in the underlying agreement
            between Municipal Labs and the Controller.
          </p>
        </section>
      </div>
    </main>
  );
}



