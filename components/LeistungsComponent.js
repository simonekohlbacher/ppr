"use strict";

import KWM_Component from "../core/kwm-component.js";

export default class LeistungsComponent extends KWM_Component {
  constructor() {
    super();
    this.text = "Leistungen";
  }

  template() {
    return /*html*/ `
        <section id="main_content">
            <h1>Leistungen</h1>
            <p>${this.text} <a href="#/contact">Contact us</a></p>
        </section>
        `;
  }
}

customElements.define("leistung-component", LeistungsComponent);
