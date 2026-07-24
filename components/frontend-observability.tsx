"use client";

import { useEffect } from "react";
import {
  faro,
  getWebInstrumentations,
  initializeFaro,
} from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

const FARO_URL =
  "https://faro-collector-prod-ap-south-1.grafana.net/collect/bc5f7e64c1ced7230e74eb9a8d663498";

/**
 * Grafana Faro client init.
 * IMPORTANT: check `faro.config` (not `faro.api`) — api is a noop object before init.
 */
function FrontendObservability() {
  useEffect(() => {
    // Already initialized
    if (faro.config) {
      return;
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
          ...getWebInstrumentations(),
          new TracingInstrumentation(),
        ],
      });

      faro.api?.pushEvent("faro_boot");
      console.info("[Faro] initialized — sending to Grafana Cloud");
    } catch (error) {
      console.warn("[Faro] init failed", error);
    }
  }, []);

  return null;
}

export { FrontendObservability };
