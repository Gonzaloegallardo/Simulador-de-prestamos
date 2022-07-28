
let lista_usuario = []



function set_data(){
    let nombre_usuario = document.getElementById("nombre");
    let apellido_usuario = document.getElementById("apellido");
    let usuario = {"nombre":nombre_usuario.value ,"apellido":apellido_usuario.value};
    
    let usuario_json = JSON.stringify(usuario);
    console.log(usuario_json);
    lista_usuario.push(usuario);
    let arreglo_json = JSON.stringify(lista_usuario)
    
    localStorage.setItem("usuarios: ",arreglo_json)
}
let crear = document.getElementById("crear_cuenta");
crear.addEventListener("click", function(event){
    event.preventDefault();
    set_data();
});



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