import KWM_Component from "../../core/kwm-component.js";
import Swiper from 'swiper';

export default class TestimonialSliderComponent extends KWM_Component {
    constructor() {
        super();
        this.testimonials = [
            {
                img: "../../img/Bernhard-Lintner.png",
                zitat: "Lebenslanges Lernen ist wichtiger denn je, um mit den sich rasch ändernden Umständen gut mithalten zu können. Mit dem BZL haben wir einen Partner an der Seite, der ein umfangreiches Weiterbildungsangebot für Jobneulinge über Mitarbeitende aller Unternehmensbereiche bis hin zum Top Management bietet. Ich schätze dabei besonders die auf unsere Bedürfnisse ausgerichteten, maßgeschneiderten Lösungen.",
                person: "Bernhard Lintner",
                position: "Site Director Lenzing, Lenzing AG"
            },
            // Weitere Testimonials hier
        ];
    }

    template() {
        return /*html*/`
            <section class="testimonial-slider py-10 px-4 relative">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        ${this.testimonials.map(t => `
                            <div class="swiper-slide">
                                <testimonial-component 
                                    img="${t.img}" 
                                    zitat="${t.zitat}" 
                                    person="${t.person}" 
                                    position="${t.position}">
                                </testimonial-component>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Navigation Buttons -->
                    <div class="swiper-button-prev text-3xl" style="color: var(--bzl-black);"></div>
                    <div class="swiper-button-next text-3xl" style="color: var(--bzl-black);"></div>
                </div>
            </section>
        `;
    }

    onRender() {
        new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }
}

customElements.define("testimonial-slider-component", TestimonialSliderComponent);
