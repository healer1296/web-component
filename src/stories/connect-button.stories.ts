import { Meta, Story } from '@storybook/web-components'
import { html } from 'lit'
import '../lib/connect-button/connect-button';

export default {
  title: 'Connect Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    showBalance: { control: 'boolean' }
  },
} as Meta

interface Args {
  showBalance: boolean
}

const Template: Story<Args> = (args) => html`<one-connect-button ${args}></one-connect-button> <button>12322123</button>`;

export const Default: Story<Args> = Template.bind({});
Default.args = {
  showBalance: false
};