import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('one-input')
export class OneInput extends LitElement {
    static styles = css`
    
  `

    @property()
    label = 'Default'

    render() {
        return html`
        <label>${this.label}</label>
        <input @change=${this.onChange} type="text">
    `
    }

    private onChange(e: any) {
        console.log(e.target.value);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'one-input': OneInput
    }
}
