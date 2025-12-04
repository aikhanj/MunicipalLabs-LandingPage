import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Municipal Labs",
  description:
    "The terms that govern use of the Municipal Labs platform for government teams.",
};

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
              MUNICIPAL LABS
            </p>
            <p className="text-xs text-muted-foreground/80">
              Last Updated: November 20, 2025
            </p>
          </div>
        </header>

        <section className="space-y-4">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern access to and use of the Municipal
            Labs platform. By accessing or using the platform, you agree to be bound by these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">1. Acceptance</h2>
          <p>
            By accessing the Municipal Labs platform, you agree to these Terms. If you are using the
            platform on behalf of a government entity, you represent and warrant that you have the
            authority to bind that entity to these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">2. The Service</h2>
          <p>Municipal Labs provides tools for government teams, including:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Constituent message ingestion.</li>
            <li>AI-powered classification and summarization.</li>
            <li>Dashboards and analytics.</li>
            <li>Suggested reply drafting for staff review.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            3. User Responsibilities
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Violate applicable laws, regulations, or privacy requirements.</li>
            <li>Upload, transmit, or process harmful, illegal, or abusive content.</li>
            <li>
              Attempt unauthorized access to the platform, reverse engineer underlying software, or
              disrupt or overload systems.
            </li>
            <li>
              Use the system for campaign or electioneering purposes unless explicitly authorized by
              the relevant government entity and permitted by law.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            4. Government Data Ownership
          </h2>
          <p>
            All constituent communications and related records processed through the Municipal Labs
            platform belong to the government office that controls the underlying systems. Municipal
            Labs processes this data solely as a service provider or processor, in accordance with
            the instructions of the government office and applicable agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            5. Intellectual Property
          </h2>
          <p>
            All platform software, algorithms, interfaces, designs, and branding are owned by
            Municipal Labs or its licensors. Subject to these Terms, you receive a limited,
            non-exclusive, revocable license to access and use the platform for authorized
            governmental purposes. No other rights are granted.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">6. Termination</h2>
          <p>
            We may suspend or terminate access to the platform for violations of these Terms,
            security threats, nonpayment, or as otherwise permitted under our agreements with the
            relevant government office. Data access and export upon termination will follow the
            applicable Data Processing Agreement (DPA) or other governing contract.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            7. Warranties Disclaimer
          </h2>
          <p>
            The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
            Municipal Labs disclaims all warranties, whether express, implied, or statutory,
            including any warranties of merchantability, fitness for a particular purpose, and
            non-infringement. We do not guarantee accuracy of outputs, uninterrupted uptime, or that
            the platform will meet all requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Municipal Labs&apos; total liability arising out
            of or relating to the platform or these Terms is limited to the greater of: (a) the
            amount of fees paid for the Service in the twelve (12) months before the event giving
            rise to the claim, or (b) one hundred U.S. dollars (US$100) if no fees were paid.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">9. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the State of
            New Jersey, without regard to its conflict of laws principles. The parties agree to the
            exclusive jurisdiction of state and federal courts located in New Jersey for any
            disputes arising out of or relating to these Terms or the platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">10. Contact</h2>
          <p>For questions about these Terms, please contact:</p>
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



