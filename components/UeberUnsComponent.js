"use strict";
import KWM_Component from '../core/kwm-component.js';

export default class UeberUnsComponent extends KWM_Component {
    constructor() {
        super();

    }


    template() {
        return /*html*/`
            <section id="todo_app">
                <h1>Über uns</h1>
            </section>
        `;
    }
}

customElements.define('ueberuns-component', UeberUnsComponent);