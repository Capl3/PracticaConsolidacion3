var cuerpoTabla = document.querySelector('#cuerpoTabla')
var fila = document.createElement('tr')
var columnaUno = document.createElement('td')
var columnaDos = document.createElement('td')
var columnaTres = document.createElement('td')
columnaUno.innerHTML = '$ 0'
columnaDos.innerHTML = '$ 0'
columnaTres.innerHTML = '$ 0'
fila.append(columnaUno, columnaDos, columnaTres)
cuerpoTabla.append(fila)


var btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', function () {
    var inPresupuesto = document.getElementById('inPresupuesto').value
    var presupuesto = parseInt(inPresupuesto)
    columnaUno.innerHTML = `$ ${presupuesto}`;
});



var btnAnadirGasto = document.getElementById('btnAnadirGasto');
var inNombreGasto = document.getElementById('inNombreGasto');
var inGasto = document.getElementById('inGasto');
const tabla = document.getElementById('tabla');
const datos = [];

function actualizarTabla() {
    var cuerpoTablaDos = document.querySelector("#cuerpoTablaDos");
    cuerpoTablaDos.innerHTML = "";
    var totalGastos = 0;
    datos.forEach(function (dato) {
        var fila2 = document.createElement("tr");
        var columnaCuatro = document.createElement("td");
        var columnaCinco = document.createElement("td");
        columnaCuatro.innerHTML = dato.nombreGasto;
        columnaCinco.innerHTML = dato.gasto;
        fila2.append(columnaCuatro, columnaCinco);
        cuerpoTablaDos.append(fila2);
        totalGastos += dato.gasto;
    });
    var presupuestoInicial = parseInt(columnaUno.innerHTML.substring(2));
    var presupuestoRestante = presupuestoInicial - totalGastos;
    columnaDos.innerHTML = "$ " + totalGastos;
    columnaTres.innerHTML = "$ " + presupuestoRestante;
}

btnAnadirGasto.addEventListener('click', function () {
    const nombreGasto = inNombreGasto.value;
    const gasto = parseInt(inGasto.value);

    if (nombreGasto && gasto) {
        datos.push({ nombreGasto, gasto });
        actualizarTabla();
        console.log(datos);
    }
});