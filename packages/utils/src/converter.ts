// TODO: Add error handling
/**
 * Splits a size (e.g. 1.5rem) into its value and the unit. If no unit is given, `px` will returned.
 * @todo Add error handling
 * @param size The size which should split
 * @returns The size as number and the unit
 */
export const separateSizeAndUnit = (size: number | string): [number, string] => {
  const defaultUnit = 'px'

  if (typeof size === 'number') return [size, defaultUnit]

  const fontSizeAsNumberAndUnit = size.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!fontSizeAsNumberAndUnit) return [1, 'em']
  const [, value, unit] = fontSizeAsNumberAndUnit
  return [+value, unit || defaultUnit]
}
