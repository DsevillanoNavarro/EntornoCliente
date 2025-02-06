document.getElementById("inputnombre").addEventListener("blur", checkformatNom)
document.getElementById("inputapellido1").addEventListener("blur", checkformatNom)
document.getElementById("inputapellido2").addEventListener("blur", checkformatNom)
document.getElementById("inputtelefono").addEventListener("blur", checkformatTlf)
document.getElementById("btnCrear").addEventListener("click", crearAlu)
document.getElementById("btnModificar").addEventListener("click", modificarAlu)
let hayerror = false
let nombreAluMod = ""
let tablaAlu = []

function cambiarError(elemento, check) {
    if (check == true) {
        elemento.style.borderColor = "red"
        hayerror = true
    }
    if (check == false) {
        hayerror = false
        elemento.style.borderColor = "#f1f3f4"
    }
}
function checkformatNom() {

    if (/\d/.test(event.target.value)) {
        cambiarError(event.target, true)
    } else {
        cambiarError(event.target, false)
    }

}

function checkformatTlf() {

    if (/^\d{9}$/.test(event.target.value)) {
        cambiarError(event.target, false)
    } else {
        cambiarError(event.target, true)
    }
}

function crearAlu() {
    if (hayerror == false) {
        const nombre = document.getElementById("inputnombre").value;
        const apellido1 = document.getElementById("inputapellido1").value;
        const apellido2 = document.getElementById("inputapellido2").value;
        const telefono = document.getElementById("inputtelefono").value;
        const fechanacimiento = document.getElementById("inputfecha").value;
        const mail = document.getElementById("inputmail").value;
        const contrasena = document.getElementById("inputcontrasena").value;
        const comunidades = document.getElementById("selectcomunidades").value;
        const provincias = document.getElementById("selectprovincias").value;
        const alumnoEncontrado = tablaAlu.find(alumno => alumno.nombre === nombre);

        if (alumnoEncontrado) {
            alert("El alumno ya existe: " + alumnoEncontrado.nombre);
        } else {
            if (nombre == "") {
                alert("TIENES QUE PONER UN NOMBRE")
            } else {
                const nuevoAlumno = new Alumno(
                    nombre,
                    apellido1,
                    apellido2,
                    telefono,
                    fechanacimiento,
                    mail,
                    contrasena,
                    comunidades,
                    provincias
                );
                tablaAlu.push(nuevoAlumno);
                console.log(tablaAlu)
                actualizaTabla()
            }
        }

    } else {
        alert("Algunos de los campos están mal")
    }
}

function actualizaTabla() {
    let salida = document.getElementById("salida")
    salida.innerHTML = ""
    for (let alu of tablaAlu) {
        salida.innerHTML += `<div><p>${alu.nombre}</p> <button type="" class="btn btn-primary" onclick="modoModificar()">Modificar</button>
        <button type="" class="btn btn-danger" onclick="borrarAlu()">Borrar</button></div>`;
    }
}

function borrarAlu() {
    const contenedor = event.target.parentElement;

    const parrafo = contenedor.querySelector("p");

    nombre = parrafo.textContent;

    const alumnoEncontrado = tablaAlu.findIndex(alumno => alumno.nombre === nombre);
    tablaAlu.splice(alumnoEncontrado, 1);
    alert("Alumno Eliminado")
    actualizaTabla()
}

