export class Item {
    static forEach: any;
    constructor(public nome: string, public preco: number) {}
}

export class Pedido {
    itens: Item[] = [];

    adicionarItem(item: Item): void {
        this.itens.push(item);
    }

    mostrarPedido(): void{
        this.itens.forEach(item => {
            console.log(`Nome: ${item.nome}, Preço: $${item.preco.toFixed(2)}`);
        });
    }

    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }
}
