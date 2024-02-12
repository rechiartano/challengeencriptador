function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "¡Mensaje encriptado con éxito!";
        parrafo.textContent = " ";
        muñeco.src = "./img/determine-6-512.png";
    }else{
        muñeco.src = "./img/muñeco1.png";
        tituloMensaje.textContent = "No se encontró ningún mensaje.";
        parrafo.textContent = "Ingresa el mensaje que deseas encriptar o desencriptar.";
        swal("Oops!","Debes ingresar un texto.", "warning");
    }
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "¡Mensaje desencriptado con éxito!";
        parrafo.textContent = " ";
        muñeco.src = "./img/determine-6-512.png";
    }else{
        muñeco.src = "./img/muñeco1.png";
        tituloMensaje.textContent = "No se encontró ningún mensaje.";
        parrafo.textContent = "Ingresa el mensaje que deseas encriptar o desencriptar.";
        swal("Oops!","Debes ingresar un texto.", "warning");
    }
}
function copiar(){
    let texto = document.getElementById("texto");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let muñeco = document.getElementById("muñeco");
    
    texto.select();
    texto.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(texto.value);
    tituloMensaje.textContent = "¡Mensaje copiado!";
}
