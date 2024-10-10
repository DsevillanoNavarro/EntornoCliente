/*Crear un script que reciba dos fechas y diga cuál es anterior 
y el tiempo transcurrido entre ellas (en años, meses y días).

*/
function imprimeNombre() {
  let fecha1 = new Date(frmNombreApellidos.anio1.value,frmNombreApellidos.mes1.value,frmNombreApellidos.dia1.value);
  let fecha2 = new Date(frmNombreApellidos.anio2.value,frmNombreApellidos.mes2.value,frmNombreApellidos.dia2.value);

  let ms1 = fecha1.getTime();
  let ms2 = fecha2.getTime();
  let dif = 0;
  let anio = 0;
  let mes = 0
  let dia = 0;
  if(ms1 > ms2){
    dif = ms1-ms2;
    anio = dif /1000 /60 /60 /24 / 365;
    mes = (anio - Math.round(anio)) *12;
    dia = (mes -Math.round(mes))*24-1;
    document.getElementById("salida").innerHTML = "La fecha 1 es anterior a la 2 Dia: " + Math.round(dia) + " Mes: " + Math.round(mes) + " Año: " + Math.round(anio);
  }else if (ms2 > ms1) {
    dif = ms2-ms1;
    anio = dif /1000 /60 /60 /24 / 365;
    mes = (anio - Math.round(anio)) *12;
    dia = (mes -Math.round(mes))*24-1;
    document.getElementById("salida").innerHTML = "La fecha 1 es posterior a la 2 Dia: " + Math.round(dia) + " Mes: " + Math.round(mes) + " Año: " + Math.round(anio);
  }else{
    dif = ms1-ms2;
    anio = dif /1000 /60 /60 /24 / 365;
    mes = (anio - Math.round(anio)) *12;
    dia = (mes -Math.round(mes))*24;
    document.getElementById("salida").innerHTML = "La fecha 1 es igual a la 2 Dia: " + Math.round(dia) + " Mes: " + Math.round(mes) + " Año: " + Math.round(anio);
  }

  
}
