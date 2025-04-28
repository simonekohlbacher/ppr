"use strict";

import KWM_Component from "../core/kwm-component.js";

export default class KarriereComponent extends KWM_Component {
  constructor() {
    super();
    this.text =
      "We are the hottest 🔥 company in the world. Contact us and become part of the team!";
  }

  template() {
    return /*html*/ `
        <section id="main_content">
            <hero-teaser-component
                headline="Deine Karriere";
                sub-headline="beim Bildungszentrum Lenzing!"
                text="Wir sind eines der führenden Ausbildungszentren in Österreich, spezialisiert auf Facharbeiter/innen- und Lehrlingsausbildung sowie Personal- und Organisationsentwicklung."
                bg-image="../../img/headerImages/KarriereHeaderBild.png"
            ></hero-teaser-component>
        </section>
        `;
  }
}

customElements.define("karriere-component", KarriereComponent);
