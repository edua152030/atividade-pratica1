
interface Desconto {
  recuperarValorTotal(): number;
  aplicarDescontoEmPorcentagem(desconto: number): number
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  removeItem(item: string): void
}

export class Pedido implements ValorPedido {
  itens: ItemPedido[] = []
  valor: number = 0
  desconto: number = 0

  add(item: ItemPedido): void {
    this.itens.push(item)
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0)

    return total
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.recuperarValorTotal() * porcentagem;
    this.valor -= descontoEmReais
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1)
    }
  }
}

export class ItemPedido implements Desconto {
  valor: number
  nome: string
  quantidade: number

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade
  }

  aplicarDescontoEmPorcentagem(desconto: number): number {
    const porcentagem = desconto / 100
    const descontoEmReais = this.valor * porcentagem
    return this.valor - descontoEmReais
  }
}
