// https://www.w3.org/TR/css-values-4/#font-relative-lengths
const fontRelativeLengths = ['em', 'ex', 'cap', 'ch', 'ic', 'rem', 'lh', 'rlh']

// https://www.w3.org/TR/css-values-4/#viewport-relative-lengths
const viewportPercentageLengths = ['vw', 'vh', 'vi', 'vb', 'vmin', 'vmax']

// https://www.w3.org/TR/css-values-4/#relative-lengths
const relativeLengths = [...fontRelativeLengths, ...viewportPercentageLengths]

// https://www.w3.org/TR/css-values-4/#absolute-lengths
const absoluteLengths = ['cm', 'mm', 'Q', 'in', 'pt', 'pc', 'px']

// https://www.w3.org/TR/css-values-4/#lengths
const distanceUnits = [...relativeLengths, ...absoluteLengths]

// https://www.w3.org/TR/css-values-4/#angles
const angleUnits = ['deg', 'grad', 'rad', 'turn']

// https://www.w3.org/TR/css-values-4/#time
const durationUnits = ['s', 'ms']

// https://www.w3.org/TR/css-values-4/#frequency
const frequencyUnits = ['Hz', 'kHz']

// https://www.w3.org/TR/css-values-4/#resolution
const resolutionUnits = ['dpi', 'dpcm', 'dppx']

// https://www.w3.org/TR/css-values-4/#other-units
const otherQuantities = [
  ...angleUnits,
  ...durationUnits,
  ...frequencyUnits,
  ...resolutionUnits,
]

module.exports = [...distanceUnits, ...otherQuantities]
