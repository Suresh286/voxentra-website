"use client";

import { useEffect } from "react";
import {
  faro,
  getWebInstrumentations,
  initializeFaro,
} from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

/**
 * Initializes Grafana Faro (Frontend Observability) on the client only.
 * Set NEXT_PUBLIC_FARO_URL in Vercel / .env.local to enable.
 */
function FrontendObservability() {
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_FARO_URL?.trim();

    if (!url || faro.api) {
      return;
    }

    try {
      initializeFaro({
        url,
        app: {
          name: process.env.NEXT_PUBLIC_FARO_APP_NAME ?? "Zuloo ai",
          version: process.env.NEXT_PUBLIC_FARO_APP_VERSION ?? "1.0.0",
          environment:
            process.env.NEXT_PUBLIC_VERCEL_ENV ??
            process.env.NEXT_PUBLIC_FARO_ENVIRONMENT ??
            "production",
        },
        instrumentations: [
          ...getWebInstrumentations(),
          new TracingInstrumentation(),
        ],
      });
    } catch {
      // Never break the marketing site if observability fails to start.
    }
  }, []);

  return null;
}

export { FrontendObservability };
