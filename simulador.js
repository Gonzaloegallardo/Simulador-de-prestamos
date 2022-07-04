let limite_prestamo = 0


ocupacion = prompt("ingresa tu ocupacion")

if(ocupacion == "estudiante"){
    alert("tu limite es de $20.000");
}
else if(ocupacion == "jubilado"){
    alert("tu limite es de $30.000");
}
else if(ocupacion == "empleado"){
    alert("tu limite es de $60.000");
}
else if(ocupacion == "desocupado"){
    alert("tu limite es de $10.000");
}
else if(ocupacion == "empresario"){
    alert("tu limite es de 100.000");
}
else if(ocupacion == "monotributista"){
    alert("tu limite es de $40.000");
}
else{alert("error");
}
numero = parseInt(prompt("ingresa el monto deseado"));