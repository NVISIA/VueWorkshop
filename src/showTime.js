let showTime = function (value) {
  if (!value) {
    return null
  }

  let time = new Date(value)
  let hours = parseInt(time.getHours())
  let minutes = time.getMinutes().toString()
  let ampm = 'AM'

  if (hours > 12) {
    ampm = 'PM'
    hours -= 12
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes
  }

  return hours + ':' + minutes + ' ' + ampm
}

export default showTime
