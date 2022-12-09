import { LitElement } from 'lit';
export declare class OneInput extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    placeholder: string;
    type: string;
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'one-input': OneInput;
    }
}
