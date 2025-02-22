const numUnit = /^([+-]?[0-9][.,0-9]*)([a-z°²³µ/]+)$/i

const notUnit = new Set([
  'st',
  'nd',
  'rd',
  'th',
  'am',
  'pm',
  'max'
])

const numberUnit = function (terms, i) {
  let term = terms[i]
  let parts = term.text.match(numUnit)
  if (parts !== null) {
    // is it a recognized unit, like 'km'?
    let unit = parts[2].toLowerCase().trim()
    // don't split '3rd'
    if (notUnit.has(unit)) {
      return null
    }
    return [parts[1], unit] //split it
  }
  return null
}
export default numberUnit
