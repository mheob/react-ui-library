import { CSSTransition } from 'react-transition-group'

import { BackdropStylingProps, StyledBackdrop } from './Backdrop.styles'

export type BackdropProps = {
  isVisible?: boolean
} & BackdropStylingProps

export const Backdrop = ({
  isScrollable = false,
  isVisible = false,
  opacity = 0.65,
}: BackdropProps) => {
  const backdropStylingProps = { isScrollable, opacity }

  return (
    <CSSTransition in={isVisible} classNames="animate" timeout={400} unmountOnExit>
      <StyledBackdrop {...backdropStylingProps} data-testid="backdrop" />
    </CSSTransition>
  )
}
