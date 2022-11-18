import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './input'

export default {
  title: 'Input',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'onChange' },
  },
  render: (args) => html`<one-input @onchange=${args.onClick} label=${args.label}></one-input>`,
} as Meta

export const Default: StoryObj = {
  name: 'Default',
  args: {
    label: 'Email: ',
  },
}
