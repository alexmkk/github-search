export function convDate(date) {
  const convDate = new Date(date)
  let day = convDate.getDay()
  let month = convDate.getMonth()
  let year = convDate.getFullYear()

  function checkLen(str) {
    return String(str).length === 1 ? '0' + str : str
  }

  return `${checkLen(day)}.${checkLen(month)}.${year}`
}