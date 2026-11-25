export const SECTIONS = {
  top: "top",
  work: "work",
  experience: "experience",
  services: "services",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export const ROUTES = {
  home: "/",
} as const;

/** "/#work": same-page jump on the home page, and still works from the 404 page. */
export const anchor = (id: SectionId) => `/#${id}`;

/** Main navigation, in order. */
export const NAV_ITEMS: ReadonlyArray<{ label: string; id: SectionId }> = [
  { label: "Work", id: SECTIONS.work },
  { label: "Experience", id: SECTIONS.experience },
  { label: "Services", id: SECTIONS.services },
  { label: "Contact", id: SECTIONS.contact },
];
