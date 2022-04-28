alert("Lubricentro");
class Lubricante {
    constructor (aceite, nomenclatura, precio, stock){
        this.aceite=aceite;
        this.nomenclatura=nomenclatura;
        this.precio= parseInt(precio);
        this.stock=stock;
    }

    actualizarStock(x){
        this.stock= this.stock - x;
    }
}

const arrayLubricante = [];
arrayLubricante.push(new Lubricante ("F50-E","5w30", 9829, 4));
arrayLubricante.push(new Lubricante ("F30","10w40", 3499, 4));
arrayLubricante.push(new Lubricante ("F10","15w40", 3375, 4));

console.log(arrayLubricante);


 let total = 0;
 function agregarAlCarrito() {
     let otroMas; 
  
     do {
         let producto = prompt ("¿Querés comprar F50-E, F30 o F10?"); 
         let cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));    
         let precio;
             switch (producto) {
                 case arrayLubricante[0].aceite:
                     arrayLubricante[0].actualizarStock(cantidad);
                     if (arrayLubricante[0].stock < 0 || isNaN(cantidad)){
                         alert("Lo sentimos. En este momento no tenemos stock")
                         arrayLubricante[0].stock=arrayLubricante[0].stock+cantidad;
                         precio = 0;
                         cantidad = 0;
                     }else{
                         precio= arrayLubricante[0].precio;
                     }
                     break;
                     case arrayLubricante[1].aceite:
                     arrayLubricante[1].actualizarStock(cantidad);
                     if (arrayLubricante[1].stock < 0 || isNaN(cantidad)){
                         alert("Lo sentimos. En este momento no tenemos stock")
                         arrayLubricante[1].stock=arrayLubricante[0].stock+cantidad;
                         precio = 0;
                         cantidad = 0;
                     }else{
                         precio= arrayLubricante[1].precio;
                     }
                     break;
                     case arrayLubricante[2].aceite:
                     arrayLubricante[2].actualizarStock(cantidad);
                     if (arrayLubricante[2].stock < 0 || isNaN(cantidad)){
                         alert("Lo sentimos. En este momento no tenemos stock")
                         arrayLubricante[2].stock=arrayLubricante[0].stock+cantidad;
                         precio = 0;
                         cantidad = 0;
                     }else{
                         precio= arrayLubricante[2].precio;
                     }
                     break;
                 default:
                     alert("Alguno de los ingresados no es correcto");
                     precio= 0;
                     cantidad= 0;
             }
         total= total + precio*cantidad;
         otroMas = confirm("¿Querés agregar otro producto?");
     }while (otroMas);
 }

   
  function descuento (total) {
      if (total>=5000){
          total = total*0.80;
          alert("Tenés 20% de descuento")
      }
      return total;
  }

 function envio (total) {
     let confirmacion = confirm("¿Querés envio a domicilio?");
     if (confirmacion && total>=2000){
         alert("Genial!Tenés envío gratis. El total de tu compra es $"+total);
     }else{
         alert("El total de tu compra es $"+total);
     }
     return total;
 }

 function totalAPagar (total, cuotas, intereses) {
     total = (total+intereses)
     let valorCuota= total/cuotas;
     
}

 function comprar () {
     if (confirm("¿Querés comprar Lubricante para tu vehiculo?")){
        agregarAlCarrito();
        totalAPagar (envio(descuento(total)));
     }else{
         alert("hasta pronto!");

     }
      
      totalAPagar (total);
  }
 comprar();