import type { SolutionDetailPageContent } from "@/content/types/pages";

export const appointmentsSolutionContent: SolutionDetailPageContent = {
  meta: {
    title: "Appointment Booking",
    description:
      "Deploy an Appointment Booking AI Employee to check availability, confirm meetings, send reminders, and handle rescheduling — without back-and-forth.",
  },
  hero: {
    eyebrow: "Appointment Booking",
    headline: "Book meetings without the back-and-forth.",
    supportingCopy:
      "Your Appointment Booking AI Employee checks calendars, confirms slots, sends reminders, and handles rescheduling — on voice and chat.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Solutions", href: "/solutions" },
  },
  challenge: {
    eyebrow: "Business challenge",
    headline: "Scheduling eats into productive time.",
    supportingCopy:
      "Every appointment requires multiple touchpoints — calls, emails, calendar checks, and reminders.",
    points: [
      "Staff spend hours coordinating schedules instead of serving customers.",
      "Double-bookings and missed appointments cost revenue and trust.",
      "Patients and clients call after hours when no one can confirm a slot.",
      "Reminder calls and follow-ups fall through the cracks during busy periods.",
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    headline: "Scheduling handled end-to-end.",
    steps: [
      {
        title: "Checks real-time availability",
        description:
          "Connects to Google Calendar, Outlook, or Calendly to find open slots instantly.",
      },
      {
        title: "Confirms and books",
        description:
          "Captures required details, confirms the appointment, and creates the calendar event.",
      },
      {
        title: "Sends reminders",
        description:
          "Automated confirmation and reminder messages reduce no-shows.",
      },
      {
        title: "Handles changes",
        description:
          "Reschedules and cancellations processed without staff intervention.",
      },
    ],
  },
  workflow: {
    eyebrow: "Example workflow",
    headline: "From phone call to confirmed appointment.",
    steps: [
      {
        label: "Trigger",
        description: "Patient calls to schedule a follow-up visit.",
      },
      {
        label: "AI Employee",
        description: "Appointment Booking AI Employee",
      },
      {
        label: "Process",
        description:
          "Checks provider availability → offers time slots → confirms patient details → books the appointment.",
      },
      {
        label: "Outcome",
        description:
          "Appointment confirmed, calendar updated, and SMS reminder scheduled.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Expected outcomes",
    headline: "Scheduling that runs itself.",
    items: [
      {
        title: "Fewer no-shows",
        description:
          "Automated reminders keep appointments top of mind for customers and patients.",
      },
      {
        title: "More bookings captured",
        description:
          "After-hours and overflow calls convert to confirmed appointments, not voicemails.",
      },
      {
        title: "Staff time reclaimed",
        description:
          "Your team stops playing phone tag and focuses on in-person service.",
      },
      {
        title: "Accurate calendars",
        description:
          "Every booking synced to your calendar system in real time.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions about Appointment Booking.",
    items: [
      {
        question: "Which calendar systems are supported?",
        answer:
          "Google Calendar, Microsoft Outlook, Calendly, and other scheduling tools. We confirm compatibility during onboarding.",
      },
      {
        question: "Can it handle multiple providers or locations?",
        answer:
          "Yes. Route bookings to the right provider, location, or service type based on your rules.",
      },
      {
        question: "Does it work for patient scheduling?",
        answer:
          "Yes. Healthcare teams use it for patient intake and follow-up scheduling with appropriate workflows.",
      },
      {
        question: "Can customers reschedule on their own?",
        answer:
          "Yes. The AI employee handles rescheduling and cancellation requests through voice or chat.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to hire",
    headline: "Automate scheduling across your business.",
    supportingCopy:
      "Book a demo to see appointment booking tailored to your calendar and workflow.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
