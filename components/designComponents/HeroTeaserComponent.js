"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class HeroTeaserComponent extends KWM_Component {
  constructor() {
    super();
    this.headline = "Einloggen";
    this.subHeadline = "und Kurse entdecken!";
    this.text = "Erstellen Sie jetzt Ihr Konto oder melden Sie sich an, um auf alle verfügbaren Weiterbildungsangebote zugreifen zu können."
  }

  template() {
    const isHomePage = window.location.pathname === "/" && window.location.hash === "#/";

    return /*html*/ `
            <section class="w-full h-screen bg-cover" style="background-image: url('${this.getAttribute("bg-image") ?? "../../img/headerImages/HomeHeaderBild.jpg"}');">
                
                <div class="header-content pt-70 px-[125px] md:px-[141px] absolute inset-0 bg-gradient-to-r from-white via-white/30 to-white/0"">
                
                    <div class="header-text max-w-[655px]">
                        <h1>${this.getAttribute("headline") ?? this.headline}</h1>
                        <h2>${this.getAttribute("sub-headline") ?? this.subHeadline}</h2>
                        <p>${this.getAttribute("text") ?? this.text}</p> 
                    </div>
                   
                
                    ${isHomePage ? `
                    <div class="flex justify-between items-end w-full mt-30">
                      <!-- OFFER LINKS als Buttons -->
                      <div class="hidden md:flex flex-col gap-4">
                          <a href="#" class="bg-[#F8EC19] text-black text-center py-2 px-6 rounded-full font-semibold hover:bg-[#868A8E] hover:text-white transition">
                              Persönliche Weiterentwicklung
                          </a>
                          <a href="#" class="bg-[#F8EC19] text-black text-center py-2 px-6 rounded-full font-semibold hover:bg-[#868A8E] hover:text-white transition">
                              Lehre & Zweiter Bildungsweg
                          </a>
                          <a href="#" class="bg-[#F8EC19] text-black text-center py-2 px-6 rounded-full font-semibold hover:bg-[#868A8E] hover:text-white transition">
                              Lösungen für Unternehmen
                          </a>
                          <a href="#" class="bg-[#F8EC19] text-black text-center py-2 px-6 rounded-full font-semibold hover:bg-[#868A8E] hover:text-white transition">
                              Lenzing AG Mitarbeitende
                          </a>
                      </div>
                      
                      <!-- SOCIAL MEDIA ICONS -->
                      <div class="hidden md:flex gap-4 items-end">
                          <a href="https://www.linkedin.com/company/bildungszentrum-lenzing/" target="_blank" class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F8EC19] text-black text-xl hover:bg-white transition">
                              <i class="fa-brands fa-linkedin-in"></i>
                          </a>
                          <a href="https://www.tiktok.com/@bzl.tiktok" target="_blank" class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F8EC19] text-black text-xl hover:bg-white transition">
                              <i class="fa-brands fa-tiktok"></i>
                          </a>
                          <a href="https://www.instagram.com/bildungszentrum_lenzing/" target="_blank" class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F8EC19] text-black text-xl hover:bg-white transition">
                              <i class="fa-brands fa-instagram"></i>
                          </a>
                          <a href="https://www.facebook.com/BZLGmbH/" target="_blank" class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F8EC19] text-black text-xl hover:bg-white transition">
                              <i class="fa-brands fa-facebook-f"></i>
                          </a>  
                      </div>                  
                    </div>
                    ` : ''}                                  
                </div>
                
            </section>
        `;
  }
}

customElements.define("hero-teaser-component", HeroTeaserComponent);
