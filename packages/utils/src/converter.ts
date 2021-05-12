/**
 * Splits a size (e.g. 1.5rem) into its value and the unit. If no unit is given, `px` will returned.
 * @param size The size which should split
 * @returns The size as number and the unit
 */
export const separateSizeAndUnit = (size: number | string): [number, string] => {
  let value: number
  let unit = 'px'

  if (typeof size === 'string') {
    const fontSizeAsNumberAndUnit = size.split(/[^0-9]+?$/)
    value = +fontSizeAsNumberAndUnit[0]
    unit = fontSizeAsNumberAndUnit[1]
  } else {
    value = size
  }

  return [value, unit]
}
