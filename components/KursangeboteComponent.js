"use strict";
import KWM_Component from "../core/kwm-component";

export default class KursangeboteComponent extends KWM_Component {
constructor() {
    super();

    // Any component data goes here in the constructor
    this.text = "Welcome to the STAGING site for BZL 🥳";

}

    template() {
        return /*html*/`
        <section id="main_content">            
            <hero-teaser-component
                headline="Kurse entdecken";
                sub-headline="und direkt buchen!"
                text="Das BZL - Bildungszentrum Lenzing ist ein öffentliches Bildungsinstitut, das von Firmen und Privatpersonen seit mehr als 20 Jahren intensiv genutzt wird."
                bg-image="../../img/headerImages/KurseHeaderBild.jpg"
            ></hero-teaser-component>
            
            <div class="flex flex-row gap-32 justify-center">  
            <course-card-component
                img="img/Seminar.jpg"              
                imgAlt="Seminar"
                heading="Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang"
                date="1. April 2025 - 2. April 2025"
                time="09:00 - 17:00 Uhr"
                place="Bildungszentrum Lenzing 4 (A15_OG4)">
            </course-card-component>
            
            <course-card-component
                img="img/Seminar.jpg"              
                imgAlt="Seminar"
                heading="Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang"
                date="1. April 2025 - 2. April 2025"
                time="09:00 - 17:00 Uhr"
                place="Bildungszentrum Lenzing 4 (A15_OG4)">
            </course-card-component>
          </div> 
          
          
          <div class="flex flex-row justify-center mx-24">  
            <course-card-component
                img="img/Seminar.jpg"              
                imgAlt="Seminar"
                heading="Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang"
                date="1. April 2025 - 2. April 2025"
                time="09:00 - 17:00 Uhr"
                place="Bildungszentrum Lenzing 4 (A15_OG4)">
            </course-card-component>
            
            <course-card-component
                img="img/Seminar.jpg"              
                imgAlt="Seminar"
                heading="Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang"
                date="1. April 2025 - 2. April 2025"
                time="09:00 - 17:00 Uhr"
                place="Bildungszentrum Lenzing 4 (A15_OG4)">
            </course-card-component>

            <course-card-component
                img="img/Seminar.jpg"              
                imgAlt="Seminar"
                heading="Ausbildung der Ausbilder:innen (AdA) Lehrlingsausbilder:in-Basislehrgang"
                date="1. April 2025 - 2. April 2025"
                time="09:00 - 17:00 Uhr"
                place="Bildungszentrum Lenzing 4 (A15_OG4)">
            </course-card-component>
          </div> 
          
        </section>
    `;
    }
}

customElements.define('kursangebote-component', KursangeboteComponent);