document.getElementById('boton').addEventListener('click', crearTablero)
espacioTabla = document.getElementById('tablero')
let letras = ['A','B','C','D','E','F','G','H']
let blanco = true

function crearTablero(){
    espacioTabla.appendChild(document.createElement('table'))
    tabla = document.querySelector('table')
    for(let letra of letras){
        let row = document.createElement('tr')
        for(i=0 ; i <= letras.length ; i++){
            let espacio = document.createElement('td')
            espacio.innerHTML = letra + i
            if (blanco == true){
                blanco = false
                espacio.style.backgroundColor='white'
            }else{
                blanco = true
                espacio.style.backgroundColor='black'
                espacio.style.color = 'white'
            }
            row.appendChild(espacio)
        }
        tabla.appendChild(row)
    }
}
