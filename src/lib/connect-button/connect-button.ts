import { LitElement, unsafeCSS, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './connect-button.scss?inline';

export interface ConnectButtonInterface {
    showBalance: boolean;
    render(): import('lit-html').TemplateResult<1>;
}

@customElement('one-connect-button')
export class ConnectButton extends LitElement implements ConnectButtonInterface {
    static styles = unsafeCSS(styles);

    @property({ type: Boolean })
    showBalance = false;

    render() {
        return html`
            <button>
                <slot></slot>
                <span>${this.formatAddress('0x0D090f432CdAFf736a952e590875D59e4492E3aa')}</span>
                <!-- <div ?hidden=${!this.showBalance}><small>0.005ETH</small></div> -->
                <slot></slot>
            </button>
        `;
    }

    formatAddress(address: string) {
        return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'one-connect-button': ConnectButton;
    }
}
