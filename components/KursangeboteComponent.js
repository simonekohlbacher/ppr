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
            <h1>Kursangebote</h1>

          
        </section>
    `;
    }
}

customElements.define('kursangebote-component', KursangeboteComponent);