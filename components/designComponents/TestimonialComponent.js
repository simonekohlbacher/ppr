"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class CourseCardComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/ `
          <section class="testimonial">
              <div class="realtive flex items-center">
                <!-- Logo & Foto -->
                <div>
                   
                </div>
                
                <!-- Text -->
                <div>
                   
                </div>
                
              </div>
          </section>
        `;
    }
}

customElements.define("course-card-component", CourseCardComponent);