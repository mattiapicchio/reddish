export function isTextNotEmpty(text: string) {
  return Boolean(text && text.toString().trim().length > 0)
}

export function generateRandomId() {
  return new Date().getTime()
}
