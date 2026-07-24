"use client";

import {
  faro,
  getWebInstrumentations,
  initializeFaro,
} from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

const FARO_URL =
  "https://faro-collector-prod-ap-south-1.grafana.net/collect/bc5f7e64c1ced7230e74eb9a8d663498";

/**
 * Matches Grafana's official Next.js Faro pattern:
 * initialize synchronously in a client component (guarded by faro.api).
 * @see https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/get-started/instrument-nextjs/
 */
function FrontendObservability() {
  // Skip if already initialized (also avoids Strict Mode double-init errors)
  if (faro.api) {
    return null;
  }

  try {
    initializeFaro({
      url: process.env.NEXT_PUBLIC_FARO_URL || FARO_URL,
      app: {
        name: process.env.NEXT_PUBLIC_FARO_APP_NAME || "Zuloo ai",
        version: process.env.NEXT_PUBLIC_FARO_APP_VERSION || "1.0.0",
        environment:
          process.env.NEXT_PUBLIC_VERCEL_ENV ||
          process.env.NEXT_PUBLIC_FARO_ENVIRONMENT ||
          "production",
      },
      instrumentations: [
        ...getWebInstrumentations({
          captureConsole: true,
        }),
        new TracingInstrumentation(),
      ],
    });
  } catch {
    // Faro already initialized or browser blocked it — never break the site.
  }

  return null;
}

export { FrontendObservability };
