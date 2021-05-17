import { render, testA11y } from '@mheob/test-utils'

import { Backdrop } from '../src/Backdrop'

describe('Backdrop component', () => {
  it('passes a11y test', async () => {
    await testA11y(<Backdrop />)
  })

  it('renders correctly', () => {
    const { getByTestId } = render(<Backdrop isVisible />)
    expect(getByTestId(/backdrop/i)).toBeTruthy()
  })

  it('should not render if `isVisible` is set to false', () => {
    const { queryByTestId } = render(<Backdrop isVisible={false} />)
    expect(queryByTestId(/backdrop/i)).toBeNull()
  })

  it('has the style rule `opacity` with the value of `0.9`', () => {
    const { getByTestId } = render(<Backdrop isVisible opacity={0.9} />)
    expect(getByTestId(/backdrop/i)).toHaveStyleRule('opacity', '0.9')
  })

  it('has the style rule `position` with the value of `absolute`', () => {
    const { getByTestId } = render(<Backdrop isVisible isScrollable />)
    expect(getByTestId(/backdrop/i)).toHaveStyleRule('position', 'absolute')
  })
})
