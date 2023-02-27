var historial = [];

function compararPrecios() {
  var producto1 = document.getElementById("producto1").value;
  var producto2 = document.getElementById("producto2").value;
  var precio1 = document.getElementById("precio1").value;
  var precio2 = document.getElementById("precio2").value;
  var peso1 = document.getElementById("peso1").value;
  var peso2 = document.getElementById("peso2").value;

  
  producto1 = ((producto1 === "") ? "Producto 1" : producto1);
  producto2 = ((producto2 === "") ? "Producto 2" : producto2);
  precio1 = ((precio1 === "") ? 1.0 : precio1);
  precio2 = ((precio2 === "") ? 1.0 : precio2);
  peso1 = ((peso1 === "") ? 1.0 : peso1);
  peso2 = ((peso2 === "") ? 1.0 : peso2);

  precio_por_gramo_1 = precio1 / peso1;
  precio_por_gramo_2 = precio2 / peso2;

  if(precio_por_gramo_1 < precio_por_gramo_2){
    document.getElementById("contenedor_1").style.backgroundColor = "green";
    document.getElementById("contenedor_2").style.backgroundColor = "red";
  }else if(precio_por_gramo_2 < precio_por_gramo_1){
    document.getElementById("contenedor_2").style.backgroundColor = "green";
    document.getElementById("contenedor_1").style.backgroundColor = "red";
  }else{
    alert("Ambos productos cuestan lo mismo");
  }
  
  var resultado = `${producto1} precio ${precio1} peso ${peso1} | ${producto2} precio ${precio2} peso ${peso2}`;
  
  
  historial.push(resultado);
  var listaHistorial = document.getElementById("historial");
  var nuevaComparacion = document.createElement("li");
  nuevaComparacion.innerHTML = resultado;
  listaHistorial.appendChild(nuevaComparacion);
}
