class Alojamiento{
    _idAlojamiento;
    _numPersonas;
    constructor(idAlojamiento,numPersonas){
        this.idAlojamiento = idAlojamiento;
        this.numPersonas = numPersonas;
    }
    get idAlojamiento() {
        return this._idAlojamiento;
    }
    set idAlojamiento(value) {
        this._idAlojamiento = value;
    }
    get numPersonas() {
        return this._numPersonas;
    }
    set numPersonas(value) {
        this._numPersonas = value;
    }
    toHTMLRow(){
        return `<table><thead><td>idAlojamiento</td><td>numPersonas</td>`; 
    }
}
class Habitacion extends Alojamiento{
    _desayuno;
    constructor(idAlojamiento,numPersonas,desayuno){
        super(idAlojamiento,numPersonas)
        this.desayuno = desayuno
    }
    get desayuno() {
        return this._desayuno;
    }
    set desayuno(value) {
        this._desayuno = value;
    }
    toHTMLRow(){
        return super.toHTMLRow() + `<td>desayuno</td><tbody><td>${this._idAlojamiento}</td><td>${this.numPersonas}</td><td>${this.desayuno}</td></tbody></table>`
    }
}
class Apartamento extends Alojamiento{
    _parking;
    _dormitorios;
    constructor(idAlojamiento,numPersonas,parking,dormitorios){
        super(idAlojamiento,numPersonas)
        this.parking = parking
        this.dormitorios = dormitorios
    }
    get dormitorios() {
        return this._dormitorios;
    }
    set dormitorios(value) {
        this._dormitorios = value;
    }
    get parking() {
        return this._parking;
    }
    set parking(value) {
        this._parking = value;
    }
    
