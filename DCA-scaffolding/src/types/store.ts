import { Recetas } from "./ingredientes";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recetas: Recetas[];
};

export enum SomeActions {
  "ADD_RECETA" = "ADD_RECETA",
  "GET_RECETA" = "GET_RECETA",

}

export interface SaveRecetaAction {
  action: SomeActions.ADD_RECETA;
  payload: Recetas;
}

export interface GetRecetaAction {
  action: SomeActions.GET_RECETA;
  payload: Recetas[];
}

export type Actions = SaveRecetaAction|GetRecetaAction;
