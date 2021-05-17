import { fireEvent, render, testA11y } from '@mheob/test-utils'
import Color from 'color'

import { Button } from '../src'

describe('Button component', () => {
  it('passes a11y test', async () => {
    await testA11y(<Button>test</Button>)
  })

  it('renders correctly', () => {
    const { getByText } = render(<Button>Email</Button>)
    expect(getByText(/email/i)).toBeTruthy()
  })

  it('was clicked and the `onClick` fired', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>Email</Button>)
    fireEvent.click(getByText(/email/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('uses the webfont `lato`', () => {
    const { getByText } = render(<Button webFont="lato">Email</Button>)
    expect(getByText(/email/i)).toHaveStyleRule('font-family', 'lato')
  })

  it('has the style rule `color` with the value of `rgb(255, 0, 0)`', () => {
    const { getByText } = render(<Button textColor="red">Email</Button>)
    expect(getByText(/email/i)).toHaveStyleRule('color', Color('red').toString())
  })

  it('has a darker hover state of the style rule `background-color`', () => {
    const { getByText } = render(<Button buttonColor="#cccccc">Email</Button>)
    expect(getByText(/email/i)).toHaveStyleRule(
      'background-color',
      Color('#cccccc').darken(0.05).toString(),
      { target: ':hover' }
    )
  })

  it('has the style rule `padding` with the value of `16px 32px`', () => {
    const { getByText } = render(<Button fontSize={16}>Email</Button>)
    expect(getByText(/email/i)).toHaveStyleRule('padding', '16px 32px')
  })

  it('has the style rule `border-radius` with the value of `2rem`', () => {
    const { getByText } = render(<Button borderRadius="2.5rem">Email</Button>)
    expect(getByText(/email/i)).toHaveStyleRule('border-radius', '2.5rem')
  })
})
