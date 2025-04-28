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
            <hero-teaser-component
                headline="Leistungen entdecken";
                sub-headline="und direkt in Anspruch nehmen!"
                text="Wir vom BZL sind spezialisiert auf Führungskräfte-, Team- und Persönlichkeitsentwicklung. In Form von Seminaren, Workshops oder individuellen Lerndesigns unterstützen wir Sie dabei die Kompetenzen Ihrer Mitarbeiter/innen zu stärken."
                bg-image="../../img/headerImages/LeistungHeaderBild.jpg"
            ></hero-teaser-component>
        </section>
        `;
  }
}

customElements.define("leistung-component", LeistungsComponent);
