type ClipboardLike = { writeText: (text: string) => Promise<void> } | undefined;

/** Copies text, returning whether it worked. Never throws. */
export async function copyText(text: string, clipboard: ClipboardLike = globalThis.navigator?.clipboard): Promise<boolean> {
  if (!clipboard) return false;
  try {
    await clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
