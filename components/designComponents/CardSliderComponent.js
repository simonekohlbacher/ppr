"use strict";

import KWM_Component from "../../core/kwm-component.js";
import CourseCardComponent from "./CourseCardComponent.js";

export default class CardSliderComponent extends KWM_Component {
    constructor() {
        super();
        this.courseCards = [];
    }

    template() {
        return /*html*/ `
        <section> 
          

<div id="default-carousel" class="relative" data-carousel="slide">
    <!-- Carousel wrapper -->
       <div class="relative h-120 md:h-152 w-102 md:w-132 overflow-hidden">
          ${this.courseCards
            .map((card, index) => /*html*/ `
                <div class="${index === 0 ? "block" : "hidden"} duration-700 ease-in-out" data-carousel-item>
                  <div class="flex justify-center items-center h-full">
                    <course-card-component
                      img="${card.img}"
                      imgAlt="${card.imgAlt}"
                      heading="${card.heading}"
                      date="${card.date}"
                      time="${card.time}"
                      place="${card.place}">
                    </course-card-component>
                  </div>
                </div>
              `).join("")}
              
                <!-- Slider controls -->
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bzl-yellow)]">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bzl-yellow)]">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </section>
        `;
    }

    connectedCallback() {
        const courseCards = this.getAttribute("courseCards");
        this.courseCards = JSON.parse(courseCards) || [];
        this.render();
    }

    render() {
        this.innerHTML = this.template();
    }


}

customElements.define("card-slider-component", CardSliderComponent);