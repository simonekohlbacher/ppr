"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class LinkedInComponent extends KWM_Component {
    constructor() {
        super();
    }

    // Template function = shape of the component
    template() {
        return `
        <section class="contentDiv">
            <h2>News</h2>
            <div class="elfsight-app-16bccfdb-bd26-4edd-89db-267578697a4b" data-elfsight-app-lazy></div>
        </section>
    `;
    }
}

customElements.define("linkedin-component", LinkedInComponent);
