
function imprimeNombre() {
  let salida = String(frmNombreApellidos.nombre.value) + " " + String(frmNombreApellidos.apellidos.value);
  
  document.getElementById("salida").innerHTML = salida;
}
