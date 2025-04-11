"use strict";
import KWM_Component from '../core/kwm-component.js';
import KWM_Observable from '../core/kwm-observable.js';

import { quizModelInstance } from '../models/QuizModel.js';

/**
 * Quiz Component
 *
 * This component is responsible for rendering the quiz page.
 * It fetches the questions from the API using a model and renders them.
 */
export default class QuizComponent extends KWM_Component {

    constructor() {
        super();

        // Holds the quiz categories list
        this.categories = quizModelInstance.categories;
        this.questions = quizModelInstance.questions;

        this.numberOfQuestions = new KWM_Observable(10);

        this.answers = new KWM_Observable([]);
        this.currentQuestion = new KWM_Observable(null);
        this.currentQuestionIndex = new KWM_Observable(0);

        this.displaySolution = new KWM_Observable(false);
        this.isLoading = new KWM_Observable(false);

        this.registerRenderDependencies([
            this.categories,
            this.questions,
            this.currentQuestion,
            this.answers,
            this.displaySolution,
            this.isLoading
        ]);
    }

    onFirstRender() {
        quizModelInstance.fetchCategories();
    }

    nextQuestion() {
        // Check if user already answered all the questions
        if (this.currentQuestionIndex.value + 1 >= this.questions.value.length) {
            this.displaySolution.value = true;
            this.currentQuestion.value = null;
            return;
        }
        // Load the next question into "currentQuestion"
        this.currentQuestionIndex.value++;
        this.currentQuestion.value = this.questions.value[this.currentQuestionIndex.value];
    }

    /**
     * Listener functions
     */

    async startQuiz(event) {
        this.answers.value = []; // Reset answers
        this.currentQuestionIndex.value = 0; // Reset Index
        this.displaySolution.value = false; // Hide Solution Summary

        const category = event.target.dataset.id;

        this.isLoading.value = true;

        try {
            await quizModelInstance.fetchQuestions(category, this.numberOfQuestions.value);
            this.currentQuestion.value = this.questions.value[0]; // Make first question active
        } catch(e) {
            console.log(e);
        } finally {
            this.isLoading.value = false;
        }
    }

    reset() {
        this.answers.value = [];
        this.displaySolution.value = false;
    }

    answerTrue() {
        this.answerQuestion("True");
    }

    answerFalse() {
        this.answerQuestion("False");
    }

    answerQuestion(answer) {
        const question = this.currentQuestion.value;
        // Check if user answered correctly
        question.correct = question.answers.find(a => a.answer === answer).is_correct;
        // Saving the users answer + actual solution to the answers array
        question.answer = answer;
        this.answers.value = [...this.answers.value, question];
        this.nextQuestion();
    }

    /**
     * Template functions
     */

    template() {
        return /*html*/`
        <section id="main_content">
            <h1>Quiz</h1>

            ${this.currentQuestion.value ? /* we have a current question => quiz started */`
                    <div>
                        <p><b>Category:</b> ${this.currentQuestion.value.topic}</p>
                        <p>${this.currentQuestionIndex.value + 1} of ${this.questions.value.length}</p>
                        <p><i>${this.currentQuestion.value.question}</i></p>
                        <button kwm-listen-click="answerTrue">✅True</button>
                        <button kwm-listen-click="answerFalse">❌False</button>
                    </div>
                ` : /* no current question => quiz not started => show category seletion */`
                    <label for="numQuestions">Number of questions:</label>
                    <input id="numQuestions" type="number" kwm-bind-value="numberOfQuestions" max="25" min="1" />
                    
                    <h2>To start choose a category</h2>
                    <div class="category-gallery">
                    ${this.categories.value.length === 0 ? /*html*/`
                            <p>Loading...</p>
                        ` : this.categories.value.map(category => /*html*/`
                            <button data-id="${category}" kwm-listen-click="startQuiz">🏷️${category}</button>
                        `).join('')
                    }
                    </div>
                    
                    ${this.isLoading.value ? /*html*/`
                        <p>Loading...</p>
                    ` : ''
                    }
                    `
            }

            ${this.displaySolution.value ? /* displaySolution => quiz is finished => show results */`
                    <h2>Solution</h2>
                    <p>
                        <label for="correct_solutions">
                            Your Score: ${this.answers.value.filter(answer => answer.correct).length} correct out of ${this.answers.value.length}
                        </label>
                        <meter id="correct_solutions" min="0" max="100" low="33" high="66" optimum="75" value="${
                            Math.ceil((this.answers.value.filter(answer => answer.correct).length / this.answers.value.length) * 100)
                        }"></meter>
                    </p>
                    
                    ${this.answers.value.map(answer => /*html*/`
                        <div class="${answer.correct ? 'correct' : 'wrong'}">
                            <b><i>${answer.question}</i></b>
                            <p>Your answer: ${answer.answer}, Solution: ${answer.correct ? '✅' : '❌'}</p>
                        </div>
                    `).join('')}

                    <button kwm-listen-click="reset">Reset</button>
                    ` : ''
        }
        </section>
    `;
    }
}

customElements.define('quiz-component', QuizComponent);
