"use strict";

import KWM_Component from "../core/kwm-component.js";

export default class HeroTeaserComponent extends KWM_Component {
  constructor() {
    super();
  }

  template() {
    return /*html*/ `
            <section class="hero-teaser" class="color--primary-yellow">
                <div class="content">
                    <h1 class="color--primary-yellow">Hero</h1>
                    <p>${this.getAttribute("text") ?? "Hero Teaser Text - I am very reusable"}</p>
                    <p><a class="cta" href="${this.getAttribute("link") ?? "#/"}">${this.getAttribute("btn-text") ?? "Explore"}</a></p>
                </div>
            </section>
        `;
  }
}

customElements.define("hero-teaser-component", HeroTeaserComponent);
