import { render, testA11y } from '@mheob/test-utils'
import { toKebabCase } from '@mheob/utils'

import { LabelledSwitch } from '../src/LabelledSwitch'

describe('LabelledSwitch component', () => {
  it('passes a11y test', async () => {
    await testA11y(<LabelledSwitch label="myLabel" labelPlacement="end" />)
  })

  it('should render the label correctly after the switch', () => {
    const { container } = render(<LabelledSwitch label="myLabel" labelPlacement="end" />)
    expect(container.lastChild).toHaveTextContent('myLabel')
  })

  it('should render the label correctly before the switch', () => {
    const { container } = render(<LabelledSwitch label="myLabel" labelPlacement="start" />)
    expect(container.firstChild).toHaveTextContent('myLabel')
  })

  it('should render the switch with a given id', () => {
    const { getByTestId } = render(
      <LabelledSwitch label="myLabel" labelPlacement="end" id="myID" />
    )
    expect(getByTestId(/LabelledSwitch/i).firstChild).toHaveAttribute('id', 'myID')
  })

  it('should render the switch with the label as id, if id is not given', () => {
    const { getByTestId } = render(<LabelledSwitch label="myLabel" labelPlacement="end" />)
    expect(getByTestId(/LabelledSwitch/i).firstChild).toHaveAttribute('id', toKebabCase('myLabel'))
  })
})
