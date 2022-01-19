var text = document.getElementById("texto");
var resultado = document.getElementById("resultado");
var btnEncriptar = document.getElementById("encriptar");
var btnDesencriptar = document.getElementById("desencriptar");
var btnCopy = document.getElementById("copy")
var mensaje;

btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    let textoDesencriptado = encriptar(text.value);
    resultado.value = textoDesencriptado;
});

btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    let textoEncriptado = desencriptar(text.value);
    resultado.value = textoEncriptado;
});

btnCopy.addEventListener("click", function(){
   resultado.focus();
   document.execCommand("selectAll");
   document.execCommand("copy")
});

function encriptar (cadena){
    let expBusqueda = new RegExp ("[A-Z]","g");
    if ((cadena.length < 1) || (expBusqueda.test(cadena))){
       mensaje = "la cadena esta vacia o hay mayusculas";
    }else {
        mensaje = cadena.replaceAll('e','enter')
        .replaceAll('i','imes')
        .replaceAll('a','ai')
        .replaceAll('o','ober')
        .replaceAll('u','ufat');
    
    }
    return mensaje;
}
function desencriptar (cadena){
    let expBusqueda = new RegExp ("[A-Z]","g");
    if ((cadena.length < 1) || (expBusqueda.test(cadena))){
       mensaje = "El texto es incorrecto";
    }else{
        mensaje = cadena.replaceAll('enter','e')
        .replaceAll('imes','i')
        .replaceAll('ai','a')
        .replaceAll('ober','o')
        .replaceAll('ufat','u');
    }
    return mensaje;
}
