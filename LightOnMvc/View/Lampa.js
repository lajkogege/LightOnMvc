export default class Lampa {
    #id;
    #allapot;
    #index;
    #szuloElem;
    #divElem

    constructor(allapot, id, szuloELem) {
        this.#allapot = allapot;
        this.#id = id;
        this.#szuloElem = szuloELem;
       this.#lampaMegjelenit()
        this.#divElem = $(".lampa:last");
        console.log(this.#divElem);
        this.#szinBeallit();


    }

    #lampaMegjelenit() {
        let txt = `
            <div class="lampa">
            </div>
        `;
        this.#szuloElem.append( txt); 
    }

    #szinBeallit() {
        //az elem állapotátol függően hozzáadja a .felkapcs clast ehhez a div elemhez
        if (this.#allapot) {
            this.#divElem.addClass("felkapcs");
        }
}
}
