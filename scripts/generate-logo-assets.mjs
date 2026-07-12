import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.resolve(
  ROOT,
  "../.cursor/projects/c-Projects-voxentra-website/assets/c__Projects_voxentra-website_Logo.jpg",
);
const ALT_SRC = path.resolve(
  process.env.USERPROFILE ?? "",
  ".cursor/projects/c-Projects-voxentra-website/assets/c__Projects_voxentra-website_Logo.jpg",
);
const OUT = path.join(ROOT, "public");

const sourcePath = fs.existsSync(SRC) ? SRC : ALT_SRC;

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Logo source not found: ${sourcePath}`);
}

fs.mkdirSync(OUT, { recursive: true });

/** Matches --color-neutral-background (logo mark / OG surfaces) */
const NAVY = { r: 5, g: 7, b: 10 };

/** Matches --color-neutral-surface (footer background) */
const FOOTER_SURFACE = { r: 18, g: 21, b: 28 };

async function writeSvg(filename, body) {
  await fs.promises.writeFile(
    path.join(OUT, filename),
    `<?xml version="1.0" encoding="UTF-8"?>\n${body}\n`,
    "utf8",
  );
}

async function pngToDataUri(filePath) {
  const buffer = await fs.promises.readFile(filePath);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.max(Math.abs(r1 - r2), Math.abs(g1 - g2), Math.abs(b1 - b2));
}

/**
 * Replace the source JPEG background with a flat surface color so the logo
 * blends into the footer without a visible rectangular boundary.
 */
async function replaceBackgroundColor(inputBuffer, surface, tolerance = 42) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const pixels = data;

  const corners = [
    0,
    (width - 1) * 4,
    (height - 1) * width * 4,
    ((height - 1) * width + (width - 1)) * 4,
  ];

  const bg = {
    r: Math.round(corners.reduce((sum, idx) => sum + pixels[idx], 0) / corners.length),
    g: Math.round(
      corners.reduce((sum, idx) => sum + pixels[idx + 1], 0) / corners.length,
    ),
    b: Math.round(
      corners.reduce((sum, idx) => sum + pixels[idx + 2], 0) / corners.length,
    ),
  };

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (colorDistance(r, g, b, bg.r, bg.g, bg.b) <= tolerance) {
      pixels[i] = surface.r;
      pixels[i + 1] = surface.g;
      pixels[i + 2] = surface.b;
      pixels[i + 3] = 255;
    }
  }

  return sharp(pixels, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toBuffer();
}

const source = sharp(sourcePath);
const meta = await source.metadata();

// Icon crop — centered V mark with waveform (1024×682 source)
const iconCrop = {
  left: Math.round(meta.width * 0.28),
  top: Math.round(meta.height * 0.06),
  width: Math.round(meta.width * 0.44),
  height: Math.round(meta.width * 0.44),
};

const iconBuffer = await sharp(sourcePath)
  .extract(iconCrop)
  .resize(512, 512, { fit: "contain", background: NAVY })
  .png({ compressionLevel: 9 })
  .toBuffer();

await sharp(iconBuffer).resize(512, 512).png().toFile(path.join(OUT, "favicon.png"));
await sharp(iconBuffer).resize(256, 256).png().toFile(path.join(OUT, "logo.png"));

// Full stacked logo for footer — surface-matched background + breathing room
const FOOTER_LOGO_WIDTH = 880;
const FOOTER_PAD_RATIO = 0.12;

const resizedLogo = await sharp(sourcePath)
  .resize(FOOTER_LOGO_WIDTH, null, { withoutEnlargement: true })
  .toBuffer();

const surfaceMatchedLogo = await replaceBackgroundColor(
  resizedLogo,
  FOOTER_SURFACE,
);

const fullMeta = await sharp(surfaceMatchedLogo).metadata();
const padX = Math.round(fullMeta.width * FOOTER_PAD_RATIO);
const padY = Math.round(fullMeta.height * FOOTER_PAD_RATIO);

await sharp({
  create: {
    width: fullMeta.width + padX * 2,
    height: fullMeta.height + padY * 2,
    channels: 3,
    background: FOOTER_SURFACE,
  },
})
  .composite([{ input: surfaceMatchedLogo, top: padY, left: padX }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(OUT, "logo-full.png"));

// Open Graph — 1200×630, logo centered on brand navy
const ogWidth = 1200;
const ogHeight = 630;
const ogLogo = await sharp(sourcePath)
  .resize(760, null, { withoutEnlargement: true })
  .toBuffer();
const ogLogoMeta = await sharp(ogLogo).metadata();

await sharp({
  create: {
    width: ogWidth,
    height: ogHeight,
    channels: 3,
    background: NAVY,
  },
})
  .composite([
    {
      input: ogLogo,
      top: Math.round((ogHeight - ogLogoMeta.height) / 2),
      left: Math.round((ogWidth - ogLogoMeta.width) / 2),
    },
  ])
  .png({ compressionLevel: 9 })
  .toFile(path.join(OUT, "og-image.png"));

// SVG wrappers — preserve exact raster artwork (no redesign)
const faviconData = await pngToDataUri(path.join(OUT, "favicon.png"));
const logoData = await pngToDataUri(path.join(OUT, "logo.png"));
const ogData = await pngToDataUri(path.join(OUT, "og-image.png"));

await writeSvg(
  "favicon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="Voxentra AI">
  <image href="${faviconData}" width="512" height="512"/>
</svg>`,
);

await writeSvg(
  "logo.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" role="img" aria-label="Voxentra AI">
  <image href="${logoData}" width="256" height="256"/>
</svg>`,
);

await writeSvg(
  "og-image.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" role="img" aria-label="Voxentra AI">
  <image href="${ogData}" width="1200" height="630"/>
</svg>`,
);

console.log("Logo assets generated in public/");
