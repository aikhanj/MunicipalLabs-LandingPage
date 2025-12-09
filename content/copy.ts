export const copy = {
  hero: {
    title: "Software tools built for local government",
    subtitle:
      "We're building a platform of tools that help public-sector teams work faster and serve residents better. Legaside is our first product.",
    ctaPrimary: "Get early access",
    ctaSecondary: "See Legaside"
  },
  problem: {
    heading: "The Challenge",
    subheadline: "Constituent communication happens across fragmented systems",
    description: "Municipal teams manage high volumes of resident requests across email, portals, and spreadsheets without a unified view.",
    bullets: [
      "High message volume across multiple channels",
      "Requests arrive via email, 311 portals, and public inboxes",
      "Manual triage and tracking",
      "Staff use spreadsheets and forwarding to coordinate responses",
      "Limited visibility into trends",
      "Leadership lacks real-time insights into service requests and response times"
    ]
  },
  approach: {
    heading: "Our Approach",
    cards: [
      {
        title: "Built for Government",
        description: "Designed specifically for public-sector workflows, compliance requirements, and accountability standards."
      },
      {
        title: "Multiple Tools, One Platform",
        description: "We're building an integrated suite of tools that work together to streamline constituent services."
      },
      {
        title: "Security-First Design",
        description: "Enterprise-grade security, data isolation, and audit logging built into every layer."
      }
    ]
  },
  solution: {
    heading: "Legaside",
    sub: "Intelligent inbox for constituent services",
    points: [
      "Automatically categorize and prioritize incoming messages",
      "Generate draft responses with full staff review and approval",
      "Track resolution times and identify service trends",
      "Connect existing email and 311 systems in minutes"
    ],
    learnMoreUrl: "https://legaside.municipallabs.ai"
  },
  security: {
    heading: "Security built in.",
    status: "Built for public records teams",
    bullets: [
      {
        title: "Tenant isolation by design.",
        body: "Postgres row-level security keeps each city’s data logically isolated at the database layer."
      },
      {
        title: "Least-privilege access everywhere.",
        body: "OAuth scopes and internal roles are scoped so systems only receive the minimum access they need."
      },
      {
        title: "Encrypted in transit and at rest.",
        body: "Modern TLS and encrypted storage protect traffic on the wire and data at rest in our core systems."
      },
      {
        title: "Every action leaves a trail.",
        body: "Audit logs and access controls make staff actions reviewable so sensitive records stay accountable."
      }
    ]
  },
  roadmap: {
    heading: "What’s next",
    items: [
      { q: "Q1", t: "Pilot cohorts, analytics v2, roles" },
      { q: "Q2", t: "Workflow automations, multi-tenant orgs" },
      { q: "Q3", t: "Outbound messaging, API access" }
    ]
  },
  cta: {
    heading: "Bring modern constituent response tools to your city.",
    sub: "Join the early access list and help shape how Legaside fits your city’s workflows.",
    button: "Request access"
  }
} as const;

