import { Animal } from './class/Animal'

class Cachorro extends Animal{
    
    constructor(public pelo: string, public patas: number, public rabo: string){
        super(pelo, patas)
    }
}


class Cavalo extends Animal {
    constructor(public pelo: string, public patas: number, public crina: string){
        super(pelo, patas)
    }
}

class Gato extends Animal {
    constructor(public pelo: string, public patas: number, public come: string){
        super(pelo, patas)
    }
}

const cachorro1 =  new Cachorro ('curto', 4, 'sem pelo')
const cavalo1 =  new Cavalo ('liso', 4, 'longa')
const gato1 = new Gato ('grande', 4, 'rato')


console.log(`o cachorro tem o pelo ${cachorro1.pelo} e tem ${cachorro1.patas} patas o rabo dele ${cachorro1.rabo}`)
console.log(`o cavalo tem o pelo ${cavalo1.pelo} tem ${cavalo1.patas} patas e a crina ${cavalo1.crina}`)
console.log(`o gato tem o pelo ${gato1.pelo} tem ${gato1.patas} patas e come ${gato1.come}`)


