import { html } from 'lit-html';
import { Meta, ArgTypes, StoryObj } from '@storybook/web-components';
import '../lib/connect/connect';

export default {
  title: 'ui-wallet',
  parameters: {
    layout: 'centered',
  },

  render: (args: ArgTypes) => html`<one3-connect styles=${args.styles}}></one3-connect>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Connect',
  args: {
    styles: {
      connect: {
        "font-size": "1rem"
      }
    }
  },
}
