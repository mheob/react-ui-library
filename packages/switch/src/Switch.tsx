import { SwitchProps as ChakraSwitchProps } from '@chakra-ui/react'

import { LabelledSwitch } from './LabelledSwitch'
import { SimpleSwitch } from './SimpleSwitch'

export type SwitchProps = {
  /**
   * Defines the string that labels the checkbox element.
   * Even if it is not displayed on the screen, it is used in the `aria-label` attribute.
   */
  label: string

  /** The position of the label. */
  labelPlacement?: 'start' | 'end'
} & ChakraSwitchProps

/**
 * The Switch component is used as an alternative for the Checkbox component.
 * You can switch between enabled or disabled states.
 */
export const Switch = ({ labelPlacement, ...other }: SwitchProps) => {
  if (labelPlacement) return <LabelledSwitch {...other} labelPlacement={labelPlacement} />
  return <SimpleSwitch {...other} />
}
