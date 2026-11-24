export type Job = {
  slug: string;
  company: string;
  /** Short name for the phone layout, e.g. "Informatics Services Corp." */
  role: string;
  /** Short role tag on phones, e.g. "Lead", "Freelance". Omit to show none. */
  roleShort?: string;
  /** Display years, e.g. "2021 – 23". */
  years: string;
  /** Exact dates from the resume, for the accessible description. */
  dates: string;
  summary: string;
  /** Shorter line for phones. */
  summaryShort: string;
  current?: boolean;
};
