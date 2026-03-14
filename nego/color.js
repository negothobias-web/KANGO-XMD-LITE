const chalk = require('chalk')

/**
 * Return a string formatted with chalk using the provided color.
 * @param {string} text
 * @param {string} [clr]
 */
function color(text, clr = 'green') {
  if (!text) return ''
  if (!clr || typeof clr !== 'string') return text
  if (chalk[clr]) return chalk[clr](text)
  return text
}

module.exports = { color }
