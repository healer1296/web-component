import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createStyleSheet } from '../../jss';

export interface One3ConnectInterface {
  render(): import('lit-html').TemplateResult<1>;
}

@customElement('one3-connect')
export class One3Connect extends LitElement implements One3ConnectInterface {

  @property()
  combineStyle = {
    connect: `
      background-color: blue;
    `
  }

  render() {
    const { classes } = createStyleSheet(this.combineStyle);
    return html`<button part="connect" class="${classes.connect}">Connect Wallet</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'one3-connect': One3Connect;
  }
}