    toHTMLRow(){
        return super.toHTMLRow() + `<td>parking</td><td>dormitorios</td><tbody><td>${this._idAlojamiento}</td><td>${this.numPersonas}</td><td>${this.parking}</td><td>${this.dormitorios}</td></tbody></table>`
    }
}
class Cliente{
    _dniCliente;
    _nombre;
    _apellidos;
    _usuario;
    constructor(dniCliente,nombre,apellidos,usuario){
        this.dniCliente = dniCliente;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.usuario = usuario;
    }
    get usuario() {
        return this._usuario;
    }
    set usuario(value) {
        this._usuario = value;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get dniCliente() {
        return this._dniCliente;
    }
    set dniCliente(value) {
        this._dniCliente = value;
    }
    toHTMLRow(){
        return `<table><thead><td>DNI</td><td>Nombre</td><td>Apellidos</td><td>Usuario</td></thead><tbody><td>${this.dniCliente}</td><td>${this.nombre}</td><td>${this.apellidos}</td><td>${this.usuario}</td></tbody></table>`;
    }
}
class Reserva{
    _idReserva;
    _cliente;
    _alojamientos;
    _fechaInicio;
    _fechaFin;
    constructor(idReserva,cliente,alojamientos,fechaInicio,fechaFin){
        this.idReserva = idReserva;
        this.cliente = cliente;
        this.alojamientos = alojamientos;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    get fechaFin() {
        return this._fechaFin;
    }
    set fechaFin(value) {
        this._fechaFin = value;
    }
    get fechaInicio() {
        return this._fechaInicio;
    }
    set fechaInicio(value) {
        this._fechaInicio = value;
    }
    get alojamientos() {
        return this._alojamientos;
    }
    set alojamientos(value) {
        this._alojamientos = value;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    get idReserva() {
        return this._idReserva;
    }
    set idReserva(value) {
        this._idReserva = value;
    }
    toHTMLRow(){
        return `<table><thead><td>idReserva</td><td>idReserva</td><td>cliente</td><td>alojamientos</td><td>fechaInicio</td><td>fechaFin</td></thead><tbody><td>${this.idReserva}</td><td>${this.cliente}</td><td>${this.alojamientos}</td><td>${this.fechaInicio}</td><td>${this.fechaFin}</td></tbody></table>` ;
    }
}
class Agencia{
    _clientes;
    _reservas;
    _alojamientos;
    constructor(clientes,reservas,alojamientos){
        this.clientes = clientes;
        this.reservas = reservas;
        this.alojamientos = alojamientos;
    }
    get alojamientos() {
        return this._alojamientos;
    }
    set alojamientos(value) {
        this._alojamientos = value;
    }
    get reservas() {
        return this._reservas;
    }
    set reservas(value) {
        this._reservas = value;
    }
    get clientes() {
        return this._clientes;
    }
    set clientes(value) {
        this._clientes = value;
    }
    altaClientes(oCliente){
        this.clientes.push(oCliente)
    }
    altaAlojamiento(oAlojamiento){
        this.alojamientos.push(oAlojamiento)
    }
    altaReserva(oReserva){
        this.reservas.push(oReserva)
    }
    bajaReserva(idReserva){
        for(i=0;i<this.reservas.length;i++){
            if (idReserva == reserva.idReserva){
                this.reservas.splice(i,1)
            }
        }
    }
    listadoClientes(){
        for(cliente of this.clientes){
            cliente.toHTMLRow()
        }
    }
    listadoAlojamientos(){
        for(alojamiento of this.alojamientos){
            alojamiento.toHTMLRow()
        }
    }
    listadoReservas(fechaInicio,fechaFin){}
    listadoReservasCliente(idCliente){
        for(reserva of this.reservas){
            if(reserva.cliente == idCliente){
                reserva.toHTMLRow()
            }
        }
    }
    listadoHabitacionesConDesayuno(){
        for(alojamiento of this.alojamientos){
            if(alojamiento.constructor.name == "Habitacion"){
                alojamiento.toHTMLRow()
            }
        }
    }
    
    
}

function ej1(){
    let dni = document.getElementById("inpDNI").value;
    let nombre = document.getElementById("inpNombre").value;
    let apellido = document.getElementById("inpApellidos").value;
    if (dni == "" || nombre == "" || apellido == ""){
        alert("HAY CAMPOS VACIOS");
    }else{
        let nUsuario = (nombre.slice(0,1) + apellido.slice(0,3) +  apellido.split(" ")[1].slice(0,3) + dni.slice(5,8)).toLowerCase()
        document.getElementById("nUsuario").value = nUsuario;
        let cliente1 = new Cliente(dni,nombre,apellido,nUsuario)
        document.getElementById("tablaEj1").innerHTML = cliente1.toHTMLRow()
        agencia.altaClientes(cliente1)
    }
}
function comprobarSeleccion(){
    if(document.getElementById("radioHab").checked){
        document.getElementById("lblDesayuno").style.display = "block"
        document.getElementById("checkDesayuno").style.display = "block"
        document.getElementById("lblParking").style.display = "none"
        document.getElementById("checkParking").style.display = "none"
        document.getElementById("lblDormitorio").style.display = "none"
        document.getElementById("inpNDormitorios").style.display = "none"
        return "habitacion"
    }else{
        document.getElementById("lblDesayuno").style.display = "none"
        document.getElementById("checkDesayuno").style.display = "none"
        document.getElementById("lblParking").style.display = "block"
        document.getElementById("checkParking").style.display = "block"
        document.getElementById("lblDormitorio").style.display = "block"
        document.getElementById("inpNDormitorios").style.display = "block"
        return "apartamento"
    }
}

function ej2(){
    let idAlojamiento = document.getElementById("inpIDHab").value;
    let numPersonas = document.getElementById("inpNPersonas").value;
    let desayuno;
    let parking;
    if(comprobarSeleccion() == "habitacion"){
        if (document.getElementById("checkDesayuno").checked){
            desayuno = true;
        }else{
            desayuno= false;
        }
        let habitacion1 = new Habitacion(idAlojamiento,numPersonas,desayuno);
        agencia.altaAlojamiento(habitacion1)
        document.getElementById("tablaEj2").innerHTML = habitacion1.toHTMLRow()
    }else{
        if (document.getElementById("checkParking").checked){
            parking = true;
        }else{
            parking= false;
        }
        let nDormitorios = document.getElementById("inpIDHab").value;
        let apartamento1= new Apartamento(idAlojamiento,numPersonas,parking,nDormitorios);
        agencia.altaAlojamiento(apartamento1)
        document.getElementById("tablaEj2").innerHTML = apartamento1.toHTMLRow()
}   }
function ej3(){
    let idReserva = document.getElementById("inpIDReserva").value;
    let idAlojamiento = document.getElementById("inpIDAlojamiento").value;
    let dniCliente = document.getElementById("inpDNICliente").value;
    let fechaIni = document.getElementById("inpFechaIni").value;
    let fechaFin = document.getElementById("inpFechaFin").value;
    fechaIni = new Date(fechaIni);
    fechaFin = new Date(fechaFin);
    if (idReserva == "" || idAlojamiento == "" || dniCliente == "" || fechaIni == "" || fechaFin == "" ){
        alert("Rellena todos los campos")
    }else{
        error = 0
        noExisteAlojamiento = !agencia.alojamientos.some
        (alojamiento => alojamiento.idAlojamiento === idAlojamiento)
        alojamientoEncontrado="";
        for (reserva of agencia.reservas){
            if (
                (fechaIni < reserva.fechaFin && fechaFin > reserva.fechaIni)
            ) {

                error = 1;
                break;
            }
            console.log(error)
        }
        if (noExisteAlojamiento == true){
            alert("Alojamiento no existe")
            error = 1;
        }else{
            alojamientoEncontrado = agencia.alojamientos.find(alojamiento => alojamiento.idAlojamiento === idAlojamiento);
        }
        if(error == 0){
            for(reservaa of agencia.reservas){
                if(reserva.idReserva == idReserva && error == 0){
                    agencia.alojamientos.push(alojamientoEncontrado)
                    error = 1
                    alert("Alojamiento añadido")
                }
            }
            if (error == 0){
                arrayAlojamiento = []
                arrayAlojamiento.push(alojamientoEncontrado)
                reservaNueva = new Reserva (idReserva,dniCliente,arrayAlojamiento,fechaIni,fechaFin)
                alert("Reserva creado")
                agencia.altaReserva(reservaNueva)
            }
            
        }
        else{
            alert("La reserva ya existe")
        }
    }
}
agencia = new Agencia([],[],[])
document.getElementById('radioHab').addEventListener('change', comprobarSeleccion);
document.getElementById('radioApar').addEventListener('change', comprobarSeleccion);


