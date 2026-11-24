import localFont from "next/font/local";

// Self-hosted variable fonts from @fontsource-variable (all OFL), latin subset.
export const spaceGrotesk = localFont({
  src: "../../../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

export const inter = localFont({
  src: "../../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: "../../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
  preload: false,
});

export const caveat = localFont({
  src: "../../../node_modules/@fontsource-variable/caveat/files/caveat-latin-wght-normal.woff2",
  variable: "--font-caveat",
  weight: "400 700",
  display: "swap",
  preload: false,
});

export const fontVariables = [spaceGrotesk, inter, jetbrainsMono, caveat].map((f) => f.variable).join(" ");
