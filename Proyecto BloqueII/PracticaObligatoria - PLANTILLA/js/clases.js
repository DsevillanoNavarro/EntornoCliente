class Producto {
    _idProducto;
    _precioUnidad;
    _nombreProducto;
    _idCategoria;
    get idProducto() {
        return this._idProducto;
    }
    set idProducto(value) {
        this._idProducto = value;
    }
    
    get nombreProducto() {
        return this._nombreProducto;
    }
    set nombreProducto(value) {
        this._nombreProducto = value;
    }
    
    get precioUnidad() {
        return this._precioUnidad;
    }
    set precioUnidad(value) {
        this._precioUnidad = value;
    }
    
    get idCategoria() {
        return this._idCategoria;
    }
    set idCategoria(value) {
        this._idCategoria = value;
    }
    constructor(idProducto,nombreProducto,precioUnidad,idCategoria) {
        this._idProducto = idProducto;
        this._nombreProducto = nombreProducto;
        this._precioUnidad = precioUnidad;
        this._idCategoria = idCategoria;
    }
}

class Catalogo {
    _productos;

    get productos() {
        return this._productos;
    }
    set productos(value) {
        this._productos.push(value);
    }

    constructor() {
        this._productos = [];
    }

    addProducto(idProducto,nombreProducto,precioUnidad,idCategoria) {
        let prod = new Producto(idProducto,nombreProducto,precioUnidad,idCategoria)
        this._productos.push(prod)
    }
}

class LineaCuenta{
    _idProducto;
    _unidades;
    get idProducto() {
        return this._idProducto;
    }
    set idProducto(value) {
        this._idProducto = value;
    }
    get unidades() {
        return this._unidades;
    }
    set unidades(value) {
        this._unidades = value;
    }
    constructor(idProducto,unidades){
        this._idProducto = idProducto;
        this._unidades = unidades

    }
}

class Cuenta{
    _mesa;
    _lineaCuenta;
    _pagada;
    get mesa() {
        return this._mesa;
    }
    set mesa(value) {
        this._mesa = value;
    }
    
    get lineaCuenta() {
        return this._lineaCuenta;
    }
    set lineaCuenta(value) {
        this._lineaCuenta = value;
    }
    
    get pagada() {
        return this._pagada;
    }
    set pagada(value) {
        this._pagada = value;
    }
}

class Gestor{
    _cuentas;
    _mesaActual;
    get cuentas() {
        return this._cuentas;
    }
    set cuentas(value) {
        this._cuentas = value;
    }
    get mesaActual() {
        return this._mesaActual;
    }
    set mesaActual(value) {
        this._mesaActual = value;
    }
    constructor(mesaActual){
        this._cuentas = []
        this._mesaActual = mesaActual
    }
}