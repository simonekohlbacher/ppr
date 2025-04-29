"use strict";

import KWM_Component from "../../core/kwm-component.js";
import CourseCardComponent from "./CourseCardComponent.js";

export default class CardSliderComponent extends KWM_Component {
    constructor() {
        super();
        this.courseCards = [];
        this.currentIndex = 0;
        this.cardWidth = 0; // Speichert die Breite einer einzelnen Karte
    }

    template() {
        return /*html*/ `
        <section> 
          <div class="relative overflow-hidden w-full max-w-xl mx-auto">       
            <div class="flex transition-transform duration-500">
              ${this.courseCards
            .map(
                card => /*html*/ `
                      <div class="flex-shrink-0 w-full">
                          <course-card-component
                              img="${card.img}"
                              imgAlt="${card.imgAlt}"
                              heading="${card.heading}"
                              date="${card.date}"
                              time="${card.time}"
                              place="${card.place}">
                          </course-card-component>
                      </div>
                  `
            )
            .join("")}
            </div>
            <button id="prevBtn" class="absolute top-1/2 -translate-y-1/2 bg-[var(--bzl-yellow)] rounded-full px-3 py-2 text-sm z-10">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button id="nextBtn" class="absolute right-2 md:right-20 top-1/2 -translate-y-1/2 bg-[var(--bzl-yellow)] rounded-full px-3 py-2 text-sm z-10">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </section>
        `;
    }

    connectedCallback() {
        const courseCards = this.getAttribute("courseCards");
        this.courseCards = JSON.parse(courseCards) || [];
        this.render();
        this.setupNavigation();
        this.initializeSlider();
        window.addEventListener("resize", () => this.initializeSlider());
    }

    render() {
        this.innerHTML = this.template();
    }

    initializeSlider() {
        const container = this.querySelector("div.flex");
        if (!container || !container.firstElementChild) return;

        // Berechne die Breite einer einzelnen Karte inkl. Padding
        this.cardWidth = container.firstElementChild.offsetWidth;

        // Setze die Breite des Containers auf die Breite einer Karte
        container.style.width = `${this.cardWidth}px`;

        this.updateSlider();
    }

    setupNavigation() {
        this.querySelector("#prevBtn").addEventListener("click", () => {
            if (this.currentIndex === 0) {
                this.currentIndex = this.courseCards.length - 1; // Springe ans Ende
            } else {
                this.currentIndex--;
            }
            this.updateSlider();
        });

        this.querySelector("#nextBtn").addEventListener("click", () => {
            if (this.currentIndex === this.courseCards.length - 1) {
                this.currentIndex = 0; // Springe zum Anfang
            } else {
                this.currentIndex++;
            }
            this.updateSlider();
        });
    }
    updateSlider() {
        const container = this.querySelector("div.flex");
        if (!container) return;
        container.style.transform = `translateX(-${this.currentIndex * this.cardWidth}px)`;
    }
}

customElements.define("card-slider-component", CardSliderComponent);