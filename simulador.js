let limite_prestamo = 0
function informar_usuario (){
    alert("tu limite es de: " + limite_prestamo)
}

ocupacion = prompt("ingresa tu ocupacion")

if(ocupacion == "estudiante"){
    limite_prestamo = 20000;
    informar_usuario();
}
else if(ocupacion == "jubilado"){
    limite_prestamo = 30000
    informar_usuario();
}
else if(ocupacion == "empleado"){
    limite_prestamo = 60000
    informar_usuario();
}
else if(ocupacion == "desocupado"){
    limite_prestamo = 10000
    informar_usuario();
}
else if(ocupacion == "empresario"){
    limite_prestamo = 100000
    informar_usuario();
}
else if(ocupacion == "monotributista"){
    limite_prestamo = 40000;
    informar_usuario();
}
else{alert("error");
    
}
numero = parseInt(prompt("ingresa el monto deseado"));