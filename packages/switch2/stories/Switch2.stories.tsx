import { Meta, Story } from '@storybook/react/types-6-0'

import { Switch2, Switch2Props } from '../src/Switch2'

export default {
  title: 'Testing/Components/Switch2',
  component: Switch2,
} as Meta

const Template: Story<Switch2Props> = (args) => <Switch2 {...args} />

export const Default = Template.bind({})
