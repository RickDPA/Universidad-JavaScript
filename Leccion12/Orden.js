class Orden {

    static contadorOrdenes;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    
    constructor(){
        this._idOrden = ++ Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;

    }
    get idOrden(){
        return this._idOrden;
    }


    agregarProducto(producto){
        if(this._contadorProductosAgregados.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log("No se pueden agregar más productos")
        }
        
    }

    calcularTotal(){
        let resultado = 0;
        for(let i = 0; i<= this.productos.length; i++){
             resultado += this.productos[i].precio;
        }

        return resultado;
    }

    mostarOrden(){
        let productoOrden = "";
        for (producto in this._productos){
            productoOrden += producto.toString() + " ";
        }

        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal}, productos: ${productoOrden}`);
    }

   
}

