"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class TestimonialComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/ `
          <section class="testimonial contentDiv py-10 relative overflow-hidden">
              <div class="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 relative">
                
                <!-- Linker Bereich: Kreis + Bild + Logo -->
                <div class="flex flex-col items-center md:items-start md:basis-1/3 space-y-6 relative z-10">
                    <div class="relative w-40 h-40 md:w-80 md:h-80 bg-[var(--primary-yellow)] rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                        <img src="../../img/Bernhard-Lintner.png" alt="Portrait Bernhard Lintner" class="w-24 md:w-32 object-cover">
                    </div>
                    <div class="flex justify-start w-full">
                        <img src="../../img/lenzing-logo.png" alt="Lenzing Logo" class="w-28 md:w-32">
                    </div>
                </div>

                <!-- Rechter Bereich: Graues Zitatfeld -->
                <div class="relative md:basis-2/3 flex items-center w-full">
                    <div class="bg-[#E8E8E8] w-[120%] md:w-[130%] p-8 rounded-l-full relative flex flex-col justify-center text-center md:text-left z-0">
                        <!-- Zitatzeichen oben -->
                        <div class="text-[var(--primary-yellow)] text-6xl md:text-8xl font-bold mb-4 leading-none">
                            “
                        </div>
                        <!-- Zitat-Text -->
                        <p class="text-center">
                            Lebenslanges Lernen ist wichtiger denn je, um mit den sich rasch ändernden Umständen gut mithalten zu können. 
                            Mit dem BZL haben wir einen Partner an der Seite, der ein umfangreiches Weiterbildungsangebot für Jobneulinge 
                            über Mitarbeitende aller Unternehmensbereiche bis hin zum Top Management bietet. 
                            Ich schätze dabei besonders die auf unsere Bedürfnisse ausgerichteten, maßgeschneiderten Lösungen.
                        </p>
                        <!-- Unterschrift -->
                        <div class="font-bold text-center mt-7">
                            Bernhard Lintner, VP Global QESH<br>
                            Site Director Lenzing, Lenzing AG
                        </div>
                        <!-- Zitatzeichen unten -->
                        <div class="text-[var(--primary-yellow)] text-6xl md:text-8xl font-bold mt-4 self-end">
                            ”
                        </div>
                    </div>
                </div>

              </div>
          </section>
        `;
    }
}

customElements.define("testimonial-component", TestimonialComponent);
