import styled from '@emotion/styled'

export type BackdropStylingProps = {
  /** Fixes the Backdrop over the full screen. */
  isScrollable?: boolean

  /** The opacity of the Backdrop. */
  opacity?: number
}

export const StyledBackdrop = styled.div<BackdropStylingProps>`
  position: ${({ isScrollable }) => (isScrollable ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  z-index: 2147483644;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 300ms;

  &.animate-enter {
    /* display: block; */
    opacity: 0;
  }

  &.animate-enter-active {
    /* display: block; */
    opacity: ${({ opacity }) => opacity};
    transition: opacity 200ms;
  }

  &.animate-enter-done {
    /* display: block; */
    opacity: ${({ opacity }) => opacity};
  }

  &.animate-exit {
    /* display: block; */
    opacity: ${({ opacity }) => opacity};
  }

  &.animate-exit-active {
    /* display: none; */
    opacity: 0;
    transition: opacity 200ms;
  }
`
