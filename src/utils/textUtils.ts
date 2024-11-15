export function isTextNotEmpty(text: string) {
  return Boolean(text && text.toString().trim().length > 0)
}
