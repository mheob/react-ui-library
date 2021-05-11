import { useState } from 'react'

import { StyledSwitch } from './Switch.styles'

export type SwitchProps = {
  /**
   * The initial state of the switch.
   */
  isChecked?: boolean

  /**
   * The disabled state of the switch.
   */
  isDisabled?: boolean

  /**
   * Get the checked state in parent component.
   */
  onChange: (isActive: boolean) => void
}

/**
 * Switches are the preferred way to adjust settings.
 * The option that the switch controls, as well as the state it’s in,
 * should be made clear from the corresponding inline label.
 */
export const Switch = ({ isChecked = false, isDisabled = false, onChange }: SwitchProps) => {
  const [isActive, setIsActive] = useState(isChecked)

  const handleChange = () => {
    if (isDisabled) return
    onChange(!isActive)
    setIsActive(!isActive)
  }

  return <StyledSwitch checked={isActive} disabled={isDisabled} onChange={handleChange} />
}
