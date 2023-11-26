"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./class/Animal");
class Cachorro extends Animal_1.Animal {
    pelo;
    patas;
    rabo;
    constructor(pelo, patas, rabo) {
        super(pelo, patas);
        this.pelo = pelo;
        this.patas = patas;
        this.rabo = rabo;
    }
}
class Cavalo extends Animal_1.Animal {
    pelo;
    patas;
    crina;
    constructor(pelo, patas, crina) {
        super(pelo, patas);
        this.pelo = pelo;
        this.patas = patas;
        this.crina = crina;
    }
}
class Gato extends Animal_1.Animal {
    pelo;
    patas;
    come;
    constructor(pelo, patas, come) {
        super(pelo, patas);
        this.pelo = pelo;
        this.patas = patas;
        this.come = come;
    }
}
const cachorro1 = new Cachorro('curto', 4, 'sem pelo');
const cavalo1 = new Cavalo('liso', 4, 'longa');
const gato1 = new Gato('grande', 4, 'rato');
console.log(`o cachorro tem o pelo ${cachorro1.pelo} e tem ${cachorro1.patas} patas o rabo dele ${cachorro1.rabo}`);
console.log(`o cavalo tem o pelo ${cavalo1.pelo} tem ${cavalo1.patas} patas e a crina ${cavalo1.crina}`);
console.log(`o gato tem o pelo ${gato1.pelo} tem ${gato1.patas} patas e come ${gato1.come}`);
