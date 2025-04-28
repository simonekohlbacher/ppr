"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class ReferenzenComponent extends KWM_Component {
    constructor() {
        super();
        this.logos = [
            "img/referenzLogos/ams.png",
            "img/referenzLogos/aptiv.png",
            "img/referenzLogos/asma.png",
            "img/referenzLogos/borealis.png",
            "img/referenzLogos/camo.png",
        ];
    }

    template() {
        return /*html*/ `
      <section class="py-20 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4">
          
          <h2 class="mb-12">Referenzen</h2>

          <div class="relative overflow-hidden">
            <div class="flex animate-marquee whitespace-nowrap">
              ${this.logos.map(logo => `
                <div class="flex items-center justify-center mx-8">
                  <img src="${logo}" alt="Logo" class="h-16 md:h-20 w-auto" />
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </section>

      <style>
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      </style>
    `;
    }
}

customElements.define("referenzen-component", ReferenzenComponent);
