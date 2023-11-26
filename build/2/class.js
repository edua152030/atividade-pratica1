"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retangulo = exports.Circle = void 0;
class FormatoDoElemento {
    toDesign() { }
    resizing() { }
}
class Circle {
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    toDesign() {
        console.log(`foi implementado ${this.raio}`);
    }
    resizing() {
        console.log(`foi implementado ${this.raio}`);
    }
}
exports.Circle = Circle;
class retangulo {
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    toDesign() {
        console.log(`foi implementado ${this.raio}`);
    }
    resizing() {
        console.log(`foi implementado ${this.raio}`);
    }
}
exports.retangulo = retangulo;
