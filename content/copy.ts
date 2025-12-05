export const copy = {
  hero: {
    title: "Software infrastructure for public sector operations",
    subtitle:
      "MunicipalLabs builds Software infrastructure for public sector operations. Our first product, Legaside, turns your constituent inbox into a software tool so your office can respond to residents faster, see issues by neighborhood, and show clear results to council and the public.",
    ctaPrimary: "Get early access",
    ctaSecondary: "See Legaside"
  },
  problem: {
    heading: "The public inbox is on fire.",
    subheadline: "Overflowing inboxes. Fragmented tools. Zero visibility.",
    description: "Municipal teams drown in emails, portals, and spreadsheets instead of serving residents.",
    bullets: [
      "High volume, low visibility.",
      "Thousands of messages scattered across portals and inboxes.",
      "Manual triage, slow follow-up.",
      "Staff copy, forward, and track requests in spreadsheets.",
      "No shared view of resident needs.",
      "Leadership can't see what's trending or where service is slipping."
    ],
    chaos: {
      label: "Today's reality",
      title: "Scattered across three systems. Zero shared view.",
      stats: [
        { label: "Inbox", value: "172 unread", color: "red" },
        { label: "Shared spreadsheet", value: "19 editors", color: "yellow" },
        { label: "Citizen hotline", value: "3 voicemails", color: "orange" }
      ],
      badge: "Manual triage required"
    }
  },
  solution: {
    heading: "Meet Legaside.",
    sub: "An AI inbox and CRM layer purpose-built for government work.",
    points: [
      "Connect your existing inboxes in minutes.",
      "Automatic topic and priority labels on every message.",
      "Draft responses you can trust — with staff approval before anything is sent.",
      "Dashboards that show what matters this week, not last quarter."
    ]
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

