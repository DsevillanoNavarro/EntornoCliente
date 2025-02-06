function Producto(nombre,unidades,precio,) {
    this.nombre = nombre;
    this.unidades = unidades;
    this.precio = precio;
    
    this.valorEnStock = function(){
        return this.unidades * this.precio;
    };
    this.incrementarStock = function(unidadesAgregar){
        this.unidades += unidadesAgregar;
    }
    this.decrementarStock = function(unidadesRestar){
        if(this.unidades >= unidadesRestar)
            {
                this.unidades -= unidadesRestar;
            }else{
                console.log("No hay suficiente stock");
            };
        
    };
    this.getNombre = function(){
        return this.nombre;
    }
    this.setNombre = function(nombreNuevo){
        this.nombre = nombreNuevo;
    }
    this.getPrecio = function(){
        return this.precio;
    }
    this.setPrecio = function(precioNuevo){
        if(this.precioNuevo < 0){
            precioNuevo = precioNuevo * -1;
        }
        this.precio = precioNuevo;
    }
    this.getUnidades = function(){
        return this.unidades;
    }
    this.setUnidades = function(unidadesNuevas){
        this.unidades = unidadesNuevas;
    }

}

let producto1 = new Producto("Producto 1", 10, 100);
console.log(producto1.setNombre("HOLA"));
console.log(producto1.getNombre());
