//La persona que se registra al inicio, o sea el principal

alert("DEBE SER MAYOR DE EDAD O VENIR CON UN ACOMPAÑANTE QUE SI LO SEA, SI TIENE MAS DE 30 AÑOS SE LE HARA UNA PREGUNTA SOBRE SU SALUD, SI TIENE DE 45 A MAS POR SU SALUD NO PODRA ENTRAR AL JUEGO, SI SU ACOMPAÑANTE NO ES MAYOR DE EDAD O ENTRA EN EL RANGO DE PRESENTAR PROBLEMAS DE SALUD, SE LE ANULARA DE INMEDIATO EL TICKET, TENIENDO TODO EN CUENTA, PROSIGA CON SU REGISTRO PORFAVOR")
let nombre_usuario = prompt("Ingrese su nombre porfavor").toUpperCase()
let edad_usuario = Number(prompt("Gracias por ser tu preferencia, ¿Cuántos años tienes?"))

//El acompañante del joven si es menor de edad
//let nombre_acompañante = prompt("Ingrese el nombre de la persona adulta por favor").toUpperCase()
//let edad_acompañante = Number(prompt("¿Cuántos años tiene su acompañante"))

if (isNaN(edad_usuario)) {
    alert("Ingrese un valor numerico porfavor")

} else if ((edad_usuario > 0) && (edad_usuario < 15)) {
    alert("Lo sentimos, no puede ingresar porque es menor de edad")
    

} else if ((edad_usuario >= 15) && (edad_usuario < 18)) {
    alert("Necesita ser acompañado por una persona mayor")
    let nombre_acompañante = prompt("Ingrese el nombre de la persona adulta por favor").toUpperCase()
    let edad_acompañante = Number(prompt("¿Cuántos años tiene su acompañante"))

    if ((edad_acompañante >=18) && (edad_acompañante < 30)) {
        alert("Su ticket fue separado, gracias")
        console.log("Nombre: "+nombre_usuario+"\n"+
                    "Edad: "+edad_usuario+"\n"+
                    "Nombre de acompañante: "+nombre_acompañante+"\n"+
                    "Edad de acompañante: "+edad_acompañante+"\n"+
                    "Ticket: APROBADO")
        
    } else {
        alert("Lo sentimos, su acompañante no cumple con la edad requerida")
    }
    
} else if ((edad_usuario >= 18) && (edad_usuario < 30)) {
    alert("Su ticket fue separado, gracias")
    //return edad_usuario

} else if ((edad_usuario >= 30) && (edad_usuario < 45)) {
    alert("Responda la siguiente pregunta con la mayor sinceridad porfavor; si o no")

    

    let salud = (prompt("¿Presenta algun problema de salud que le afecte en este juego?")).toUpperCase()


    if (salud == "NO") {
        alert("Su ticker fue separado, gracias")

    } else {
        alert("No puede ingresar, gracias por su comprension")
    }
    //return edad_usuario
    
} else if (edad_usuario >= 45) {
    alert("No puede ingresar debido a su edad, lo sentimos")
}
