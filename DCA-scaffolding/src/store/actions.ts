import { Recetas } from "../types/ingredientes";
import { Actions, SomeActions } from "../types/store"
import firebase from "../utils/firebase"

export const saveReceta =async(receta:Recetas):Promise<Actions>=>{
        await firebase.saveRecetaInDB(receta);

        return{
            action:SomeActions.ADD_RECETA,
            payload:receta,
        };

};


export const getRecetas =async():Promise<Actions>=>{
    const recetas=await firebase.getRecetasFromDB();

    return{
        action:SomeActions.GET_RECETA,
        payload:recetas,
    };

};