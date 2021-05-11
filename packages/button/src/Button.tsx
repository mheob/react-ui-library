import { useWebFont } from '@mheob/hooks'
import { ReactNode } from 'react'

import { ButtonInner, ButtonStylingProps, ButtonWrapper } from './Button.styles'

export type ButtonProps = {
  /** The content of the button. */
  children: ReactNode

  /** Perform the click event in the parent component. */
  onClick: () => void

  /** Use an optional web font from the google univers. */
  webFont?: string | string[]
} & ButtonStylingProps

/**
 * Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
 *
 * - Dialogs
 * - Modal windows
 * - Forms
 * - Cards
 * - Toolbars
 */
export const Button = ({
  borderRadius,
  buttonColor,
  children,
  fontFamily,
  fontSize,
  onClick,
  webFont,
  textColor = undefined,
}: ButtonProps) => {
  if (webFont) useWebFont(webFont)

  const buttonStylingProps = { borderRadius, buttonColor, fontFamily, fontSize, onClick, textColor }

  return (
    <ButtonWrapper {...buttonStylingProps} onClick={onClick}>
      <ButtonInner>{children}</ButtonInner>
    </ButtonWrapper>
  )
}
