"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = exports.Item = void 0;
class Item {
    nome;
    preco;
    static forEach;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
exports.Item = Item;
class Pedido {
    itens = [];
    adicionarItem(item) {
        this.itens.push(item);
    }
    mostrarPedido() {
        this.itens.forEach(item => {
            console.log(`Nome: ${item.nome}, Preço: $${item.preco.toFixed(2)}`);
        });
    }
    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }
}
exports.Pedido = Pedido;
