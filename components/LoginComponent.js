"use strict";

import KWM_Component from "../core/kwm-component.js";

/**
 * This is the page home component and will be rendered when the user navigates to the '/' home route.
 *
 * You need to create the base class 'KWM_Component' first before using me!
 **/
export default class LoginComponent extends KWM_Component {
  constructor() {
    super();

    // Any component data goes here in the constructor
    this.text = "Login";

  }

  // Template function = shape of the component
  template() {
    return /*html*/ `
        <section id="main_content">
            <hero-teaser-component
                headline="Einloggen";
                sub-headline="und Kurse entdecken!"
                text="Erstellen Sie jetzt Ihr Konto oder melden Sie sich an, um auf alle verfügbaren Weiterbildungsangebote zugreifen zu können."
                bg-image="../../img/headerImages/LoginHeaderBild.jpg"
            ></hero-teaser-component>
            
        </section>
        `;
  }
}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define("login-component", LoginComponent);
