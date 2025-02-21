document.getElementById('principal').addEventListener('click', diagonalPrincipal)
document.getElementById('secundaria').addEventListener('click', diagonalSecundaria)
document.getElementById('resetear').addEventListener('click', resetear)
table = document.querySelector('table')
function diagonalPrincipal(){
    resetear()
    for(let i = document.querySelectorAll('tr').length -1; i >= 0; i--){
        table.rows[i].cells[i].style.backgroundColor = 'red'
    }
    
}
function diagonalSecundaria(){
    resetear()
    for(let i = document.querySelectorAll('tr').length -1; i >= 0; i--){
        table.rows[i].cells[document.querySelectorAll('tr').length -1 - i].style.backgroundColor = 'lightblue'
    }
}
function resetear (){
    for(let espacios of document.querySelectorAll('td')){
       espacios.style.backgroundColor = 'white'
    }
}