module.exports = function parseArrayAsString(arrayAsString) {
  return arrayAsString.split(',').map(string => string.trim())
}