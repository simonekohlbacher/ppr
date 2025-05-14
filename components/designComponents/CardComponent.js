"use strict";

import KWM_Component from "../../core/kwm-component.js";

export default class CardComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/ `
        <section class="p-4">
          <div class="rounded-4xl bg-[var(--bzl-black)] overflow-hidden w-full md:max-w-md">
            <div class="h-[65%] ">
             <img class="w-full object-cover" src="${this.getAttribute('img')}"  alt="${this.getAttribute('imgAlt')}" />
            </div>
             <div class="h-[35%] ml-4 p-4 flex flex-col justify-evenly">
               <h4 class="text-3xl text-white font-bold">${this.getAttribute('heading') ?? ''}</h4>
              <a href="#" class="my-4 bg-[var(--bzl-yellow)] px-6 py-2 text-xl rounded-full font-bold text-black w-fit">Jetzt ansehen</a>
            </div>
          </div>
        </section>
        `;
    }
}

customElements.define("card-component", CardComponent);
