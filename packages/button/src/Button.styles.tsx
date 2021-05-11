import styled from '@emotion/styled'
import { separateSizeAndUnit } from '@mheob/utils'
import Color from 'color'

const convertBgColorFromStringToColor = (buttonColor: string) => {
  return Color(buttonColor)
}

const getValidatedTextColor = (textColor: string | undefined, buttonColor: string) => {
  const bgColor = convertBgColorFromStringToColor(buttonColor)
  return Color(textColor || (bgColor.isLight() ? '#000' : '#fff')).toString()
}

const getValidatedHoverBgColor = (buttonColor: string) => {
  const bgColor = convertBgColorFromStringToColor(buttonColor)
  return Color(bgColor.isLight() ? bgColor.darken(0.05) : bgColor.lighten(0.05)).toString()
}

const getPadding = (fontSize: number | string) => {
  const [size, unit] = separateSizeAndUnit(fontSize)
  return `${size}${unit} ${size * 2}${unit}`
}

const getBorderRadius = (borderRadius: number | string) => {
  const [radius, unit] = separateSizeAndUnit(borderRadius)
  return `${radius}${unit}`
}

export type ButtonStylingProps = {
  /** Round the corners of the button. Number values will converted to pixel. */
  borderRadius?: number | string

  /** The background color of the button. */
  buttonColor?: string

  /** The font family of the button. */
  fontFamily?: string

  /** The font size of the button. Number values will converted to pixel. */
  fontSize?: number | string

  /** The text color of the button. */
  textColor?: string
}

export const ButtonWrapper = styled.button<ButtonStylingProps>`
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: ${({ fontSize = '14px' }) => getPadding(fontSize)};
  color: ${({ textColor, buttonColor = '#02a2aa' }) =>
    getValidatedTextColor(textColor, buttonColor)};
  font-weight: normal;
  font-size: ${({ fontSize = '14px' }) =>
    typeof fontSize === 'number' ? `${fontSize}px` : fontSize};
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`}
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  background-color: ${({ buttonColor = '#02a2aa' }) =>
    convertBgColorFromStringToColor(buttonColor).toString()};
  border-radius: ${({ borderRadius = 2 }) => getBorderRadius(borderRadius)};
  cursor: pointer;

  &:hover {
    background-color: ${({ buttonColor = '#02a2aa' }) => getValidatedHoverBgColor(buttonColor)};
  }

  span {
    -webkit-touch-callout: none;
    margin: 0;
    color: ${({ textColor, buttonColor = '#02a2aa' }) =>
      getValidatedTextColor(textColor, buttonColor)};
    font-size: ${({ fontSize }) => fontSize};
    font-family: ${({ fontFamily }) => fontFamily};
    line-height: normal;
    text-align: center;
    user-select: none;
  }
`

export const ButtonInner = styled.span``
