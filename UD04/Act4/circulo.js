class Circulo extends Figura {
    _radio;
    get radio() {
        return this._radio;
    }
    set radio(value) {
        this._radio = value;
    }
    constructor(radio) {
        super('rojo');
        this.radio = radio;
    }
    calculaArea() {
        return Math.PI * Math.pow(this._radio, 2);
    }

    imprimir() {
        console.log(`Circulo con radio ${this._radio}, area: ${this.calculaArea()}`);
    }
}