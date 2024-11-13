class Rectangulo extends Figura {
    _base;
    _altura;
    get base() {
        return this._base;
    }
    set base(value) {
        this._base = value;
    }
    get altura() {
        return this._altura;
    }
    set altura(value) {
        this._altura = value;
    }
    constructor(base, altura) {
        super('rojo');
        this._base = base;
        this._altura = altura;
    }

    calculaArea() {
        return this._base * this._altura;
    }

    imprimir() {
        console.log(`Rectangulo con base ${this._base} y altura ${this._altura}, area: ${this.calculaArea()}`);
    }
}