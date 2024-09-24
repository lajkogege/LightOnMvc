import Lampa from "./Lampa.js";
export default class Jatekter {
    #Lista = [];
    constructor(lista) {
        this.#Lista = lista;
        let szuloElem = $(".jatekter");
        szuloElem.empty();
        this.#Lista.forEach((element, i) => {
            new Lampa(element, i, szuloElem);
        });
    }
}