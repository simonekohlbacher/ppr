"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class TestimonialComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/ `
          <section class="testimonial">
              <div class="realtive flex items-center">
                <!-- Logo & Foto -->
                <div>
                    <div class="bg-[#F8EC19] w-80 h-80 rounded-full">
                        <div></div>   
                   
                    </div>
                </div>
                
                <!-- Text -->
                <div>
                   
                </div>
                
              </div>
          </section>
        `;
    }
}

customElements.define("testimonial-component", TestimonialComponent);