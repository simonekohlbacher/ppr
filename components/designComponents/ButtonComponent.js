"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class ButtonComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        const text = this.getAttribute('text') ?? '';
        const href = this.getAttribute('href') ?? '#';
        const target = this.getAttribute('target') ?? '_self';

        return /*html*/ `
        <section class="m-12 flex justify-center"> 
            <a 
                href="${href}" 
                target="${target}" 
                rel="noopener noreferrer" 
                class="inline-flex items-center bg-[var(--bzl-yellow)] px-8 py-2 text-sm rounded-full font-bold whitespace-nowrap">
                ${text}
            </a>
        </section>
        `;
    }
}

customElements.define("button-component", ButtonComponent);
