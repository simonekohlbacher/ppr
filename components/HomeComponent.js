"use strict";

import KWM_Component from "../core/kwm-component.js";
import KarrierechancenComponent from "./designComponents/KarrierechancenComponent";
import CardSliderComponent from "./designComponents/CardSliderComponent";
import ButtonComponent from "./designComponents/ButtonComponent.js";
import LinkedInComponent from "./designComponents/LinkedInComponent";
import HeadingComponent from "./designComponents/HeadingComponent";

export default class HomeComponent extends KWM_Component {
  constructor() {
    super();
    // Any component data goes here in the constructor
    this.text = "Welcome to the STAGING site for BZL 🥳";
    this.courseCards = [
      {
        img: "img/Seminar.jpg",
        imgAlt: "Seminar",
        heading: "Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang",
        date: "1. April 2025 - 2. April 2025",
        time: "09:00 - 17:00 Uhr",
        place: "Bildungszentrum Lenzing 4 (A15_OG4)"
      },
      {
        img: "img/Seminar.jpg",
        imgAlt: "Seminar",
        heading: "Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang",
        date: "5. Mai 2025",
        time: "10:00 - 16:00 Uhr",
        place: "BIZ Wien 2. Stock"
      },
      {
        img: "img/Seminar.jpg",
        imgAlt: "Seminar",
        heading: "Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang",
        date: "20. Juni 2025",
        time: "18:00 - 22:00 Uhr",
        place: "Haus der Industrie Wien"
      }
    ];

  }

  template() {
    // courseCards in string konvertieren
    const courseCardsJson = JSON.stringify(this.courseCards).replace(/"/g, '&quot;');

    return /*html*/ `
        <section id="main_content">
            <hero-teaser-component
                headline="Einloggen";
                sub-headline="und Kurse entdecken!"
                text="Erstellen Sie jetzt Ihr Konto oder melden Sie sich an, um auf alle verfügbaren Weiterbildungsangebote zugreifen zu können"
                bg-image="../../img/headerImages/HomeHeaderBild.jpg"
            ></hero-teaser-component>
       
            <div class="flex flex-col md:flex-row justify-between w-full">
              <div>
                <heading-component headline="Aktuelle Kurse" subHeadline="Personalentwicklung"></heading-component>
                <div class="md:ml-24">
                  <card-slider-component courseCards="${courseCardsJson}"></card-slider-component>
                </div>
              </div>
              <div class="flex flex-col md:items-end mt-20">
                <h4 class="text-2xl font-semibold mb-4 md:px-22 px-12 justify-end">Fachausbildung</h4> 
                <div class="md:w-152 w-92 h-3 bg-[var(--bzl-yellow)]"></div>
                <div class="md:mr-24 mt-10">
                  <card-slider-component courseCards="${courseCardsJson}"></card-slider-component>
                </div>
              </div>
            </div>
            
        <button-component text="Weitere Kurse entdecken"></button-component>
            
          <karrierechancen-component></karrierechancen-component>
         <karrierechancen-component></karrierechancen-component>
         
        <linkedin-component></linkedin-component>
        <button-component 
          text="Zu LinkedIn" 
          href="https://www.linkedin.com/company/bildungszentrum-lenzing/" 
          target="_blank">
        </button-component>


        <karrierechancen-component/>   
        </section>
        `;
  }
}

customElements.define("home-component", HomeComponent);
