const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = "";
let mensaje = "";
let resultado = "El número y la letra del DNI no son correctos"

dni = prompt("Porfavor introduce un DNI")

let numero = "";
let letra = dni[dni.length-1].toUpperCase();

for(let i = 0; i < dni.length - 2; i++){
        numero += dni[i]
}
numero = Number(numero)

if(0 < numero <= 999999){
    let letra2 = letras[numero % 23]
    mensaje += `DNI: ${numero} · Letter: ${letra}\nResto de la divición: ${numero % 23}\nLetra calculada ${letra2}\n`
    if(letra == letra2) resultado = `El número y la letra del DNI son correctos.`
    mensaje+= resultado
    console.log(mensaje)
}else{
console.error(`Numero ${numero} incorrecto, no puede comprobarse la validez del DNI`)
}

