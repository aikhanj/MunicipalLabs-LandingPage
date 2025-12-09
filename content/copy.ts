export const copy = {
  hero: {
    title: "Software that helps cities serve residents faster",
    subtitle:
      "We're building the platform that gives municipal teams visibility, automation, and control over constituent communication—so staff can focus on outcomes instead of inbox management.",
    ctaPrimary: "Get early access",
    ctaSecondary: "See Legaside"
  },
  problem: {
    heading: "The Challenge",
    subheadline: "Constituent communication happens across fragmented systems",
    description: "Municipal teams manage high volumes of resident requests across email, portals, and spreadsheets without a unified view.",
    bullets: [
      "200-500 weekly messages per office across fragmented channels",
      "Email, 311 portals, social media, and walk-ins with no unified view",
      "15-20 staff hours weekly spent on manual triage and routing",
      "Responses tracked in spreadsheets with no accountability metrics",
      "Systemic issues invisible until they become public crises",
      "Leadership lacks real-time data on response times and service gaps"
    ]
  },
  approach: {
    heading: "Our Approach",
    cards: [
      {
        title: "Built for Government",
        description: "Designed specifically for public-sector workflows, compliance requirements, and accountability standards. Every feature respects the unique demands of government operations."
      },
      {
        title: "Multiple Tools, One Platform",
        description: "We're building an integrated suite of tools that work together to streamline constituent services. Start with one product, expand as your needs grow."
      },
      {
        title: "Security-First Design",
        description: "Enterprise-grade security, data isolation, and audit logging built into every layer. Public records compliance and data sovereignty are baseline, not features."
      }
    ]
  },
  solution: {
    heading: "Legaside",
    sub: "Intelligent inbox for constituent services—built for accountability",
    points: [
      "Automatically categorize and prioritize incoming messages with explainable AI",
      "Generate draft responses with full staff review and approval—humans always in the loop",
      "Track resolution times, identify service trends, and surface patterns before they become crises",
      "Connect existing email and 311 systems in minutes with secure OAuth integration"
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
    heading: "Stop drowning in constituent emails.",
    sub: "",
    button: "Book a demo"
  }
} as const;

