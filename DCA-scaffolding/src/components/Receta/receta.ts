import { dispatch } from "../../store/index";
import { saveReceta } from "../../store/actions";
import { Recetas} from "../../types/ingredientes";

const userReceta ={
    name:"",
    ingredients:"",
    instructions:"",
    img:"",
}

export default class Receta extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const rName = this.ownerDocument.createElement('label');
        rName.textContent ="Nombre de la receta";

        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change",(e:any)=>{
            userReceta.name=e.target.value;
        });

        const rIngredients = this.ownerDocument.createElement('label');
        rIngredients.textContent ="Ingredientes";

        const ingredients = this.ownerDocument.createElement('input');
        ingredients.addEventListener("change",(e:any)=>{
            userReceta.ingredients=e.target.value;
        });

        const rInstructions = this.ownerDocument.createElement('label');
        rInstructions.textContent ="Instrucciones de la receta";

        const instructions = this.ownerDocument.createElement('input');
        instructions.addEventListener("change",(e:any)=>{
            userReceta.instructions=e.target.value;
        });

        const rImg = this.ownerDocument.createElement('label');
        rImg.textContent ="Imagen de la receta";
        const img = this.ownerDocument.createElement('img');
        img.addEventListener("change",(e:any)=>{
            userReceta.img=e.target.value;
        });
      

        const btn = this.ownerDocument.createElement('button');
        btn.textContent="Save";
        btn.addEventListener("click",async()=>{
            console.log(userReceta);
            dispatch(await saveReceta(userReceta));
        })

        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(ingredients);
        this.shadowRoot?.appendChild(instructions);
        this.shadowRoot?.appendChild(img);
        this.shadowRoot?.appendChild(rName);
        this.shadowRoot?.appendChild(rInstructions);
        this.shadowRoot?.appendChild(rIngredients);
        this.shadowRoot?.appendChild(rImg);

    }
}

customElements.define('app-receta', Receta)