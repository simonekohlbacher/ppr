"use strict";

import KWM_Component from "../../core/kwm-component.js";

/**
 * This is the page home components and will be rendered when the user navigates to the '/' home route.
 *
 * You need to create the base class 'KWM_Component' first before using me!
 **/
export default class KarrierechancenComponent extends KWM_Component {
    constructor() {
        super();
    }

    // Template function = shape of the components
    template() {
        return `
        <section id="karrierechancen" class="contentDiv">
            <h2 class="left">Ihre Karrierechancen</h2>
            <p>Wir bieten eine breite Palette an Kursen und Programmen, die Sie gezielt auf die Herausforderungen 
            des Arbeitsmarktes vorbereiten. Unsere Weiterbildungsangebote umfassen:</p>
            <div class="flex flex-row gap-2 text-center flex-wrap my-4">
            
               <div class="w-full lg:w-[calc(33.333%-0.5rem)] md:w-[calc(50%-0.5rem)] overflow-hidden">
                    <div class="border-3 lg:rounded-b-none lg:border-b-0 rounded-3xl border-[var(--primary-yellow)] overflow-hidden">
                        <div class="relative bg-[var(--primary-yellow)] py-8 px-2 w-full aspect-square rounded-b-full">
                            <h3 class="font-medium pb-8 md:pb-2 px-4 md:px-12">Lehrlings&shyausbildung</h3>
                            <p class="text-sm">Wir fördern Jugendliche</p>
                            <i class="absolute left-0 bottom-[15%] w-full fa-solid fa-user-graduate text-3xl md:text-4xl"></i>
                        </div>
                        <ul class="pt-12 lg:pb-0 pb-12">
                            <li>Zwischenbetriebliche</li>
                            <li>Zwischenbetriebliche</li>
                            <li>Zwischenbetriebliche</li>
                        </ul>
                    </div>
                    <div class="rec1"></div>
                </div>
                
                <div class="w-full lg:w-[calc(33.333%-0.5rem)] md:w-[calc(50%-0.5rem)] overflow-hidden">
                    <div class="border-3 lg:rounded-b-none lg:border-b-0 rounded-3xl border-[var(--primary-yellow)] overflow-hidden">
                        <div class="relative bg-[var(--primary-yellow)] py-8 px-2 w-full aspect-square rounded-b-full">
                            <h3 class="font-medium pb-8 md:pb-2 px-4 md:px-12">Lehrlings&shyausbildung</h3>
                            <p class="text-sm">Wir fördern Jugendliche</p>
                            <i class="absolute left-0 bottom-[15%] w-full fa-solid fa-user-graduate text-4xl"></i>
                        </div>
                        <ul class="pt-12 lg:pb-0 pb-12">
                            <li>Zwischenbetriebliche</li>
                            <li>Zwischenbetriebliche</li>
                            <li>Zwischenbetriebliche</li>
                        </ul>
                    </div>
                    <div class="rec2"></div>
                </div>
                
                <div class="w-full lg:w-[calc(33.333%-0.5rem)] md:w-[calc(50%-0.5rem)] overflow-hidden">
                    <div class="border-3 lg:rounded-b-none lg:border-b-0 rounded-3xl border-[var(--primary-yellow)] overflow-hidden">
                        <div class="relative bg-[var(--primary-yellow)] py-8 px-2 w-full aspect-square rounded-b-full">
                            <h3 class="font-medium pb-8 md:pb-2 px-4 md:px-12">Lehrlings&shyausbildung</h3>
                            <p class="text-sm">Wir fördern Jugendliche</p>
                            <i class="absolute left-0 bottom-[15%] w-full fa-solid fa-user-graduate text-4xl"></i>
                        </div>
                        <ul class="pt-12 lg:pb-0 pb-12">
                            <li>Zwischenbetriebliche</li>
                            <li>Zwischenbetriebliche</li>
                            <li>Zwischenbetriebliche</li>
                        </ul>
                    </div>
                    <div class="rec3"></div>
                </div>

                
                
                  
                
            </div>
          
        
        </section>
        `;
    }
}

// usage in HTML like: <home-components></home-components>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define("karrierechancen-component", KarrierechancenComponent);
