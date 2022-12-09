import { Meta, StoryObj } from '@storybook/web-components'
import { html, nothing } from 'lit'

import './input'

export default {
  
  title: 'Input',
  parameters: {
    layout: 'centered',
  },
  
  render: (args) => html`
    <one-input 
      label=${args.label || nothing}
      placeholder=${args.placeholder || nothing}
      type=${args.type || nothing}
      disabled: ${args.disabled}
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

export const InputNumber: StoryObj = {
  name: 'Input number',
  args: {
    label: 'Label',
    placeholder: 'Enter number',
    type: 'number'
  },
}

export const InputDisabled: StoryObj = {
  name: 'Input disable',
  args: {
    label: 'Label',
    placeholder: 'Input disabled',
    disabled: true
  },
}

