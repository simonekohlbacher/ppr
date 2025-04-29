"use strict";

import KWM_Component from "../core/kwm-component.js";
import CardSliderComponent from "./designComponents/CardSliderComponent";

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
            <h1>🏠 ${this.text}</h1>
       
        <div class="flex flex-wrap md:gap-32 justify-center">
            <card-slider-component courseCards="${courseCardsJson}"></card-slider-component>
            <card-slider-component courseCards="${courseCardsJson}"></card-slider-component>
        </div>   
            
         
        </section>
        `;
  }
}

customElements.define("home-component", HomeComponent);
