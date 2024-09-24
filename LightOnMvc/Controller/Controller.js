import Modell from "../Modell/Modell.js";
import Jatekter from "../View/Jatekter.js";

export default class Controller{
    #szuloElem
    constructor(){
       // this.#szuloElem=$(".jatekter")
        this.modell= new Modell();
        this.lista=this.modell.getLista()
        new Jatekter(this.lista);
    }
}