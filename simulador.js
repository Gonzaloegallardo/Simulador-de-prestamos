let monto = document.getElementById("monto");
let tiempo = document.getElementById("tiempo");
let interes = document.getElementById("interes");
let btn_calcular = document.getElementById("btn_calcular");
let llenar_tabla = document.querySelector("#lista-tabla tbody")

btn_calcular.addEventListener("click", () => {
    calcular_cuota(monto.value, interes.value, tiempo.value);
});


function calcular_cuota(monto, interes, tiempo){
    
    while(llenar_tabla.firstChild){
    llenar_tabla.removeChild(llenar_tabla.firstChild);
}


let fechas = [];
let fecha_actual = Date.now();
let mes_actual = moment(fecha_actual);
mes_actual.add(1, "month");
let pagoInteres = 0, pagoCapital = 0; cuota = 0;
cuota = monto *(Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);


for(let i = 1; i <= tiempo; i++) {

    pagoInteres = parseFloat(monto*(interes/100));
    pagoCapital = cuota - pagoInteres;
    monto = parseFloat(monto-pagoCapital);


    fechas[i] = mes_actual.format('DD-MM-YYYY');
    mes_actual.add(1, "month");

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
