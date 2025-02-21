document.getElementById('boton').addEventListener('click', crearTabla)
filas = formulario.filas.value
columnas = formulario.columnas.value
tabla = document.getElementById('tabla')
let cont = 0
function crearTabla(){
    let tablero = document.createElement('table')
    tabla.appendChild(tablero)
    
    for(i= 0; i<=filas; i++){
        let row = document.createElement('tr')
        for(x =0 ;x<= columnas;x++){
            let numero = document.createTextNode(cont)
            let espacio = document.createElement('td')
            espacio.append(numero)
            row.appendChild(espacio)
            cont++

        }
        document.querySelector('table').appendChild(row)
    }
}