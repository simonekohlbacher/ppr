"use strict";

import KWM_Component from "../core/kwm-component.js";

/**
 * This is the page home component and will be rendered when the user navigates to the '/' home route.
 *
 * You need to create the base class 'KWM_Component' first before using me!
 **/
export default class HomeComponent extends KWM_Component {
  constructor() {
    super();

    // Any component data goes here in the constructor
    this.text = "Welcome Welcome HOME my friend 🥳";

    this.heroList = [
      {
        heading: "Our Products",
        text: "From Laptops to Perfumes we got it all!",
        link: "#/shop",
        img: "https://source.unsplash.com/random/1920x1080?shop,online,store",
      },
      {
        heading: "AI Chat",
        text: "Chat with yur personal AI assistant",
        link: "#/chat",
        img: "https://source.unsplash.com/random/1920x1080?ai,bot,robot",
      },
      {
        heading: "Todo App",
        text: "Manage your personal Todos",
        link: "#/todo",
        img: "https://source.unsplash.com/random/1920x1080?workspace,notebook",
      },
    ];
  }

  // Template function = shape of the component
  template() {
    return /*html*/ `
        <section id="main_content">
            <h1>🏠 ${this.text}</h1>
            <p>
               Whohoo! Component Rendering works! And our navigation with Routes and our Router works too!
            </p>
            <p><a href="#/contact">Contact us!</a></p>
            <p><a href="#/i-dont-exist">I lead to a non existent page</a></p>
            
            <!-- Child Components -->
            <hero-teaser-component></hero-teaser-component>
            <hero-teaser-component 
                background-image="https://source.unsplash.com/random/1920x1080?toast,coffee"
                text="I am a custom value for the Hero-Text"
                heading="Wanna have it?">
            </hero-teaser-component>

            ${this.heroList
              .map(
                (item) => /*html*/ `
                <hero-teaser-component 
                    text="${item.text}" 
                    heading="${item.heading}" 
                    background-image="${item.img}"
                    link="${item.link}">
                </hero-teaser-component>
                `,
              )
              .join("")}
        </section>
        `;
  }
}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define("home-component", HomeComponent);
