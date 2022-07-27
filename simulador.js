let lista_usuario = []
function set_data(){
    let nombre_usuario = document.getElementById("nombre");
    let apellido_usuario = document.getElementById("apellido");
    let usuario = {"nombre":nombre_usuario.value ,"apellido":apellido_usuario.value};
    lista_usuario.push(usuario);

    let json_usuario = JSON.stringify(lista_usuario);
    console.log(lista_usuario)
}
let crear_cuenta = document.getElementById("crear_cuenta");
crear_cuenta.addEventListener("click",set_data);



let btn_enviar =document.getElementById("btn_enviar");
btn_enviar.addEventListener("click", ()=>{
    enviar();

});
function enviar() {

    if (document.getElementById("form").value == "empleado") {
        

        
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $80.000`
        

        

    } else if (document.getElementById("form").value == "desempleado") {
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $30.000`
    } else if (document.getElementById("form").value == "jubilado") {
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $50.000`
    } else if (document.getElementById("form").value == "estudiante") {
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $40.000`
    } else if (document.getElementById("form").value == "monotributista") {
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $70.000`
    } else if (document.getElementById("form").value == "empresario") {
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $100.000`
    }
}

select2.addEventListener("click", ()=>{
    seleccionar_cuota()
})
function seleccionar_cuota() {
    let select2 = document.getElementById("select2");
    let cuota = select2.value;


    document.getElementById("cuota_seleccionada").innerText = `usted a seleccionado ${cuota}`;
}