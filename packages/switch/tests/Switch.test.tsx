import { render, testA11y } from '@mheob/test-utils'

import { Switch } from '../src'

describe('LabelledSwitch component', () => {
  it('passes a11y test', async () => {
    await testA11y(<Switch label="myLabel" />)
  })

  it('should render a label element with a text before the switch', () => {
    const { container } = render(<Switch label="myLabel" labelPlacement="start" />)
    expect(container.firstChild).toHaveTextContent('myLabel')
  })

  it('should render a label element without a text', () => {
    const { getByTestId } = render(<Switch label="myLabel" />)
    expect(getByTestId(/SimpleSwitch/i).firstChild).toHaveAttribute('aria-label', 'myLabel')
  })
})
