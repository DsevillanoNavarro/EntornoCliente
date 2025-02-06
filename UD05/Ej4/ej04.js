frmEntrada.btnAgregar.addEventListener('click', anadirProv)
function anadirProv(){
    for (provincia of frmEntrada.lstProvincias){
        if(provincia.value == frmEntrada.txtCodigo.value){
            return alert("YA EXISTE PAPI")
        }
    }
    for (provincia of frmEntrada.lstDestino){
        if(provincia.value == frmEntrada.txtCodigo.value){
            return alert("YA EXISTE PAPI")
        }
    }
    let nuevoOption = document.createElement("option");
    nuevoOption.value = frmEntrada.txtCodigo.value;
    nuevoOption.text = frmEntrada.txtProvincia.value;
    frmEntrada.lstProvincias.appendChild(nuevoOption);
}
frmEntrada.btnPasarDerecha.addEventListener('click',pasarDerecha)
function pasarDerecha(){

    for (prov of frmEntrada.lstProvincias.selectedOptions){
        frmEntrada.lstDestino.append(prov)
    }
}
frmEntrada.btnPasarIzquierda.addEventListener('click',pasarIzquierda)
function pasarIzquierda(){

    for (prov of frmEntrada.lstDestino.selectedOptions){
        frmEntrada.lstProvincias.append(prov)
    }
}