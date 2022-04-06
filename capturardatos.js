var filas = document.getElementById("idFils");
var columnas = document.getElementById("idCols");

tr = document.createElement("tr");

function ConstruirTablas(){
    var Table = document.getElementById("idTable"); // tomar el id de la tabla del DOM
    var nFilas = parseInt(filas.value);
    var nColumnas = parseInt(columnas.value);
    console.log ("Filas dentro de funcion= " + nFilas);   // ver en cónsola nro filas
    console.log ("columnas dentro de funcion= " + nColumnas); // ver en cónsola nro Col

    for(var a = 0;a <nFilas ;a++){
      tr = document.createElement("tr");
      for (var b = 0; b <nColumnas ; b++) {
        td = document.createElement("td");
        td.textContent = "Datos";   // llenar filas con "Datos"
        tr.appendChild(td);
      }
        Table.appendChild(tr);
      
    }
tr.appendChild(td);
}
