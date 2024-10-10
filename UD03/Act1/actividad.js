/*Crear un programa que solicite al usuario nombre y apellidos y devuelva:
El tamaño del nombre más los apellidos sin contar los espacios.
La cadena completa en minúsculas y mayúsculas.
La división del nombre, apellido1 y apellido2 en tres líneas distintas.
Una propuesta de nombre usuario de la siguiente forma: 
inicial del nombre, primeras tres letras del apellido1 y 
primeras tres letras del apellido2. 
Ejemplo: Juan Martín López  → jmarlop
*/
function imprimeNombre() {
  let salidaTamanio = (
    String(frmNombreApellidos.nombre.value).trim().replace(" ","") +
    "" +
    String(frmNombreApellidos.apellidos.value).trim().replace(" ","")
  ).length;

  let salidaMin = (
    String(frmNombreApellidos.nombre.value).trim() +
    " " +
    String(frmNombreApellidos.apellidos.value).trim()
  ).toLowerCase();

  let salidaMay = (
    String(frmNombreApellidos.nombre.value).trim() +
    " " +
    String(frmNombreApellidos.apellidos.value).trim()
  ).toUpperCase();

  let salidaNombre = String(frmNombreApellidos.nombre.value).trim();
  let salidaApellido1 = String(frmNombreApellidos.apellidos.value)
    .trim()
    .substring(0, frmNombreApellidos.apellidos.value.trim().indexOf(" "));

  let salidaApellido2 = String(frmNombreApellidos.apellidos.value)
    .trim()
    .substring(frmNombreApellidos.apellidos.value.trim().indexOf(" "));

  let salidaIniNom = String(frmNombreApellidos.nombre.value)
    .trim()
    .substring(0, 1);
  let salidaTresApe1 = String(frmNombreApellidos.apellidos.value)
    .trim()
    .substring(0, 3);
  let salidaTresApe2 = String(frmNombreApellidos.apellidos.value)
    .trim()
    .substring(frmNombreApellidos.apellidos.value.trim().indexOf(" "))
    .substring(1, 4);

  document.getElementById("salidaSinEspacio").innerHTML = salidaTamanio;
  document.getElementById("salidaMinMay").innerHTML =
    salidaMin + " " + salidaMay;
  document.getElementById("salidaNom").innerHTML = salidaNombre;
  document.getElementById("salidaApe1").innerHTML = salidaApellido1;
  document.getElementById("salidaApe2").innerHTML = salidaApellido2;
  document.getElementById("salidaCorreo").innerHTML =
    salidaIniNom + salidaTresApe1 + salidaTresApe2;
}
