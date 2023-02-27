var historial = [];

function compararPrecios() {
  var producto1 = document.getElementById("producto1").value;
  var precio1 = document.getElementById("precio1").value;
  var producto2 = document.getElementById("producto2").value;
  var precio2 = document.getElementById("precio2").value;
  
  if (producto1 === "" || precio1 === "" || producto2 === "" || precio2 === "") {
    alert("Por favor, ingrese los datos de ambos productos");
  } else {
    var resultado = "";
    if (precio1 < precio2) {
      resultado = producto1 + " es más barato que " + producto2;
    } else if (precio2 < precio1) {
      resultado = producto2 + " es más barato que " + producto1;
    } else {
      resultado = "Ambos productos tienen el mismo precio";
    }
    
    historial.push(resultado);
    var listaHistorial = document.getElementById("historial");
    var nuevaComparacion = document.createElement("li");
    nuevaComparacion.innerHTML = resultado;
    listaHistorial.appendChild(nuevaComparacion);
  }
}
