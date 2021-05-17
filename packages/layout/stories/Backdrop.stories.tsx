import { Meta, Story } from '@storybook/react/types-6-0'

import { Backdrop, BackdropProps } from '../src/Backdrop'

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
} as Meta

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />

export const Default = Template.bind({})
