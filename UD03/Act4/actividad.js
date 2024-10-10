/*Crear un script que ponga en negrita las
 letras mayúsculas que hay en una frase.
*/
function imprimeNombre() {

  let frase = String(frmNombreApellidos.frase.value).trim();
  let salida = String(frmNombreApellidos.frase.value).trim();
  for (let i = 0; i <= frase.length; i++) {
    let letra = frase.charAt(i);
    console.log(letra.charCodeAt() + " " +letra);
    if(letra.charCodeAt() >= 65 && letra.charCodeAt() <= 90){
      salida=salida.replaceAll(letra,"<b>"+letra+"</b>")
      
    }
    
  }
  console.log(salida);
  document.getElementById("salida").innerHTML = salida;
}
