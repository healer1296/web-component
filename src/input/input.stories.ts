import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './input'

export default {
  title: 'Input',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  render: (args) => html`
    <one-input 
      label=${args.label}
      placeholder=${args.placeholder}
    ></one-input>
  `
} as Meta

export const Default: StoryObj = {
  name: 'Default',
  args: {
    label: 'Label',
  },
}

export const Placeholder: StoryObj = {
  name: 'Placeholder',
  args: {
    label: 'Label',
    placeholder: 'Placeholder text'
  },
}
