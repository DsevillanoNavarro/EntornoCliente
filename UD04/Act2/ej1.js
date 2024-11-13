class Producto {
    _nombre;
    _precio;
    
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._unidades = 0;
    }
    
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    
    get unidades() {
        return this._unidades;
    }
    set unidades(value) {
        this._unidades = value;
    }
    
    get precio() {
        return this._precio;
    }
    set precio(value) {
        if (value < 0) {
            value = value * -1;
        }
        this._precio = value;
    }
    valorEnStock() {
        return this.unidades * this.precio;
    }
    incrementarStock(unidades) {
        this.unidades += unidades;
    }
    disminuirStock(unidades) {
        if (this.unidades >= unidades) {
            this.unidades -= unidades;
        } else {
            this.unidades = 0;
        }
    }
}