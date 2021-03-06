import accounting from 'accounting'

export const fiat = (value) => {
  return accounting.formatMoney(value)
}

export const percentage = (value, showPositive, decimalPlaces = 2) => {
  const rounded = accounting.toFixed(value, decimalPlaces)

  if (showPositive && value > 0) return `+${rounded}%`
  return `${rounded}%`
}

export const ellipsize = (str, maxStartChars, maxEndChars) => {
  if (str.length <= maxStartChars + maxEndChars) {
    return str
  }
  return `${str.slice(0, maxStartChars)}…${str.slice(-maxEndChars)}`
}

export default {
  fiat,
  percentage,
  ellipsize
}
