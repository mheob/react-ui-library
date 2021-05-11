import styled from '@emotion/styled'
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
  fontSize = typeof fontSize === 'number' ? fontSize : parseInt(fontSize)
  return fontSize + 'px ' + fontSize * 2 + 'px'
}

export type ButtonStylingProps = {
  /** Round the corners of the button. Number values will converted to pixel. */
  borderRadius: number | string

  /** The background color of the button. */
  buttonColor: string

  /** The font family of the button. */
  fontFamily?: string

  /** The font size of the button. Number values will converted to pixel. */
  fontSize: number | string

  /** The text color of the button. */
  textColor?: string
}

export const ButtonWrapper = styled.button<ButtonStylingProps>`
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: ${({ fontSize }) => getPadding(fontSize)};
  color: ${({ textColor, buttonColor }) => getValidatedTextColor(textColor, buttonColor)};
  font-weight: normal;
  font-size: ${({ fontSize }) => (typeof fontSize === 'number' ? `${fontSize}px` : fontSize)};
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`}
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  background-color: ${({ buttonColor }) => convertBgColorFromStringToColor(buttonColor).toString()};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius};
  cursor: pointer;

  &:hover {
    background-color: ${({ buttonColor }) => getValidatedHoverBgColor(buttonColor)};
  }

  span {
    -webkit-touch-callout: none;
    margin: 0;
    color: ${({ textColor, buttonColor }) => getValidatedTextColor(textColor, buttonColor)};
    font-size: ${({ fontSize }) => fontSize};
    font-family: ${({ fontFamily }) => fontFamily};
    line-height: normal;
    text-align: center;
    user-select: none;
  }
`

export const ButtonInner = styled.span``
