"use strict";
import KWM_Component from '../core/kwm-component.js';
import KWM_Observable from '../core/kwm-observable.js';

import { aiChatModelInstance } from '../models/AiChatModel.js';

// --- Example for messages from OpenAI ---
// [
//     {
//         "role": "user",
//         "content": "Hello"
//     },
//     {
//         "role": "assistant",
//         "content": "Hello! How can I assist you today?"
//     }
// ]

/**
 * AiChat Component
 *
 * This component is responsible for rendering the chat page. It fetches the messages from the API using a model and renders them.
 */
export default class AiChatComponent extends KWM_Component {

    constructor() {
        super();

        this.messages = aiChatModelInstance.messages;
        this.openAiApiKey = aiChatModelInstance.openAiApiKey;
        this.newMessage = new KWM_Observable('');
        this.warningText = new KWM_Observable('');
        this.newOpenAiApiKey = new KWM_Observable('');
        this.isLoading = new KWM_Observable(false);

        this.registerRenderDependencies([this.messages, this.openAiApiKey, this.isLoading]);
    }

    onRender() {
        const chatElem = this.querySelector('.chat');
        if(chatElem) {
            chatElem.scrollTop = chatElem.scrollHeight; // Scroll to the bottom of the chat
        }
    }

    /**
     * Listener functions
     */
    async sendMessage() {
        if (this.newMessage.value === '') {
            this.warningText.value = "Please enter a message";
            return;
        }

        this.warningText.value = "";
        this.isLoading.value = true;

        try {
            await aiChatModelInstance.getAnswer(this.newMessage.value);
        }
        catch (error) {
            console.error(error);
            this.warningText.value = "Oh oh! Ein Fehler ist aufgetreten 😞. Bitte versuche es erneut oder schau in die Konsole für mehr Informationen.";
        }
        finally {
            this.isLoading.value = false;
        }

        this.newMessage.value = '';
    }

    setApiKey() {
        aiChatModelInstance.setApiKey(this.newOpenAiApiKey.value);
    }

    resetChat() {
        aiChatModelInstance.resetChat();
    }

    resetApiKey() {
        this.newOpenAiApiKey.value = '';
        this.setApiKey();
    }

    /**
     * Template functions
     */
    template() {
        return /*html*/`
        <section id="main_content">
            <h1>KWM Ai Chat</h1>

            ${this.openAiApiKey.value === '' ? /* Api KEY is not set */`
                    <p>
                        Please enter your OpenAI API key to start chatting. 
                        You can create one yourself by signing up to OpenAI and adding a key on 
                        <a href="https://platform.openai.com/account/api-keys">https://platform.openai.com/account/api-keys</a>.
                    </p>
                    <input id="openai_key" type="text" kwm-bind-value="newOpenAiApiKey" placeholder="OpenAI API Key" />
                    <button id="set_key" kwm-listen-click="setApiKey">🔑 Set API Key</button>
                ` : /* API key is set*/`
                    <div class="chat">
                        ${this.messages.value.length === 0 ? /*html*/`
                                <p>Hi, ich bin dein AI Chat Bot 🤖. Frag mich was!</p>
                            ` : this.messages.value.map((message) => /*html*/`
                                <div class="message ${message.role}">
                                    <p>${message.role === 'user' ? '👨‍💻 Du' : '🤖 AI'}: ${message.content}</p>
                                </div>
                            `).join('')
                        }
                        ${this.isLoading.value ? /* is loading and waiting for reply */`
                            <div class="message assistant loading"><p>🤖 AI: ... schreibt gerade ...</p></div>` : ''
                        }
                        <p id="warning_text">${this.warningText.value}</p>
                    </div>

                    <input id="new_message" type="text" kwm-bind-value="newMessage" placeholder="Type a message..." />
                    <button id="send_message" kwm-listen-click="sendMessage" ${this.isLoading ? '' : 'disabled'}>📝Senden</button>
                    <button id="reset_key" kwm-listen-click="resetApiKey">🔑Reset API Key</button>
                    
                    ${this.messages.value.length !== 0 ? /* has already sent at least one message  */`
                        <button id="reset_chat" kwm-listen-click="resetChat">🗑️ Chat Löschen</button>` : ''
                    }`
            }
        </section>
    `;
    }
}

customElements.define('ai-chat-component', AiChatComponent);