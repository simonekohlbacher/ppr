"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class TestimonialComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/ `
          <section class="testimonial py-10 relative overflow-hidden mt-20 mb-20">
                
            <!-- Hintergrundbild grau 
            <img src="../../img/greyBackground.svg" style="width: 80%; height: 100%" alt="Grauer abgerundeter Hintergrund" class="absolute top-0 right-0 w-[50%] md:w-[130%] h-auto z-0 pointer-events-none" />
            -->
            
            <div class="hidden lg:block absolute top-0 bottom-0 right-0 z-0 pointer-events-none" style="width: 80%;">
                <svg viewBox="0 0 1506 600" xmlns="http://www.w3.org/2000/svg" class="h-full">
                  <path d="M165.495 600H1149V0H165.495C-137.841 273.472 45.8979 526.672 165.495 600Z" fill="#E8E8E8"/>
                  <rect x="1147" width="359" height="100%" fill="#E8E8E8"/>
                </svg>
            </div>
            
            <div class="relative w-full">
                <div class="flex flex-col lg:flex-row items-center md:items-center justify-between gap-8 relative">
                
                    <!-- Kreis + Bild + Logo -->
                    <div class="flex flex-row justify-between items-center w-full md:flex-col md:items-start md:basis-1/3 space-y-0 md:space-y-6 relative z-10 pt-10 pl-[18rem] sm:pl-[6rem]" >
                        <div class="relative w-60 h-60 md:w-80 md:h-80 bg-[var(--primary-yellow)] rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                            <img src="../../img/Bernhard-Lintner.png" alt="Portrait Bernhard Lintner" class="w-24 md:w-32 object-cover">
                        </div>
                        <div class="flex justify-end md:justify-start w-full pr-[18rem] sm:pr-[6rem]">
                            <img src="../../img/lenzing-logo.png" alt="Lenzing Logo" class="lg:w-30 md:w-32">
                        </div>
                    </div>
    
                    <!-- Zitatfeld -->
                    <div class="relative md:basis-2/3 flex items-center w-full mt-[-4rem] md:mt-0 pr-[18rem] sm:pr-[6rem] pl-[18rem] sm:pl-[6rem] bg-[#E8E8E8] md:bg-transparent">
                        <div class="relative flex flex-col justify-center text-center md:text-left z-0">
                           
                            <!-- Zitat-Text -->
                            <p class="text-sm md:text-[20px] leading-relaxed mb-6 text-center">
                                
                                <span class="text-[var(--primary-yellow)] text-5xl md:text-8xl font-bold mb-0 leading-none mb-2">“</span>
                                Lebenslanges Lernen ist wichtiger denn je, um mit den sich rasch ändernden Umständen gut mithalten zu können. 
                                Mit dem BZL haben wir einen Partner an der Seite, der ein umfangreiches Weiterbildungsangebot für Jobneulinge 
                                über Mitarbeitende aller Unternehmensbereiche bis hin zum Top Management bietet. 
                                Ich schätze dabei besonders die auf unsere Bedürfnisse ausgerichteten, maßgeschneiderten Lösungen.
                                
                            </p>
                            <span class="text-[var(--primary-yellow)] text-5xl md:text-8xl font-bold self-end">”</span>
                            <!-- Unterschrift -->
                            <div class="font-bold lg:text-center text-sm md:text-[20px] md:text-left">
                                Bernhard Lintner, VP Global QESH<br>
                                Site Director Lenzing, Lenzing AG7
                            </div>
                            
                        </div>
                    </div>
    
                  </div>
            </div>
              
          </section>
        `;
    }
}

customElements.define("testimonial-component", TestimonialComponent);
