/*Solicitar a través de un formulario dos horas de un día, 
el sistema deberá mostrar en una capa de salida del documento 
si la primera hora es anterior o posterior a la segunda, 
además del tiempo transcurrido entre ambas en formato 
de hh:mm. Ejemplo: el usuario introduce en la primera 
hora 18:40 y en la segunda 22:25 de la siguiente forma, 
h1=18 m1=40 h2=22 m2=25. La salida del sistema será “H1 es 
anterior a H2. Han pasado 3 horas y 45 minutos”.
 Si necesitara truncar un número puede usar la función Math.floor(num).*/

function imprimeHora() {
  let salida = "";
  let h1 = Number(frmHoras.hora1.value);
  let m1 = Number(frmHoras.min1.value);
  let h2 = Number(frmHoras.hora2.value);
  let m2 = Number(frmHoras.min2.value);

  if (h1 > h2) {
    let horaPasados = 0;
    let minPasados = m1 - m2;
    if (minPasados > 0) {
      horaPasados = h1 - h2;
    } else {
      minPasados = -minPasados;
    }
    salida =
      "H1 es posterior a H2.  " +
      "Han pasado " +
      horaPasados +
      " horas y " +
      minPasados +
      " minutos";
  } else {
    if (h2 > h1) {
      let horaPasados = 0;
      let minPasados = m2 - m1;
      if (minPasados > 0) {
        horaPasados = h2 - h1;
        minPasados = -minPasados;
      } else {
        minPasados = -minPasados;
      }
      salida =
        "H1 es anterior a H2. " +
        " Han pasado " +
        horaPasados +
        " horas y " +
        minPasados +
        " minutos";
    } else {
      if ((h1 == h2) && (m1 == m2)) {
        let horaPasados = 0;
        let minPasados = 0;
        salida =
          "H1 es igual a H2.  " +
          "Han pasado " +
          horaPasados +
          " horas y " +
          minPasados +
          " minutos";
      } else {
        if (m1 > m2) {
          horaPasados = 0;
          minPasados = m1 - m2;
          salida =
          "H1 es posterior a H2.  " +
          "Han pasado " +
          horaPasados +
          " horas y " +
          minPasados +
          " minutos";
        } else {
          horaPasados = 0;
          minPasados = m2 - m1;
          salida =
          "H1 es anterior a H2. " +
          " Han pasado " +
          horaPasados +
          " horas y " +
          minPasados +
          " minutos";
        }
      }
    }
  }

  document.getElementById("salida").innerHTML = salida;
}
