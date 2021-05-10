import { useState } from 'react'

import { Pin, Wrapper } from './Switch2.styles'

export type Switch2Props = {
  isActive?: boolean
  isDisabled?: boolean
  onClick: (isActive: boolean) => void
}

export const Switch2 = ({ isActive = false, isDisabled = false, onClick }: Switch2Props) => {
  const [isChecked, setIsChecked] = useState(isActive)

  const handleClick = () => {
    if (isDisabled) return
    onClick(!isChecked)
    setIsChecked(!isChecked)
  }

  return (
    <Wrapper onClick={handleClick} isChecked={isChecked} isDisabled={isDisabled}>
      <Pin isChecked={isChecked} />
    </Wrapper>
  )
}
