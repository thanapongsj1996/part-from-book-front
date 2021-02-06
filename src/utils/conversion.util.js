// Date conversion
export const thaiTimeConvert = (time, monthFormat = 'long') => {
  time = new Date(time)
  return time.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: monthFormat,
    day: 'numeric',
  })
}

// File Convesion
export const filetoBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
