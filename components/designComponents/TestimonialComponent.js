"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class TestimonialComponent extends KWM_Component {
    constructor() {
        super();
        this.img = "../../img/Bernhard-Lintner.png";
        this.zitat = "Lebenslanges Lernen ist wichtiger denn je, um mit den sich rasch ändernden Umständen gut mithalten zu können. Mit dem BZL haben wir einen Partner an der Seite, der ein umfangreiches Weiterbildungsangebot für Jobneulinge über Mitarbeitende aller Unternehmensbereiche bis hin zum Top Management bietet. Ich schätze dabei besonders die auf unsere Bedürfnisse ausgerichteten, maßgeschneiderten Lösungen.";
        this.person = "Bernhard Lintner, VP Global QESH";
        this.position = "Site Director Lenzing, Lenzing AG7";
    }

    template() {
        return /*html*/ `
          <section class="testimonial py-10 relative overflow-hidden mt-20 mb-20">
            
            <div class="hidden lg:block absolute top-0 bottom-0 right-0 z-0 pointer-events-none" style="width: 80%;">
                <svg viewBox="0 0 1506 600" xmlns="http://www.w3.org/2000/svg" class="h-full">
                  <path d="M165.495 600H1149V0H165.495C-137.841 273.472 45.8979 526.672 165.495 600Z" fill="#E8E8E8"/>
                  <rect x="1147" width="359" height="100%" fill="#E8E8E8"/>
                </svg>
            </div>
            
            <div class="relative ">
                <div class="flex flex-col lg:flex-row items-center md:items-center justify-between gap-8 relative">
                
                    <!-- Kreis & Bild & Logo -->
                    <div class="flex flex-row justify-between items-center  md:flex-col md:items-start md:basis-1/3 space-y-0 md:space-y-6 relative z-10 pt-10  sm:pl-[6rem]" >
                        <div class="relative aspect-square w-32 sm:w-48 md:w-60 lg:w-80 bg-[var(--primary-yellow)] rounded-full flex items-center justify-center overflow-hidden shadow-lg shrink-0">
                            <img src="${this.getAttribute("img") ?? this.img}" alt="Portrait Bernhard Lintner" class="w-24 md:w-32 object-cover">
                        </div>
                        <div class="flex justify-end md:justify-start lg:pr-[18rem] md:pr-[6rem] sm:hidden">
                            <img src="../../img/lenzing-logo.png" alt="Lenzing Logo" class="lg:w-30 md:w-32">
                        </div>
                    </div>
    
                    <!-- Zitatfeld -->
                    <div class="zitatfeld relative md:basis-2/3 flex items-center mt-[-4rem] md:mt-0 sm:pr-[6rem] sm:pl-[6rem] bg-[#E8E8E8] md:bg-transparent pt-6 pb-4">                   
                            <div class="relative flex flex-col justify-center md:text-left z-0">                               
                                <!-- Zitat-Text -->
                                <span class="text-[var(--primary-yellow)] text-5xl md:text-8xl font-bold mb-0 leading-none">“</span>
                                <p class="text-sm md:text-[20px] leading-relaxed mb-6 text-center">
                                    ${this.zitat}
                                </p>
                                <span class="text-[var(--primary-yellow)] text-5xl md:text-8xl font-bold self-end mt-3">”</span>
                                <!-- Person & Position -->
                                <div class="font-bold text-center text-sm md:text-[20px]">
                                    ${this.getAttribute("person") ?? this.person}<br>${this.getAttribute("position") ?? this.position}
                                </div>
                            </div>                        
                    </div>
            </div>
              
          </section>
        `;
    }
}

customElements.define("testimonial-component", TestimonialComponent);