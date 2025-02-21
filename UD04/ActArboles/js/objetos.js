class Vivero{
    _arboles;
    get arboles() {
        return this._arboles;
    }
    set arboles(value) {
        this._arboles = value;
    }
    constructor(){
        this._arboles = [];
    }
    altaArbol(oArbol){
        console.log(oArbol.codigo)
        for (let arbol of this.arboles){
            if (arbol.codigo == oArbol.codigo){
                return false
            } 
        }
        this.arboles.push(oArbol)
        return true
    }
    tallajeArbol(iCodigo,iTallaje){
        if(!this.arboles.some(arbol => arbol.codigo == iCodigo)){
            alert("Arbol no registrado")
        }else{
            let arboltallaje = this.arboles.find(arbol => arbol.codigo == iCodigo)
            if(arboltallaje.tallaje > iTallaje){
                alert("El tallaje es menor, no se actualizará")
            }
            else{
                alert("Correcto tallaje actualizado," + arboltallaje.constructor.name)
            }
        }
    }
    listadoPerennes(iMinAltura){
        let tabla = "<table><thead><td>Codigo</td><td>Tallaje</td><td>Especie</td><td>Frutal</td></thead>";
        for (let arbol of this.arboles){
            if(arbol.tallaje > iMinAltura && arbol.constructor.name == "Perenne"){
                tabla += arbol.toHTMLRow()
            }
        }
        return tabla
    }
    listadoCaducos(sMesFloracion){
        let tabla = "<table><thead><td>Codigo</td><td>Tallaje</td><td>Especie</td><td>Mes Floracion</td></thead>";
        for (let arbol of this.arboles){
            if(arbol.mesFloracion == sMesFloracion && arbol.constructor.name == "Caduco"){
                tabla += arbol.toHTMLRow()
            }
        }
        return tabla
    }
    totalArbolesVenta(){
        let total = 0;
        for (let arbol of this.arboles){
            if(arbol.constructor.name == "Caduco" && arbol.tallaje > 100){
                total++
            }
            else{
                if(arbol.constructor.name == "Perenne" && arbol.frutal == true && arbol.tallaje > 80){
                    total++
                }
                else{
                    if(arbol.constructor.name == "Perenne" && arbol.frutal == false && arbol.tallaje > 120){
                        total++
                    }
                }
            }
        }
        return total
    }
}
class Arbol{
    _codigo;
    _tallaje;
    _especie;
    get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        this._codigo = value;
    }
    get tallaje() {
        return this._tallaje;
    }
    set tallaje(value) {
        this._tallaje = value;
    }
    get especie() {
        return this._especie;
    }
    set especie(value) {
        this._especie = value;
    }
    constructor(codigo, tallaje, especie){
        this._codigo = codigo;
        this._tallaje = tallaje;
        this._especie = especie;
    }
    
}
class Perenne extends Arbol{
    _frutal;
    get frutal() {
        return this._frutal;
    }
    set frutal(value) {
        this._frutal = value;
    }
    constructor(codigo,tallaje,especie,frutal){
        super(codigo,tallaje,especie);
        this._frutal = frutal;
    }
    toHTMLRow(){
        return `<tr><td>${this.codigo}</td>
        <td>${this.tallaje}</td>
        <td>${this.especie}</td>
        <td>${this.frutal}</td>
        </tr>`
    }
}
class Caduco extends Arbol{
    _mesFloracion;
    get mesFloracion() {
        return this._mesFloracion;
    }
    set mesFloracion(value) {
        this._mesFloracion = value;
    }
    constructor(codigo,tallaje,especie,mesFloracion){
        super(codigo,tallaje,especie);
        this.mesFloracion = mesFloracion;
    }
    toHTMLRow(){
        return `<tr><td>${this.codigo}</td>
        <td>${this.tallaje}</td>
        <td>${this.especie}</td>
        <td>${this.mesFloracion}</td>`
    }
}