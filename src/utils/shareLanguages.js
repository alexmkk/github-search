export function shareLanguages(obj = {}) {
  let sum = Object.values(obj).reduce((acc, el) => acc + el, 0)
  let newObj = []
  for (let key in obj) {
    newObj[key] = (obj[key] / sum * 100).toFixed(2)
  }
  
  return newObj
}