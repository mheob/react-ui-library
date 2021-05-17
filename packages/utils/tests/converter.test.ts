import { separateSizeAndUnit } from '../src'

describe('separateSizeAndUnit Method', () => {
  it('should return a `size` of `2` and a `unit` of `rem` for the given string of `2rem`', () => {
    const [size, unit] = separateSizeAndUnit('2rem')
    expect(size).toBe(2)
    expect(unit).toBe('rem')
  })

  it('should return a `size` of `12.5` and a `unit` of `px` for the given string of `12.5`', () => {
    const [size, unit] = separateSizeAndUnit('12.5')
    expect(size).toBe(12.5)
    expect(unit).toBe('px')
  })

  it('should return a `size` of `12.5` and a `unit` of `px` for the given number of `12.5`', () => {
    const [size, unit] = separateSizeAndUnit(12.5)
    expect(size).toBe(12.5)
    expect(unit).toBe('px')
  })

  it('should return a `size` of `1` and a `unit` of `em` for the given string of `inherit`', () => {
    const [size, unit] = separateSizeAndUnit('inherit')
    expect(size).toBe(1)
    expect(unit).toBe('em')
  })
})
