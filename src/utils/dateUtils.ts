export function formatDate(date: Date) {
  if (!(date instanceof Date)) {
    throw new Error('date must be an instance of Date')
  }

  return new Intl.DateTimeFormat('sv-SE', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(date)
}
