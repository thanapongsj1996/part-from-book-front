const utils = {
  timeConverted: (time) => {
    time = new Date(time)
    return time.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  },
}

export default utils
