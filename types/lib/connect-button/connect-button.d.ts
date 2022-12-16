import { LitElement } from 'lit';
export interface ConnectButtonInterface {
    showBalance: boolean;
    render(): import('lit-html').TemplateResult<1>;
}
export declare class ConnectButton extends LitElement implements ConnectButtonInterface {
    static styles: import("lit").CSSResult;
    showBalance: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'connect-button': ConnectButton;
    }
}
