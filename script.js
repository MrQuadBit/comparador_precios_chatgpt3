let historial = [];

function compararPrecios() {
  let producto1 = document.getElementById("producto1").textContent;
  let producto2 = document.getElementById("producto2").textContent;
  let precio1 = document.getElementById("precio1").value;
  let precio2 = document.getElementById("precio2").value;
  let peso1 = document.getElementById("peso1").value;
  let peso2 = document.getElementById("peso2").value;

  
  producto1 = ((producto1 === "") ? "Producto 1" : producto1);
  producto2 = ((producto2 === "") ? "Producto 2" : producto2);
  precio1 = ((precio1 === "") ? 1.0 : precio1);
  precio2 = ((precio2 === "") ? 1.0 : precio2);
  peso1 = ((peso1 === "") ? 1.0 : peso1);
  peso2 = ((peso2 === "") ? 1.0 : peso2);

  precio_por_gramo_1 = precio1 / peso1;
  precio_por_gramo_2 = precio2 / peso2;

  let aux = "";

  if(precio_por_gramo_1 < precio_por_gramo_2){
    document.getElementById("contenedor_1").style.backgroundColor = "green";
    document.getElementById("contenedor_2").style.backgroundColor = "red";
    aux = "<";
  }else if(precio_por_gramo_2 < precio_por_gramo_1){
    document.getElementById("contenedor_2").style.backgroundColor = "green";
    document.getElementById("contenedor_1").style.backgroundColor = "red";
    aux = ">";
  }else{
    alert("Ambos productos cuestan lo mismo");
    aux = "=";
  }

  let resultado1 = `<label contenteditable="true">${producto1}</label> $${precio1} ${peso1} gramos`;
  let resultado2 = `<label contenteditable="true">${producto2}</label> $${precio2} ${peso2} gramos`;
  
  let resultado = `${resultado1} ${aux} ${resultado2}`;  
  
  historial.push(resultado);
  let listaHistorial = document.getElementById("historial");
  let nuevaComparacion = document.createElement("li");
  nuevaComparacion.innerHTML = resultado;
  listaHistorial.appendChild(nuevaComparacion);
}

function limpiar(){
  document.getElementById("producto1").textContent = "Producto 1";
  document.getElementById("producto2").textContent = "Producto 2";
  document.getElementById("precio1").value = "";
  document.getElementById("precio2").value = "";
  document.getElementById("peso1").value = "";
  document.getElementById("peso2").value = "";
}