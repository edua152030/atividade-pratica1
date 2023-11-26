abstract class FormatoDoElemento{
    toDesign(): void {}
    resizing(): void {}
}

export class Circle implements FormatoDoElemento {
    constructor(public raio: number){}
    toDesign(): void {
        console.log(`foi implementado ${this.raio}`);
        
    }
    resizing(): void {
        console.log(`foi implementado ${this.raio}`);
    }
}

export class retangulo implements FormatoDoElemento {
    constructor(public raio: number){}
    toDesign(): void {
        console.log(`foi implementado ${this.raio}`);
    }
    resizing(): void {
        console.log(`foi implementado ${this.raio}`);
    }
}