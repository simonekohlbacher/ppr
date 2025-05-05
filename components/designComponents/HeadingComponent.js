"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class HeadingComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/ `
       <section>
          <div class="flex flex-col">
            <h2 class="text-3xl mb-12 px-12 md:px-22 text-left">
              ${this.getAttribute("headline") || ""}
            </h2>
            <h3 class="text-2xl font-semibold mb-4 md:px-22 px-12 text-left">
              ${this.getAttribute("subHeadline") || ""}
            </h3>
            <div class="flex mb-8 text-left">
              <div class="md:w-152 w-92 h-3 bg-[var(--bzl-yellow)]"></div>
            </div>
          </div>
        </section>

        `;
    }

}
customElements.define("heading-component", HeadingComponent);
