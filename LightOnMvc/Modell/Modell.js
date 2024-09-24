export default class Modell {
    #Lista = [false, false, true, true, true, false, false, false, false] //true felkapcsolt
    #index;
    #db; //db hány van lekapcsolva
    constructor() {
        this.#index = 0;
        this.#db = 5
    }
getLista(){
    return this.#Lista;
}
    #dbMegszamol(Lista, db) {
        for (let index = 0; index < this.#Lista.length; index++) {
            if(this.#Lista[i]=== false){
                this.#db+=1
                console.log(this.#db)
            }
            
        }
    }
}