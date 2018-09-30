const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            contain: content;
        }
    </style>
    <slot name="cardSet"></slot>
`;

export default class extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode:'open'})
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('CardSets connected to page.');
    }
}