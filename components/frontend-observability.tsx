"use client";

import { useEffect } from "react";
import {
  faro,
  getWebInstrumentations,
  initializeFaro,
} from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

/** Grafana Cloud Faro collector for Zuloo ai (Frontend Observability). */
const FARO_COLLECTOR_URL =
  process.env.NEXT_PUBLIC_FARO_URL?.trim() ||
  "https://faro-collector-prod-ap-south-1.grafana.net/collect/bc5f7e64c1ced7230e74eb9a8d663498";

/**
 * Initializes Grafana Faro (Frontend Observability) on the client only.
 */
function FrontendObservability() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Already initialized
    if (faro.api) {
      return;
    }

    try {
      initializeFaro({
        url: FARO_COLLECTOR_URL,
        app: {
          name: process.env.NEXT_PUBLIC_FARO_APP_NAME?.trim() || "Zuloo ai",
          version: process.env.NEXT_PUBLIC_FARO_APP_VERSION?.trim() || "1.0.0",
          environment:
            process.env.NEXT_PUBLIC_VERCEL_ENV?.trim() ||
            process.env.NEXT_PUBLIC_FARO_ENVIRONMENT?.trim() ||
            "production",
        },
        instrumentations: [
          ...getWebInstrumentations(),
          new TracingInstrumentation(),
        ],
      });
    } catch (error) {
      console.warn("[Faro] Failed to initialize frontend observability", error);
    }
  }, []);

  return null;
}

export { FrontendObservability };
