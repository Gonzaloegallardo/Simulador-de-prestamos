
function enviar(){
    if(document.getElementById("form").value=="empleado"){
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $80.000`
        
    }
    else if(document.getElementById("form").value=="desempleado"){
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $30.000`
    }
    else if(document.getElementById("form").value=="jubilado"){
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $50.000`
    }
    else if(document.getElementById("form").value=="estudiante"){
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $40.000`
    }
    else if(document.getElementById("form").value=="monotributista"){
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $70.000`
    }
    else if(document.getElementById("form").value=="empresario"){
        document.getElementById("monto_maximo").innerText = `tu monto maximo es de $100.000`
    }
}
function click(){
    if(document.getElementById("dinero").value="10"){
        alert("error")
    }
}


function seleccionar_cuota(){
    let select2 = document.getElementById("select2");
    let cuota = select2.value;

     document.getElementById("cuota_seleccionada").innerText = `usted a seleccionado ${cuota}`;
}