function modoModificar() {

    document.getElementById("btnCrear").disabled = true
    document.getElementById("btnModificar").disabled = false

    const contenedor = event.target.parentElement;

    const parrafo = contenedor.querySelector("p");

    nombre = parrafo.textContent;
    nombreAluMod = nombre

    const alumnoEncontrado = tablaAlu.find(alumno => alumno.nombre === nombre);
    document.getElementById("inputnombre").value = alumnoEncontrado.nombre;
    document.getElementById("inputapellido1").value = alumnoEncontrado.apellido1;
    document.getElementById("inputapellido2").value = alumnoEncontrado.apellido2;
    document.getElementById("inputtelefono").value = alumnoEncontrado.telefono;
    document.getElementById("inputfecha").value = alumnoEncontrado.fechanacimiento;
    document.getElementById("inputmail").value = alumnoEncontrado.mail;
    document.getElementById("inputcontrasena").value = alumnoEncontrado.contrasena;
    document.getElementById("selectcomunidades").value = alumnoEncontrado.comunidades;
    document.getElementById("selectprovincias").value = alumnoEncontrado.provincias;
}

function modificarAlu() {

    if (hayerror == false) {
        const nombre = document.getElementById("inputnombre").value;
        const apellido1 = document.getElementById("inputapellido1").value;
        const apellido2 = document.getElementById("inputapellido2").value;
        const telefono = document.getElementById("inputtelefono").value;
        const fechanacimiento = document.getElementById("inputfecha").value;
        const mail = document.getElementById("inputmail").value;
        const contrasena = document.getElementById("inputcontrasena").value;
        const comunidades = document.getElementById("selectcomunidades").value;
        const provincias = document.getElementById("selectprovincias").value;

        const alumnoEncontrado = tablaAlu.findIndex(alumno => alumno.nombre === nombreAluMod);
        tablaAlu.splice(alumnoEncontrado, 1);
        const nuevoAlumno = new Alumno(
            nombre,
            apellido1,
            apellido2,
            telefono,
            fechanacimiento,
            mail,
            contrasena,
            comunidades,
            provincias
        );
        tablaAlu.push(nuevoAlumno);
        console.log(tablaAlu)
        actualizaTabla()

        document.getElementById("btnCrear").disabled = false
        document.getElementById("btnModificar").disabled = true
        document.getElementById("inputnombre").value = ""
        document.getElementById("inputapellido1").value = ""
        document.getElementById("inputapellido2").value = ""
        document.getElementById("inputtelefono").value = ""
        document.getElementById("inputfecha").value = ""
        document.getElementById("inputmail").value = ""
        document.getElementById("inputcontrasena").value = ""
        document.getElementById("selectcomunidades").value = ""
        document.getElementById("selectprovincias").value = ""
    } else {
        alert("Algunos de los campos están mal")
    }

}

class Alumno {
    constructor(nombre, apellido1, apellido2, telefono, fechanacimiento, mail, contrasena, comunidades, provincias) {
        this._nombre = nombre;
        this._apellido1 = apellido1
        this._apellido2 = apellido2
        this.telefono = telefono
        this.fechanacimiento = fechanacimiento
        this.mail = mail
        this.contrasena = contrasena
        this.comunidades = comunidades
        this.provincias = provincias
    }
    _nombre
    get nombre() {
        return this._nombre
    }
    set nombre(value) {
        this._nombre = value
    }
    _apellido1
    get apellido1() {
        return this._apellido1
    }
    set apellido1(value) {
        this._apellido1 = value
    }
    _apellido2
    get apellido2() {
        return this._apellido2
    }
    set apellido2(value) {
        this._apellido2 = value
    }
    _telefono
    get telefono() {
        return this._telefono
    }
    set telefono(value) {
        this._telefono = value
    }
    _fechanacimiento
    get fechanacimiento() {
        return this._fechanacimiento
    }
    set fechanacimiento(value) {
        this._fechanacimiento = value
    }
    _mail
    get mail() {
        return this._mail
    }
    set mail(value) {
        this._mail = value
    }
    _contrasena
    get contrasena() {
        return this._contrasena
    }
    set contrasena(value) {
        this._contrasena = value
    }
    _comunidades
    get comunidades() {
        return this._comunidades
    }
    set comunidades(value) {
        this._comunidades = value
    }
    _provincias
    get provincias() {
        return this._provincias
    }
    set provincias(value) {
        this._provincias = value
    }


}