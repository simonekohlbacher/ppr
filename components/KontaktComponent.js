"use strict";
import KWM_Component from '../core/kwm-component.js';

/**
 * Quiz Component
 *
 * This component is responsible for rendering the quiz page.
 * It fetches the questions from the API using a model and renders them.
 */
export default class KontaktComponent extends KWM_Component {

    constructor() {
        super();

    }
        template()
        {
            return /*html*/`
        <section id="main_content">
            <h1>Quiz</h1>

     
        </section>
    `;
        }
}

customElements.define('kontakt-component', KontaktComponent);
