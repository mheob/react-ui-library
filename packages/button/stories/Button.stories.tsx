import { Meta, Story } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from '../src/Button'

export default {
  title: 'Testing/Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>My fancy button</Button>

export const Default = Template.bind({})
