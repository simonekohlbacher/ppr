"use strict";

import KWM_Component from "../core/kwm-component.js";
import KarrierechancenComponent from "./designComponents/KarrierechancenComponent";
import CardSliderComponent from "./designComponents/CardSliderComponent";
import ButtonComponent from "./designComponents/ButtonComponent.js";

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
        imgAlt: "Workshop",
        heading: "Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang",
        date: "5. Mai 2025",
        time: "10:00 - 16:00 Uhr",
        place: "BIZ Wien 2. Stock"
      },
      {
        img: "img/Seminar.jpg",
        imgAlt: "Event",
        heading: "Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang",
        date: "20. Juni 2025",
        time: "18:00 - 22:00 Uhr",
        place: "Haus der Industrie Wien"
      }
    ];
    new KarrierechancenComponent();

    this.testimonials = [
      {
        img: "../../img/Bernhard-Lintner.png",
        zitat: "Lebenslanges Lernen ist wichtiger denn je, um mit den sich rasch ändernden Umständen gut mithalten zu können.\nMit dem BZL haben wir einen Partner an der Seite, der ein umfangreiches Weiterbildungsangebot für Jobneulinge \nüber Mitarbeitende aller Unternehmensbereiche bis hin zum Top Management bietet. \nIch schätze dabei besonders die auf unsere Bedürfnisse ausgerichteten, maßgeschneiderten Lösungen.",
        person: "Bernhard Lintner, VP Global QESH,",
        position: "Site Director Lenzing, Lenzing AG7",
      },
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
       
        <div class="flex gap-32 justify-center">  
            <card-slider-component courseCards="${courseCardsJson}"></card-slider-component>
            <card-slider-component courseCards="${courseCardsJson}"></card-slider-component>
        </div>   
        <button-component text="Weitere Kurse entdecken"></button-component>
            
          <karrierechancen-component></karrierechancen-component>
                
          <testimonial-slider-component></testimonial-slider-component>   
       
        </section>
        `;
  }
}

customElements.define("home-component", HomeComponent);
