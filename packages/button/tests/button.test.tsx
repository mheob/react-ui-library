import { render, testA11y } from '@mheob/test-utils'

import { Button } from '../src'

describe('Button component', () => {
  it('passes a11y test', async () => {
    await testA11y(<Button>test</Button>)
  })

  it('renders correctly', () => {
    const { getByText } = render(<Button>Email</Button>)
    expect(getByText('Email')).toBeTruthy()
  })

  // TODO: Add way more test to get a coverage of 100%
})
