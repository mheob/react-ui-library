import { testA11y } from '@mheob/test-utils'

import { SimpleSwitch } from '../src/SimpleSwitch'

describe('Switch component', () => {
  it('passes a11y test', async () => {
    await testA11y(<SimpleSwitch label="myLabel" />)
  })
})
