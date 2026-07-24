"use client";

import { useEffect } from "react";

const FARO_URL =
  "https://faro-collector-prod-ap-south-1.grafana.net/collect/bc5f7e64c1ced7230e74eb9a8d663498";

/**
 * Client-only Faro init. Dynamic-imports the SDK so Next.js SSR never touches window.
 */
function FrontendObservability() {
  useEffect(() => {
    let cancelled = false;

    async function startFaro() {
      try {
        const [{ faro, getWebInstrumentations, initializeFaro }, { TracingInstrumentation }] =
          await Promise.all([
            import("@grafana/faro-web-sdk"),
            import("@grafana/faro-web-tracing"),
          ]);

        if (cancelled || faro.api) {
          return;
        }

        initializeFaro({
          url: process.env.NEXT_PUBLIC_FARO_URL?.trim() || FARO_URL,
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

        console.info("[Faro] Frontend observability initialized");
      } catch (error) {
        console.warn("[Faro] Failed to initialize", error);
      }
    }

    void startFaro();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

export { FrontendObservability };
