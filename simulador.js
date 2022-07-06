let limite_prestamo = 0
class usuario{
    constructor(nombre, apellido,ocupacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion = ocupacion;
    }
}
function agregar_usuario(){
    console.log("hola ", this.nombre , this.apellido  ,"tu ocupación es ", ocupacion,  " por lo tanto tu limite de prestamo es de :" ,limite_prestamo)
    let nuevo_usuario = new usuario(this.nombre, this.apellido, this.ocupacion)
    lista_usuarios.push (nuevo_usuario)
}
let lista_usuarios = [];

for(let i=0 ; i < 3; i++){
this.nombre = prompt("ingrese su nombre")
this.apellido = prompt("ingrese su apellido")
this.ocupacion = prompt("ingrese su ocupacion")

if(ocupacion == "estudiante"){
    limite_prestamo = 20000;
    
    agregar_usuario();
}
else if(ocupacion == "jubilado"){
    limite_prestamo = 30000
    agregar_usuario();
}
else if(ocupacion == "empleado"){
    limite_prestamo = 60000
    agregar_usuario();
}
else if(ocupacion == "desocupado"){
    limite_prestamo = 10000
    agregar_usuario();
}
else if(ocupacion == "empresario"){
    limite_prestamo = 100000
    agregar_usuario();
}
else if(ocupacion == "monotributista"){
    limite_prestamo = 400000
    agregar_usuario();
}
else{alert("error");
    
}
}
if( i = 3 ){
console.log(lista_usuarios)
}
else{console.log("error")}