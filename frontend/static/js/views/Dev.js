import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dev");
    }

    async getHtml() {
        return `
            <h1>Dev Page<h1>            
        `;
    }
}