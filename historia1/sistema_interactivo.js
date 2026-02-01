
let nombre = prompt("Por favor, ingresa tu nombre:");


let edadIngresada = prompt("Por favor, ingresa tu edad:");

let edad = Number(edadIngresada);


if (isNaN(edad)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else {

   

    if (edad < 18) {
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    } else {
        alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
    }
}