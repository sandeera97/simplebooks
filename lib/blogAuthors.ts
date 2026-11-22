export function getBlogAuthorImage(author?: string): string | undefined {
  return author?.trim().replace(/\s+/g, " ").toLowerCase() === "aabith sabeer"
    ? "/blog/authors/aabith-sabeer.jpg"
    : undefined;
}
