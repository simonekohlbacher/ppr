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
          
            <h2>Referenzen</h2>

          <div class="relative marquee-wrapper overflow-hidden">
            <div class="flex animate-marquee whitespace-nowrap">
              ${[...this.logos, ...this.logos].map(logo => `
                <div class="flex items-center justify-center mx-8 h-24">
                  <img src="${logo}" alt="Logo" class="h-20 max-w-[150px] object-contain" />
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </section>

      <style>
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }

        .marquee-wrapper:hover .animate-marquee {
          animation-play-state: paused;
        }

        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }
      </style>
    `;
    }
}

customElements.define("referenzen-component", ReferenzenComponent);
