import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Design");
    }

    async getHtml() {
        return `
            <h1>Design Page<h1>            
        `;
    }
}