/*Crear un programa que solicite al usuario una propuesta de contraseña 
y compruebe si cumple con los siguientes requisitos:
Tiene entre 8 y 16 caracteres.
Tiene, al menos, una letra mayúscula.
Tiene, al menos, una letra minúscula.
Tiene, al menos, un dígito.
Tiene, al menos, uno de los siguientes caracteres especiales: 
guión alto, guión bajo, arroba, almohadilla, dólar, tanto por ciento o ampersand.
*/
function imprimeNombre() {
  let contra = String(frmNombreApellidos.contrasenia.value);
  if (!compruebaLong(contra)) {
    document.getElementById("salida").innerHTML =
      "Tiene que tener de 8 a 16 caracteres";
  } else {
    if (!compruebaMayus(contra)) {
      document.getElementById("salida").innerHTML =
        "Tiene que tener al menos una mayuscula";
    } else {
      if (!compruebaMayus(contra)) {
        document.getElementById("salida").innerHTML =
          "Tiene que tener al menos una mayuscula";
      } else {
        if (!compruebaMin(contra)) {
          document.getElementById("salida").innerHTML =
            "Tiene que tener al menos una minuscula";
        }else{
          document.getElementById("salida").innerHTML =
            "Correcto";
        }
      }
    }
  }
  function compruebaLong(cadena) {
    if (cadena >= 8 && cadena.length <= 16) {
      return true;
    } else {
      return false;
    }
  }
  function compruebaMayus(cadena) {
    let comprueba = true;
    for (let i = 0; i < cadena.length; i++) {
      let letra = cadena.charAt(i);
      if (letra.fromCharCode < 65 && letra.fromCharCode > 90) {
        comprueba = false;
      }
    }
    return comprueba;
  }
  function compruebaMinus(cadena) {
    let comprueba = true;
    for (let i = 0; i < cadena.length; i++) {
      let letra = cadena.charAt(i);
      if (letra.fromCharCode >= 65 && letra.fromCharCode <= 90) {
        comprueba = false;
      }
    }
    return comprueba;
  }
}
