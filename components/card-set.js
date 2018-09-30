export default class CardSet extends HTMLElement {
    constructor() {
        super();

        let template = document.getElementById('card-set');
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(templateContent.cloneNode(true));
    }

    connectedCallback() {
        console.log('connected CardSets custom element');
    }
}