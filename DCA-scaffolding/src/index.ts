import "./components/export"
import { dispatch } from "./store/index";
import { getRecetas } from "./store/actions";
class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const receta = this.ownerDocument.createElement('app-receta');
        this.shadowRoot?.appendChild(receta);

        const listreceta = this.ownerDocument.createElement('list-recetas');
        this.shadowRoot?.appendChild(listreceta);
    }
}

customElements.define('app-container', AppContainer)