export type ProjectTone = "butter" | "peach" | "lilac" | "mint" | "surface";

export type Project = {
  slug: string;
  name: string;
  /** Mono kicker shown above the name, e.g. "CAFÉ · ORDERING + LOYALTY". */
  kind: string;
  description: string;
  /** "featured" = big browser card, "colour" = pastel card, "client" = white client card. */
  layout: "featured" | "colour" | "client";
  tone: ProjectTone;
  liveUrl?: string;
  codeUrl?: string;
  /** Label for the live link when it isn't a demo (e.g. a business site). */
  liveLabel?: string;
  stack?: string;
  /** Client status pill, e.g. "CLIENT · LIVE". */
  badge?: { text: string; tone: "mint" | "butter" };
  /** Client entries render only when cleared (kickoff answers). */
  visible: boolean;
};
