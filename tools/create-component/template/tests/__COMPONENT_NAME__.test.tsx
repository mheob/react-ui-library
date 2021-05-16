import { render, testA11y } from '@mheob/test-utils'

import { {{filename}} } from '../src'

describe('{{filename}} component', () => {
  it('passes a11y test', async () => {
    await testA11y(<{{filename}} />)
  })

  it('renders correctly', () => {
    const { getByText } = render(<{{filename}} />)
    expect(getByText('Email')).toBeTruthy()
  })
})
