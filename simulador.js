
//obteniendo elementos//
let monto = document.getElementById("monto");
let tiempo = document.getElementById("tiempo");
let interes = document.getElementById("interes");
let btn_calcular = document.getElementById("btn_calcular");
let llenar_tabla = document.querySelector("#lista-tabla tbody");
let llenar_lista = document.getElementById("lista_montos");

//evento que ingresa los datos//
btn_calcular.addEventListener("click", function (event){
    event.preventDefault();
    calcular_cuota(monto.value, interes.value, tiempo.value);
    set_montos();
});
//arreglo que guarda los montos ingresados en localStorage//
let lista_montos = [];
//funcion que envia los datos a localStorage//
function set_montos() {
    let monto = document.getElementById("monto").value;
    let monto_JSON = JSON.stringify(monto);
    lista_montos.push(monto_JSON);
    let sin_duplicar = lista_montos.filter((item, index) => {
        return lista_montos.indexOf(item) === index;
    });
    localStorage.setItem("monto", sin_duplicar);
}

function appen() {
    while (llenar_lista.firstChild) {
        llenar_lista.removeChild(llenar_lista.firstChild);
    }
}
//funcion que devuelve los datos del Storage para crear una lista con los elementos//
function get_montos() {
    let recuperando_JSON = localStorage.getItem("monto");
    console.log(recuperando_JSON);
    let listado_montos = document.createElement("tr");
    listado_montos.innerHTML = `
    <td class="lista_storage">${recuperando_JSON}</td>
    `;
    llenar_lista.appendChild(listado_montos);
}
//evento del boton que devuelve los montos//
let montos_ingresados = document.getElementById("obtener_montos");
montos_ingresados.addEventListener("click", function (event) {
    event.preventDefault();
    get_montos();
});

function calcular_cuota(monto, interes, tiempo) {
    //metodo para que una vez que se ingresen datos nuevos, se renueve la lista.//
    while (llenar_tabla.firstChild) {
        llenar_tabla.removeChild(llenar_tabla.firstChild);
    }

    //obteniendo fechas mediante la libreria moment.js//
    //arreglo de fechas para que la variable mes_Actual vaya agregando elementos al mismo//
    let fechas = [];
    let fecha_actual = Date.now();
    let mes_actual = moment(fecha_actual);
    mes_actual.add(1, "month");
    let pagoInteres = 0,
        pagoCapital = 0;
    cuota = 0;
    //calculando las cuotas segun el calculo del metodo de amortizacion frances//
    cuota =
        (monto * ((Math.pow(1 + interes / 100, tiempo) * interes) / 100)) /
        (Math.pow(1 + interes / 100, tiempo) - 1);

    for (let i = 1; i <= tiempo; i++) {
        pagoInteres = parseFloat(monto * (interes / 100));
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat(monto - pagoCapital);

        //aplicando la libreria para que muestre mes por mes hasta finalizar el prestamo//
        fechas[i] = mes_actual.format("DD-MM-YYYY");
        mes_actual.add(1, "month");
        //creando la lista con los datos //
        let row = document.createElement("tr");
        row.innerHTML = `
<td>${fechas[i]}</td>
<td>${cuota.toFixed(2)}</td>
<td>${pagoCapital.toFixed(2)}</td>
<td>${pagoInteres.toFixed(2)}</td>
<td>${monto.toFixed(2)}</td>
`;
        llenar_tabla.appendChild(row);
    }
}
//api de dolar//
const $compra = document.querySelector("#compra"),
    $venta = document.querySelector("#venta");

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((response) => response.json())
    .then((data) => {
        console.log(data && data[1].casa.compra);
        const compra = data[1].casa.compra;
        const venta = data[1].casa.venta;
        $compra.textContent = compra;
        $venta.textContent = venta;
    });