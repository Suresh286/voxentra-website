import type { HomeContent } from "@/content/types/content";

export const homeContent = {
  hero: {
    eyebrow: "Enterprise AI Workforce Platform",
    headline: "AI Workforce for the Modern Business",
    headlineLine1: "AI Workforce for the",
    headlineLine2: "Modern Business",
    headlineParts: [
      { text: "AI Workforce for the " },
      { text: "Modern Business", accent: true },
    ],
    specialtyPrefix: "We specialize in",
    specialtyTerms: [
      "Voice AI",
      "Lead Qualification",
      "Customer Support",
      "Appointment Scheduling",
      "Sales Follow-up",
      "Call Center Automation",
    ],
    supportingCopy:
      "Voice AI employees that answer calls, qualify leads, schedule appointments, and support customers around the clock.",
    heroStats: [
      { value: "24/7", label: "Availability", icon: "clock" },
      { value: "20+", label: "Languages", icon: "globe" },
      { value: "CRM", label: "Integrations", icon: "plug" },
      { value: "Enterprise", label: "Security", icon: "shield" },
    ],
    marqueeItems: [
      "Lead Qualification",
      "Customer Support",
      "Appointment Scheduling",
      "Sales Follow-up",
      "Reception",
      "Internal Operations",
      "Voice AI",
      "Chat AI",
    ],
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "Explore the Platform",
      href: "/platform",
    },
    capabilityIndicators: [
      { label: "24/7 Availability" },
      { label: "20+ Languages" },
      { label: "CRM Ready" },
      { label: "Enterprise Security" },
    ],
    trustReassurance:
      "Enterprise-ready • No-code deployment • Integrates with your existing tools",
  },

  heroVisual: {
    incomingLabel: "Incoming call",
    customerQuote: "I'd like to book an appointment.",
    channelLabel: "Voice · Chat",
    aiEmployeeTitle: "Sales AI Employee",
    statusLabel: "Available",
    taskLabel: "Qualifying lead…",
    processingSteps: ["Listening…", "Thinking…", "Responding…"],
    outcomes: [
      { label: "CRM Updated" },
      { label: "Calendar Updated" },
      { label: "Confirmation Sent" },
    ],
    integrationsLabel: "Built for integration",
    integrations: [
      "Salesforce",
      "HubSpot",
      "Google Calendar",
      "Slack",
      "Microsoft Teams",
      "Zapier",
    ],
  },

  trustBar: {
    eyebrow: "Platform fundamentals",
    headline: "Reliability your operations depend on.",
    supportingCopy:
      "The standards business leaders check before putting AI employees on the front line.",
    items: [
      { label: "24/7 Availability" },
      { label: "Enterprise Security" },
      { label: "CRM Integrations" },
      { label: "Multilingual Conversations" },
      { label: "Voice + Chat" },
    ],
  },

  trustedBy: {
    eyebrow: "Built for modern businesses",
    headline: "Designed for growing teams.",
    supportingCopy:
      "Voxentra is for companies that need every call answered, every lead followed up, and every customer supported — without hiring for every shift.",
  },

  aiEmployee: {
    eyebrow: "What is an AI Employee?",
    headline: "An AI Employee Works Like a Team Member",
    supportingCopy:
      "They pick up the phone, reply to messages, book appointments, and complete follow-ups — using your rules, your tone, and your systems.",
    points: [
      "Shows up every day without scheduling shifts",
      "Follows the processes your team already relies on",
      "Passes the conversation to a person when it matters",
      "Handles more volume without more headcount",
    ],
    contrastLine:
      "Not a voice bot. Not a chat widget. An AI employee with a job to do.",
    comparison: {
      traditionalLabel: "Traditional Chatbot",
      aiEmployeeLabel: "Voxentra AI Employee",
      rows: [
        {
          traditional: "Answers predefined questions",
          aiEmployee: "Understands conversations",
        },
        {
          traditional: "No memory",
          aiEmployee: "Context aware",
        },
        {
          traditional: "Limited workflows",
          aiEmployee: "Completes business tasks",
        },
        {
          traditional: "Reactive",
          aiEmployee: "Proactive",
        },
        {
          traditional: "FAQ tool",
          aiEmployee: "Team member",
        },
      ],
    },
    primaryCta: {
      label: "Meet Your First AI Employee",
      href: "/demo",
    },
  },

  aiWorkforce: {
    eyebrow: "Meet your AI employees",
    headline: "Hire for the role. Scale the team.",
    supportingCopy:
      "Start with voice. Add chat, sales, and operations as your business grows — all from one platform.",
    fieldLabels: {
      status: "Status",
      currentTask: "Current Task",
      completedToday: "Completed Today",
      responseTime: "Response Time",
      works: "Works",
      languages: "Languages",
      availability: "Availability",
      integrations: "Integrations",
      outcome: "Example outcome",
      livePreview: "Illustrative live activity preview",
    },
    employees: [
      {
        title: "Sales AI Employee",
        description:
          "Owns inbound and outbound sales conversations — from first touch to booked meeting.",
        statusLabel: "Available",
        currentTask: "Qualifying an inbound lead…",
        completedToday: "127 conversations",
        responseTime: "< 1 second",
        responsibilities: [
          "Answers calls",
          "Qualifies leads",
          "Books meetings",
          "Updates CRM",
        ],
        languages: ["English", "Urdu", "Arabic"],
        availability: "24/7",
        integrations: ["HubSpot", "Salesforce", "Google Calendar"],
        outcome: "Qualified lead booked for a demo within 3 minutes.",
        cta: { label: "Learn More", href: "/solutions/sales" },
      },
      {
        title: "Customer Support AI Employee",
        description:
          "Resolves common requests instantly and routes complex cases with full context.",
        statusLabel: "Live",
        currentTask: "Resolving a billing inquiry…",
        completedToday: "89 tickets resolved",
        responseTime: "Instant",
        responsibilities: [
          "Handles support tickets",
          "Answers product questions",
          "Escalates when needed",
          "Logs every interaction",
        ],
        languages: ["English", "Spanish", "French"],
        availability: "24/7",
        integrations: ["Zendesk", "Intercom", "Slack"],
        outcome: "Issue resolved and customer confirmed satisfaction.",
        cta: { label: "Learn More", href: "/solutions/customer-support" },
      },
      {
        title: "Reception AI Employee",
        description:
          "Greets callers, routes inquiries, and keeps your front desk running without hold times.",
        statusLabel: "Ready",
        currentTask: "Routing an inbound call…",
        completedToday: "203 calls handled",
        responseTime: "< 1 second",
        responsibilities: [
          "Answers inbound calls",
          "Routes to the right team",
          "Captures caller details",
          "Sends follow-up messages",
        ],
        languages: ["English", "Urdu", "Hindi"],
        availability: "24/7",
        integrations: ["Microsoft Teams", "Slack", "Google Calendar"],
        outcome: "Caller routed to the right department on the first attempt.",
        cta: { label: "Learn More", href: "/solutions/call-center" },
      },
      {
        title: "Appointment Booking AI Employee",
        description:
          "Checks availability, confirms meetings, and sends reminders — no back-and-forth.",
        statusLabel: "Available",
        currentTask: "Confirming a meeting slot…",
        completedToday: "64 appointments booked",
        responseTime: "Instant",
        responsibilities: [
          "Checks calendar availability",
          "Books appointments",
          "Sends confirmations",
          "Handles rescheduling",
        ],
        languages: ["English", "Arabic", "French"],
        availability: "24/7",
        integrations: ["Google Calendar", "Outlook", "Calendly"],
        outcome: "Appointment confirmed and calendar invite sent.",
        cta: { label: "Learn More", href: "/solutions/appointments" },
      },
      {
        title: "Lead Qualification AI Employee",
        description:
          "Asks the right questions, scores intent, and hands off ready-to-close opportunities.",
        statusLabel: "Live",
        currentTask: "Scoring lead intent…",
        completedToday: "41 leads qualified",
        responseTime: "< 1 second",
        responsibilities: [
          "Asks qualifying questions",
          "Scores lead intent",
          "Updates pipeline",
          "Notifies sales team",
        ],
        languages: ["English", "Urdu", "Spanish"],
        availability: "24/7",
        integrations: ["HubSpot", "Salesforce", "Pipedrive"],
        outcome: "Hot lead flagged and assigned to a sales rep.",
        cta: { label: "Learn More", href: "/solutions/sales" },
      },
      {
        title: "Internal Operations AI Employee",
        description:
          "Runs scheduling, reminders, and routine coordination across your team.",
        statusLabel: "Ready",
        currentTask: "Sending a team handoff reminder…",
        completedToday: "156 tasks coordinated",
        responseTime: "Instant",
        responsibilities: [
          "Coordinates schedules",
          "Sends team reminders",
          "Updates task status",
          "Automates handoffs",
        ],
        languages: ["English", "Urdu"],
        availability: "24/7",
        integrations: ["Slack", "Microsoft Teams", "Zapier"],
        outcome: "Team notified and task marked complete in your workflow.",
        cta: { label: "Learn More", href: "/solutions/operations" },
      },
    ],
    primaryCta: {
      label: "Meet your AI employees",
      href: "/platform",
    },
  },

  solutions: {
    eyebrow: "What We Do",
    headline: "Solutions That Drive Results",
    headlineParts: [
      { text: "Solutions That " },
      { text: "Drive Results", accent: true },
    ],
    supportingCopy:
      "Pick the workflow costing you time today. Voxentra deploys an AI employee trained for that exact job.",
    fieldLabels: {
      problem: "Problem",
      aiEmployee: "AI Employee",
      outcome: "Business Outcome",
    },
    items: [
      {
        title: "Lead Qualification",
        description:
          "Ask the right questions, score intent, and hand off ready-to-close opportunities.",
        problem:
          "Leads arrive outside business hours or pile up faster than your team can respond.",
        aiEmployee: "Lead Qualification AI Employee",
        outcome:
          "Qualified leads are scored, logged in your CRM, and routed to sales with full context.",
        tags: ["Voice AI", "CRM", "Salesforce"],
        cta: { label: "Learn More", href: "/solutions/sales" },
      },
      {
        title: "Customer Support",
        description:
          "Resolve common requests on the spot and route complex cases with full context.",
        problem:
          "Support queues grow while customers wait for answers your team repeats daily.",
        aiEmployee: "Customer Support AI Employee",
        outcome:
          "Common requests are resolved instantly; complex cases reach your team with full history.",
        tags: ["Chat", "Helpdesk", "Zendesk"],
        cta: { label: "Learn More", href: "/solutions/customer-support" },
      },
      {
        title: "Appointment Scheduling",
        description:
          "Check availability, confirm meetings, and send reminders — no back-and-forth.",
        problem:
          "Booking appointments takes multiple calls, emails, and calendar checks.",
        aiEmployee: "Appointment Booking AI Employee",
        outcome:
          "Meetings are confirmed, calendars updated, and reminders sent automatically.",
        tags: ["Calendar", "Voice", "Reminders"],
        cta: { label: "Learn More", href: "/solutions/appointments" },
      },
      {
        title: "Sales Follow-up",
        description:
          "Reach out after inquiries, demos, and missed calls so no opportunity goes quiet.",
        problem:
          "Prospects go quiet after demos, inquiries, or missed calls.",
        aiEmployee: "Sales AI Employee",
        outcome:
          "Every lead receives timely follow-up without adding headcount.",
        tags: ["Sales", "Voice", "HubSpot"],
        cta: { label: "Learn More", href: "/solutions/sales" },
      },
      {
        title: "Reception",
        description:
          "Answer every call, capture caller details, and route inquiries to the right team.",
        problem:
          "Calls go unanswered or sit on hold when your front desk is overwhelmed.",
        aiEmployee: "Reception AI Employee",
        outcome:
          "Every caller is greeted, routed correctly, and logged for follow-up.",
        tags: ["Voice", "Routing", "Telephony"],
        cta: { label: "Learn More", href: "/solutions/call-center" },
      },
      {
        title: "Internal Operations",
        description:
          "Handle scheduling, status updates, and routine coordination across your team.",
        problem:
          "Routine coordination pulls your team away from higher-value work.",
        aiEmployee: "Internal Operations AI Employee",
        outcome:
          "Schedules, reminders, and handoffs run automatically across your tools.",
        tags: ["Workflows", "Slack", "Automation"],
        cta: { label: "Learn More", href: "/solutions/operations" },
      },
    ],
    primaryCta: {
      label: "View all solutions",
      href: "/solutions",
    },
  },

  industries: {
    eyebrow: "Industries",
    headline: "Where missed calls cost real money.",
    supportingCopy:
      "Voxentra AI employees serve teams that need reliable, consistent conversations — in regulated and high-volume environments alike.",
    fieldLabels: {
      challenge: "Challenge",
      aiEmployee: "Recommended AI Employee",
      workflowExample: "Example Workflow",
      outcome: "Business Outcome",
    },
    items: [
      {
        title: "Healthcare",
        description:
          "Patient intake, scheduling, and follow-up with workflows built for sensitive data.",
        challenge:
          "Patients call after hours and staff cannot keep up with intake and scheduling requests.",
        aiEmployee: "Appointment Booking AI Employee",
        workflowExample:
          "Patient calls to schedule a visit → AI checks availability → appointment confirmed and logged.",
        outcome: "Answer patient inquiries 24/7 without adding front-desk headcount.",
        cta: { label: "Learn More", href: "/industries/healthcare" },
      },
      {
        title: "Real Estate",
        description:
          "Instant lead response, showing coordination, and prospect follow-up at any hour.",
        challenge:
          "Property inquiries arrive around the clock, but agents cannot respond to every lead immediately.",
        aiEmployee: "Sales AI Employee",
        workflowExample:
          "Buyer inquires about a listing → AI qualifies intent → showing scheduled with your agent.",
        outcome: "Qualify property leads instantly and book showings without delay.",
        cta: { label: "Learn More", href: "/industries/real-estate" },
      },
      {
        title: "Financial Services",
        description:
          "Routine client inquiries and appointment-driven workflows handled with care.",
        challenge:
          "Clients expect fast answers on accounts, appointments, and common requests.",
        aiEmployee: "Customer Support AI Employee",
        workflowExample:
          "Client asks about an appointment → AI verifies details → meeting confirmed in calendar.",
        outcome: "Handle routine client inquiries securely while your team focuses on complex cases.",
        cta: { label: "Learn More", href: "/industries/finance" },
      },
      {
        title: "Education",
        description:
          "Enrollment questions, admin requests, and parent communication at scale.",
        challenge:
          "Enrollment seasons flood your office with repeat questions from students and parents.",
        aiEmployee: "Reception AI Employee",
        workflowExample:
          "Parent calls about enrollment → AI answers FAQs → complex cases routed to admissions.",
        outcome: "Scale enrollment support without overwhelming your admin team.",
        cta: { label: "Learn More", href: "/industries/education" },
      },
      {
        title: "Hospitality",
        description:
          "Reservations, guest requests, and service coordination without hold times.",
        challenge:
          "Guests expect instant answers on reservations, changes, and service requests.",
        aiEmployee: "Reception AI Employee",
        workflowExample:
          "Guest calls to modify a reservation → AI checks availability → booking updated and confirmed.",
        outcome: "Manage reservations and guest requests without hold times.",
        cta: { label: "Learn More", href: "/industries/hospitality" },
      },
      {
        title: "Professional Services",
        description:
          "Client intake, appointment booking, and follow-up for firms that run on responsiveness.",
        challenge:
          "Prospects and clients expect immediate responses when they reach out to your firm.",
        aiEmployee: "Lead Qualification AI Employee",
        workflowExample:
          "Prospect requests a consultation → AI qualifies the inquiry → meeting booked with the right partner.",
        outcome: "Schedule consultations automatically and never miss a new client inquiry.",
        cta: { label: "Learn More", href: "/industries" },
      },
    ],
    primaryCta: {
      label: "View all industries",
      href: "/industries",
    },
  },

  howItWorks: {
    eyebrow: "How it works",
    headline: "Three steps to your first AI employee.",
    supportingCopy:
      "Most teams are live within days. You define the job. Voxentra runs the platform.",
    steps: [
      {
        step: "01",
        title: "Define the role",
        description:
          "Tell us what the AI employee should handle — calls, chats, bookings, follow-ups — and connect your tools.",
      },
      {
        step: "02",
        title: "Deploy your employee",
        description:
          "Launch on voice, chat, or both. Your AI employee starts handling real conversations on day one.",
      },
      {
        step: "03",
        title: "Scale your AI team",
        description:
          "Add employees, channels, and workflows as your operations grow. One dashboard to manage all of it.",
      },
    ],
    supportingLine:
      "No engineering project. No months of setup. Hire your first AI employee and expand from there.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
  },

  integrations: {
    eyebrow: "Integrations",
    headline: "Plugs into your existing stack.",
    supportingCopy:
      "Your AI employees work inside the CRM, phone system, and calendar your team already uses — so they take action, not just notes.",
    categories: [
      "CRM",
      "Telephony",
      "Calendar",
      "Helpdesk",
      "ERP & Operations",
    ],
    primaryCta: {
      label: "View integrations",
      href: "/integrations",
    },
  },

  security: {
    eyebrow: "Security & compliance",
    headline: "Your data stays protected.",
    supportingCopy:
      "Enterprise security is not an add-on. It is how Voxentra is built — for every conversation, on every channel.",
    pillars: [
      {
        title: "Encryption",
        description:
          "Data encrypted in transit and at rest across voice and chat operations.",
        href: "/security",
      },
      {
        title: "Access controls",
        description:
          "Role-based permissions so only the right people manage your AI workforce.",
        href: "/security",
      },
      {
        title: "Compliance-ready infrastructure",
        description:
          "Built for teams in regulated and operationally sensitive industries.",
        href: "/security",
      },
      {
        title: "Secure voice & chat",
        description:
          "Consistent security policies whether your employee is on a call or in a chat.",
        href: "/security",
      },
    ],
    primaryCta: {
      label: "Learn about security",
      href: "/security",
    },
  },

  customerStories: {
    eyebrow: "What businesses automate",
    headline: "What Businesses Can Automate",
    supportingCopy:
      "These are the workflows Voxentra AI employees handle today. When you are ready, we will share how teams like yours are using them.",
    automations: [
      {
        title: "Inbound call handling",
        description:
          "Answer every call, resolve common requests, and route the rest with full context.",
      },
      {
        title: "Lead follow-up",
        description:
          "Call or message prospects after a form fill, demo request, or missed connection.",
      },
      {
        title: "Appointment scheduling",
        description:
          "Book, confirm, and remind — across phone and messaging channels.",
      },
      {
        title: "Customer support triage",
        description:
          "Resolve FAQs instantly and escalate issues your team should own.",
      },
      {
        title: "After-hours coverage",
        description:
          "Keep sales and support running when your office is closed.",
      },
      {
        title: "Operational coordination",
        description:
          "Status updates, reminders, and routine tasks that eat into your team's day.",
      },
    ],
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
  },

  pricingPreview: {
    eyebrow: "Pricing",
    headline: "Flexible pricing for your business.",
    supportingCopy:
      "Every deployment is different. We scope pricing around your channels, volume, and operational needs — then provide a clear proposal. No guesswork on the website. Talk to us.",
    tiers: [
      {
        name: "Growing teams",
        description: "For businesses hiring their first AI employees.",
        highlights: [
          "Voice or chat deployment",
          "Core integrations",
          "Dedicated onboarding",
        ],
        cta: {
          label: "Book a Demo",
          href: "/demo",
        },
      },
      {
        name: "Multi-channel operations",
        description: "For teams running AI employees across voice and chat.",
        highlights: [
          "Multiple AI employees",
          "Advanced workflows",
          "Priority support",
        ],
        cta: {
          label: "Book a Demo",
          href: "/demo",
        },
      },
      {
        name: "Enterprise",
        description: "For organizations with complex compliance and scale requirements.",
        highlights: [
          "Custom deployment options",
          "Dedicated integrations",
          "SLA & account support",
        ],
        cta: {
          label: "Contact Sales",
          href: "/contact",
        },
      },
    ],
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "Contact Sales",
      href: "/contact",
    },
  },

  faq: {
    eyebrow: "FAQ",
    headline: "Questions before you hire.",
    supportingCopy:
      "Straight answers for business leaders evaluating AI employees for their operations.",
    items: [
      {
        question: "How quickly can we go live?",
        answer:
          "Most teams deploy their first AI employee within days. Timeline depends on your use case and integrations — not a multi-month build.",
      },
      {
        question: "Do AI employees replace my team?",
        answer:
          "No. They take on repetitive, high-volume conversations so your people can focus on work that needs a human. Handoff is built in.",
      },
      {
        question: "What languages are supported?",
        answer:
          "Voxentra supports multilingual voice and chat. We confirm language coverage for your specific deployment during onboarding.",
      },
      {
        question: "How does human handoff work?",
        answer:
          "When a conversation needs your team, the AI employee transfers it with full context. Your customer never repeats themselves.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. Encryption, access controls, and compliance-ready infrastructure are standard. See our Security page for details.",
      },
      {
        question: "What integrations are available?",
        answer:
          "CRMs, telephony, calendars, helpdesks, and operational tools. See the Integrations page for the current list.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "Pricing depends on your scope — channels, volume, and workflows. We provide a tailored proposal after a short discovery call.",
      },
      {
        question: "Can we start with one use case?",
        answer:
          "Yes. Most businesses start with one high-impact job — inbound calls, lead follow-up, or appointment booking — then hire more AI employees over time.",
      },
    ],
    primaryCta: {
      label: "Contact us",
      href: "/contact",
    },
  },

  finalCta: {
    eyebrow: "Hire your first AI employee",
    headline: "Scale your AI team today.",
    supportingCopy:
      "Book a demo. We will map your operations, recommend the right AI employees, and show you exactly how Voxentra fits your business.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
  },
} as const satisfies HomeContent;

export type { HomeContent };
