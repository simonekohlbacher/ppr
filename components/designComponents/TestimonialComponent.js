"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class TestimonialComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/ `
          <section class="testimonial contentDiv">
              <div class="realtive flex items-center">
                <!-- Logo & Foto -->
                <div>
                    <div class="bg-[var(--bzl-yellow)] w-80 h-80 rounded-full">
                        <div><img src="../../img/Bernhard-Lintner.png" alt="Portrait Bernhard Lintner"></div> 
                    </div>
                    <div><img src="../../img/lenzing-logo.png" alt="Lenzing Logo"> </div>
                </div>
                
                <!-- Text -->
                <div class="rounded-edge bg-[var(--bzl-light-grey)]">
                   helloas
                </div>
                
              </div>
          </section>
        `;
    }
}

customElements.define("testimonial-component", TestimonialComponent);