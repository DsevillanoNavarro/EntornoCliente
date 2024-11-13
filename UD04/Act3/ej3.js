class Semaforo{
    _color;
    _parpadear;
    constructor(){
        this.color = 0;
        this.parpadear = false;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (value === 1 || value === 2 || value === 3) {
            this._color = value;
        }
    }
    
    get parpadear() {
        return this._parpadear;
    }
    set parpadear(value) {
        if (this.color == 2){
            this._parpadear = value;
        }
        else{
            this._parpadear = false;
        }
    }
    cadenaColor(){
        let cadena = '';
        switch(this.color){
            case 0:
                cadena = 'Rojo';
                break;
            case 1:
                cadena = 'Amarillo';
                break;
            case 2:
                cadena = 'Verde';
                break;
        }
        return cadena;
    }
    imprimir(){
        if(this.cadenaColor() == 'Verde'){
            console.log('El semaforo está en verde.');
        }else if(this.cadenaColor() == 'Amarillo'){
            console.log('El semaforo está en amarillo.');
        }else if(this.cadenaColor() == 'Rojo'){
            console.log('El semaforo está en rojo.');
        }
    }
    cambia(){
        if(this.color == 0){
            this.color = 1;
        }else if(this.color == 1){
            this.color = 1;
            this.parpadear = true;
        }else if(this.color == 2 && this.parpadear == true){
            this.color = 1;
            this.parpadear = false;
        }else if(this.color == 2 && this.parpadear == false){
            this.color = 0;
        }
    }
}
const semaforo = new Semaforo();
console.log(semaforo)
semaforo.color = 7;
semaforo.color = 2;
semaforo.parpadear = true;
semaforo.color = 1;
semaforo.parpadear = true;
semaforo.cambia();
semaforo.cambia();
semaforo.cambia();
semaforo.cambia();
semaforo.cambia();
const semaforo2 = new Semaforo();
semaforo2.color = semaforo.color;
semaforo2.parpadear = semaforo.parpadear;
console.log(semaforo)
console.log(semaforo2)
