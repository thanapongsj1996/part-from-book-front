// Date conversion
export const thaiTimeConvert = (time, monthFormat = 'long') => {
  time = new Date(time)
  return time.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: monthFormat,
    day: 'numeric',
  })
}
