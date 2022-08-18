
//formulario de acceso//
let lista_usuarios = [];
function set_Data(){
let user = document.getElementById("username").value
let contraseña = document.getElementById("password").value
let usuario = {user, contraseña }
let lista_usuarios_array = JSON.parse(localStorage.getItem("usuario"));

let usuario_json = JSON.stringify(usuario)
lista_usuarios.push(usuario_json)

let sin_duplicados = lista_usuarios.filter((item,index)=>{
    return lista_usuarios.indexOf(item)===index});
    localStorage.setItem("usuario",sin_duplicados)
}

let boton_registro = document.getElementById("boton_registro")

boton_registro.addEventListener("click", function (event){
event.preventDefault();

set_Data()

});


//obteniendo elementos// 
let monto = document.getElementById("monto");
let tiempo = document.getElementById("tiempo");
let interes = document.getElementById("interes");
let btn_calcular = document.getElementById("btn_calcular");
let llenar_tabla = document.querySelector("#lista-tabla tbody")
let llenar_lista = document.getElementById("lista_montos")

btn_calcular.addEventListener("click", () => {
    calcular_cuota(monto.value, interes.value, tiempo.value);
    set_montos();
});
let lista_montos = [];


function set_montos(){
    let monto = document.getElementById("monto").value
    let monto_JSON = JSON.stringify(monto)
    lista_montos.push(monto_JSON)
    let sin_duplicar = lista_montos.filter((item,index)=>{
        return lista_montos.indexOf(item)===index});
        localStorage.setItem("monto",sin_duplicar)
}
function appen(){
    while(llenar_lista.firstChild){
        llenar_lista.removeChild(llenar_lista.firstChild);
    }
}
function get_montos(){
    let recuperando_JSON = localStorage.getItem("monto");
    console.log(recuperando_JSON);
    let listado_montos = document.createElement("tr")
    listado_montos.innerHTML = `
    <td>${recuperando_JSON}</td>
    `;
    llenar_lista.appendChild(listado_montos)
    }

let montos_ingresados = document.getElementById("obtener_montos")
montos_ingresados.addEventListener("click",function (event){
    event.preventDefault();
    get_montos()


});

function calcular_cuota(monto, interes, tiempo){
    //metodo para que una vez que se ingresen datos nuevos, se renueve la lista.//
    while(llenar_tabla.firstChild){
    llenar_tabla.removeChild(llenar_tabla.firstChild);
}

//obteniendo fechas mediante la libreria moment.js//
//arreglo de fechas para que la variable mes_Actual vaya agregando elementos al mismo//
let fechas = [];
let fecha_actual = Date.now();
let mes_actual = moment(fecha_actual);
mes_actual.add(1, "month");
let pagoInteres = 0, pagoCapital = 0; cuota = 0;
//calculando las cuotas segun el calculo del metodo de amortizacion frances//
cuota = monto *(Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);


for(let i = 1; i <= tiempo; i++) {

    pagoInteres = parseFloat(monto*(interes/100));
    pagoCapital = cuota - pagoInteres;
    monto = parseFloat(monto-pagoCapital);

    //aplicando la libreria para que muestre mes por mes hasta finalizar el prestamo//
    fechas[i] = mes_actual.format('DD-MM-YYYY');
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
llenar_tabla.appendChild(row)
}
}
let climaContainer = document.getElementById("clima-container")
let apiClima = `https://api.openweathermap.org/data/2.5/weather?q=Comodoro rivadavia&units=metric&appid=4b56f215333470bc78211cf09c98602e`

const pedirData = async () => {
	let clima = []
	let soleado = []
let variableFetch = await fetch(apiClima)
let dataFetch = await variableFetch.json()
clima.push(dataFetch.main.temp)
soleado.push(dataFetch.name)

console.log(dataFetch)
console.log(clima)
console.log(soleado)

clima.forEach(dataFetch => {
	const p = document.createElement("p")

	p.innerHTML = `<p>La Temperatura es: <span class="span"> &#127777 </span> ${JSON.stringify(clima)}° en la ciudad de <span class="span"> &#128205 </span> ${JSON.stringify(soleado)} </p>`

	climaContainer.appendChild(p)

});
}
