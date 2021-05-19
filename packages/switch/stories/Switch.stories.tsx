import { HStack, chakra } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import { ReactNode } from 'react'

import { Switch, SwitchProps } from '../src/Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
  decorators: [
    (story: () => ReactNode) => (
      <chakra.div maxWidth="lg" mx="auto" mt={6} p={6}>
        {story()}
      </chakra.div>
    ),
  ],
} as Meta

export const Default: Story<SwitchProps> = (args) => <Switch {...args} />

export const Base = () => <Switch label="green" colorScheme="green" />

export const Disabled = () => (
  <Switch
    label="disabled"
    labelPlacement="end"
    isDisabled
    size="md"
    colorScheme="blue"
    margin="20px"
  />
)

export const Readonly = () => (
  <Switch
    label="readonly"
    labelPlacement="end"
    isReadOnly
    size="md"
    colorScheme="blue"
    margin="20px"
  />
)

export const Usage = () => (
  <Switch label="label start" labelPlacement="start" colorScheme="green" id="email-alerts" />
)

export const Sizes = () => {
  return (
    <HStack>
      <Switch label="size sm" labelPlacement="end" size="sm" colorScheme="green" />
      <Switch label="size md" labelPlacement="end" size="md" colorScheme="red" />
      <Switch label="size lg" labelPlacement="end" size="lg" colorScheme="orange" />
    </HStack>
  )
}
