"use strict";

import KWM_Component from "../../core/kwm-component.js";

/**
 * This is the page home component and will be rendered when the user navigates to the '/' home route.
 *
 * You need to create the base class 'KWM_Component' first before using me!
 **/
export default class KarrierechancenComponent extends KWM_Component {
    constructor() {
        super();
    }

    // Template function = shape of the component
    template() {
        return `
        <section id="main_content">
            <h1 class="left">Ihre Karrierechancen</h1>
            <p>Wir bieten eine breite Palette an Kursen und Programmen, die Sie gezielt auf die Herausforderungen 
            des Arbeitsmarktes vorbereiten. Unsere Weiterbildungsangebote umfassen:</p>
            <div class="flex flex-row gap-2 text-center flex-wrap">
                <div class="border-3 border-[var(--primary-yellow)] rounded-3xl w-full lg:w-[calc(33.333%-0.5rem)] md:w-[calc(50%-0.5rem)] overflow-hidden">
                    <div class="relative bg-[var(--primary-yellow)] py-8 px-2 w-full aspect-square rounded-b-full">
                        <h3 class="font-medium text-2xl pb-6 px-12">Lehrlings-ausbildung</h3>
                        <p>Wir fördern Jugendliche</p>
                        <i class="absolute left-0 bottom-[22%] w-full fa-solid fa-user-graduate text-4xl"></i>
                    </div>
                    <ul class="py-12">
                        <li>Zwischenbetriebliche</li>
                        <li>Zwischenbetriebliche</li>
                        <li>Zwischenbetriebliche</li>
                    </ul>
                </div>
                
                
                <div class="border-3 border-[var(--primary-yellow)] rounded-3xl w-full lg:w-[calc(33.333%-0.5rem)] md:w-[calc(50%-0.5rem)] overflow-hidden">
                    <div class="relative bg-[var(--primary-yellow)] py-8 px-2 w-full aspect-square rounded-b-full">
                        <h3 class="font-medium text-2xl pb-6 px-12">Lehrlings-ausbildung</h3>
                        <p>Wir fördern Jugendliche</p>
                        <i class="absolute left-0 bottom-[22%] w-full fa-solid fa-user-graduate text-4xl"></i>
                    </div>
                      <!--<div class="relative w-full aspect-square overflow-hidden " style="height: 100px;">
                        <div class="absolute top-[-100px] w-full h-[200px] bg-[var(&#45;&#45;primary-yellow)] rounded-full"></div>
                        <i class="absolute top-0 left-0 w-full fa-solid fa-user-graduate text-4xl"></i>
                      </div>-->
                      <!--<div class="w-full aspect-square bg-[var(&#45;&#45;primary-yellow)] rounded-full"></div>-->
                    <p class="py-12"">Zwischenbetriebliche <br>Lehrlingsausbildung <br>Lenzing Lehrlinge</p>
                </div>
                <div class="border-3 border-[var(--primary-yellow)] rounded-3xl w-full lg:w-[calc(33.333%-0.5rem)] md:w-[calc(50%-0.5rem)] overflow-hidden">
                    <div class="relative bg-[var(--primary-yellow)] py-8 px-2 w-full aspect-square rounded-b-full">
                        <h3 class="font-medium text-2xl pb-6 px-12">Lehrlings-ausbildung</h3>
                        <p>Wir fördern Jugendliche</p>
                        <i class="absolute left-0 bottom-[22%] w-full fa-solid fa-user-graduate text-4xl"></i>
                    </div>
                      <!--<div class="relative w-full aspect-square overflow-hidden " style="height: 100px;">
                        <div class="absolute top-[-100px] w-full h-[200px] bg-[var(&#45;&#45;primary-yellow)] rounded-full"></div>
                        <i class="absolute top-0 left-0 w-full fa-solid fa-user-graduate text-4xl"></i>
                      </div>-->
                      <!--<div class="w-full aspect-square bg-[var(&#45;&#45;primary-yellow)] rounded-full"></div>-->
                    <p class="py-12"">Zwischenbetriebliche <br>Lehrlingsausbildung <br>Lenzing Lehrlinge</p>
                </div>   
                
            </div>
          
        
        </section>
        `;
    }
}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define("karrierechancen-component", KarrierechancenComponent);
