"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const Item_1 = require("./Item");
class Pedido {
    constructor() { }
    produto = new Item_1.Item(200, 'item01', 'este item e legal');
}
exports.Pedido = Pedido;
