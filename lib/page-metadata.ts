import type { Metadata } from "next";

import { site } from "@/content/site";

export function createPageMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: site.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.slogan}`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [site.ogImagePath],
    },
  };
}
