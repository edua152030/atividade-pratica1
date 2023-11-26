class Pedido {
    itens = [];
    add(item) {
        this.itens.push(item);
    }
    recuperarValorTotal() {
        let total = this.itens
            .map((i) => i.recuperarValorTotal())
            .reduce((sum, v) => sum + v, 0);
        return total;
    }
    aplicarDescontoEmPorcentagem(desconto) {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.recuperarValorTotal() * porcentagem;
        return this.recuperarValorTotal() - descontoEmReais;
    }
    aplicarDescontoEmReais(desconto) {
        const novoTotal = this.recuperarValorTotal() - desconto;
        console.log(`Aplicando desconto de R$ ${desconto.toFixed(2)}. Novo total: R$ ${novoTotal.toFixed(2)}`);
    }
    removeItem(item) {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
            this.itens.splice(index, 1);
        }
    }
}
class ItemPedido {
    valor;
    nome;
    quantidade;
    constructor(valor, nome, quantidade) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }
    removeItem(item) {
        throw new Error("Method not implemented.");
    }
    recuperarValorTotal() {
        return this.valor * this.quantidade;
    }
    aplicarDescontoEmReais(desconto) {
        this.valor -= desconto;
    }
    aplicarDescontoEmPorcentagem(desconto) {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        return this.valor - descontoEmReais;
    }
}
