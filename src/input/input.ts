import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { InputStyle } from './input.styles';

@customElement('one-input')
export class OneInput extends LitElement {
    static styles = InputStyle;

    @property()
    label: string = ''

    @property()
    placeholder: string = ''

    @property()
    type: string = 'text'

    render() {
        return html`
        <div class="wrapper">
            <label>${this.label}</label>
            <input type=${this.type} placeholder=${this.placeholder} />
        </div>
    `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'one-input': OneInput
    }
}
