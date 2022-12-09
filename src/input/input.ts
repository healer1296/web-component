import { html, LitElement, nothing } from 'lit'
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

    @property()
    disabled: boolean = false;

    render() {
        return html`
        <div class="wrapper">
            <label>${this.label || nothing}</label>
            <input type=${this.type || nothing} placeholder=${this.placeholder || nothing} ?disabled=${this.disabled} />
        </div>
    `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'one-input': OneInput
    }
}
