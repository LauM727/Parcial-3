import { addObserver, appState } from "../../store/index";
export default class ListRecetas extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
      
            if (this.shadowRoot)this.shadowRoot.innerHTML="";
            appState.recetas.forEach((p)=>{
                const RContainer = this.ownerDocument.createElement('article');

                const rName = this.ownerDocument.createElement('h3');
                rName.textContent= p.name;

                const rIngredients = this.ownerDocument.createElement('h3');
                rIngredients.textContent= p.ingredients;

                const rInstructions = this.ownerDocument.createElement('h3');
                rInstructions.textContent= p.instructions;

                const rImg = this.ownerDocument.createElement('h3');
                rImg.textContent= p.img;

                
                RContainer?.appendChild(rName);
                RContainer?.appendChild(rIngredients);
                RContainer?.appendChild(rInstructions);
                RContainer?.appendChild(rImg);
                this.shadowRoot?.appendChild(RContainer);
            })
    
    }
}

customElements.define('list-recetas', ListRecetas)