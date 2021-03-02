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

// JWT Token
export const jwtToData = (token) => {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}
