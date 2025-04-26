"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class CourseCardComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/ `
          <section class="card m-12">
          <div class="relative flex items-center">
            <div class="rounded-4xl bg-[var(--bzl-dark-grey)] overflow-hidden flex flex-col h-[500px] w-[400px]"> 
              <div class="w-full h-48 overflow-hidden">
                <img class="w-full h-full object-cover" src="${this.getAttribute('img')}" alt="${this.getAttribute('imgAlt')}" />
              </div>
              <div class="flex flex-col justify-between flex-grow p-5"> 
                <div>
                  <h4 class="mb-2 text-s font-bold">${this.getAttribute('heading') ?? ''}</h4>
                  <div class="my-8 flex flex-col gap-2">
                    <div>
                      <i class="fa-solid fa-calendar-days"></i> 
                      <span class="ml-4">${this.getAttribute('date') ?? ''}</span><br>
                    </div>
                    <div>
                      <i class="fa-solid fa-clock"></i>
                      <span class="ml-4">${this.getAttribute('time') ?? ''}</span><br>
                    </div>
                    <div>
                      <i class="fa-solid fa-location-dot"></i>
                      <span class="ml-4">${this.getAttribute('place') ?? ''}</span><br>
                    </div>
                  </div>  
                </div>
                <a href="#" class="w-40 items-center bg-[var(--bzl-yellow)] px-8 py-2 text-sm rounded-full font-bold">
                  Zu den Details
                </a>
              </div>
            </div>
          </div>
        </section>
        `;
    }
}

customElements.define("course-card-component", CourseCardComponent);
