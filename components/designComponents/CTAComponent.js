"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class CtaComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/ `
        <section class="flex flex-col justify-center">
            <h2 class="text-2xl">${this.getAttribute('heading') ?? ''}</h2>
            <p class="my-4">${this.getAttribute('text') ?? ''}</p>
            <a href="#" class="my-4 bg-[var(--bzl-yellow)] px-6 py-2 text-xl rounded-full font-bold w-fit">${this.getAttribute('buttonText') ?? ''}</a>
        </section>
        `;
    }
}

customElements.define("cta-component", CtaComponent);
