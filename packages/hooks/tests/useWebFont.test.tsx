import { render } from '@mheob/test-utils'

import { useWebFont } from '../src'

describe('useWebFont hook', () => {
  it('render a component with `useWebFont`', () => {
    const DummyComponent = () => {
      useWebFont('lato')
      return <div data-testid="comp" />
    }

    const { getByTestId } = render(<DummyComponent />)

    expect(getByTestId('comp')).toBeInTheDocument()
  })
})
