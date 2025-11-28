import Link from "next/link";

export const metadata = {
  title: "Incident Response Plan — Municipal Labs",
  description:
    "How Municipal Labs detects, responds to, and communicates about security incidents.",
};

export default function IncidentResponsePlanPage() {
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
              Incident Response Plan
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
              MUNICIPAL LABS
            </p>
            <p className="text-xs text-muted-foreground/80">
              Effective Date: November 20, 2025
            </p>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">1. Purpose</h2>
          <p>
            This Incident Response Plan defines procedures for detecting,
            containing, mitigating, and reporting security incidents affecting
            Municipal Labs systems and data processed for government clients.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            2. Incident Response Team
          </h2>
          <p>Roles involved in incident response may include:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Incident Lead (CTO, CEO, or delegated senior leader)</li>
            <li>Engineering and infrastructure personnel</li>
            <li>Legal and compliance representatives</li>
            <li>Communications and account management</li>
            <li>External forensic or security specialists, as needed</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">3. Incident Phases</h2>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">Identification</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Detect anomalies, suspicious access patterns, malware, or signs
                of data exfiltration.
              </li>
              <li>Classify severity and scope based on potential impact.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">Containment</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Disable compromised accounts or credentials.</li>
              <li>Isolate affected systems or services.</li>
              <li>Block malicious IPs or network paths.</li>
              <li>Preserve forensic evidence where appropriate.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">Eradication</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Remove malware or unauthorized software.</li>
              <li>Close vulnerabilities and misconfigurations.</li>
              <li>Reset credentials and strengthen access controls.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">Recovery</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Restore clean systems and services to normal operation.</li>
              <li>Increase monitoring of affected areas.</li>
              <li>Verify data integrity and service stability.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">Notification</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Notify government clients without undue delay when their data or
                services are impacted.
              </li>
              <li>
                Support regulatory or constituent notifications as required by
                applicable law and contracts.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            4. Post-Incident Review
          </h2>
          <p>
            After an incident is resolved, Municipal Labs conducts a
            post-incident review to capture lessons learned, document the
            incident and response, and update policies, procedures, and
            technical controls to reduce the likelihood and impact of future
            incidents.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">5. Contact</h2>
          <p>For incident-related communications, contact:</p>
          <div className="space-y-1">
            <p>Municipal Labs Incident Response</p>
            <p>20 East End Avenue</p>
            <p>New York, NY</p>
            <p>
              Email:{" "}
              <a
                href="mailto:mm4855@princeton.edu"
                className="text-muted-foreground underline underline-offset-4 transition hover:text-white"
              >
                mm4855@princeton.edu
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}



