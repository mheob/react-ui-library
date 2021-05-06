import { Meta, Story } from '@storybook/react/types-6-0'

import Switch, { SwitchProps } from './Switch'

export default {
  title: 'Switch',
  component: Switch,
} as Meta

const Template: Story<SwitchProps> = (args) => <Switch {...args} />

export const Default = Template.bind({})
