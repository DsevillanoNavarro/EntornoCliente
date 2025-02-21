class Figura{
    _color;
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    constructor(color){
        this._color = color;
    }
    imprimir(){
        console.log(`La figura es de color ${this._color}`);
    }
}