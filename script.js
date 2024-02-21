
// const fondos = [
//     {
//         video:"carro.mp4"
//     },
//     {
//         video:"gtr.mp4"
//     }
// ]

    function cambioFondo(){
        const videoAct = document.getElementById("video");
        const currentSrc = videoAct.getAttribute("src");
        let newSrc;
    
        // Verificar el fondo actual y asignar el siguiente fondo en función de eso
        if (currentSrc === "carro.mp4") {
            newSrc = "gtr.mp4"; // Cambiar al segundo fondo
        } else if (currentSrc === "gtr.mp4") {
            newSrc = "onepiece1.mp4"; // Cambiar al tercer fondo
        }else if (currentSrc === "onepiece1.mp4") {
            newSrc = "barco1.mp4";    
        } else { newSrc = "carro.mp4"; // Cambiar al primer fondo si es otro fondo
        }
    
        // Establecer el nuevo fondo
        videoAct.setAttribute("src", newSrc);
        videoAct.play();
    }
    

function encriptar(){
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter")
    var txtCifrado = txtCifrado.replace(/o/igm,"ober")
    var txtCifrado = txtCifrado.replace(/i/igm,"imes")
    var txtCifrado = txtCifrado.replace(/a/igm,"ai")
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat")
    // en este caso citamos el nombre de la variable solo una vez ya que si no solo estariamos modificando la primera letra del texto //
    document.getElementById("personaje").style.display = "none";
    document.getElementById("resultado").style.display="none";
    document.getElementById("titulo").innerHTML = txtCifrado

}
function desencriptar(){
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e")
    var txtCifrado = txtCifrado.replace(/ober/igm,"o")
    var txtCifrado = txtCifrado.replace(/imes/igm,"i")
    var txtCifrado = txtCifrado.replace(/ai/igm,"a")
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u")

    document.getElementById("personaje").style.display = "none";
    document.getElementById("resultado").style.display="none";
    document.getElementById("titulo").innerHTML = txtCifrado
}   

function copiar() {
    var contenido = document.getElementById("titulo").textContent; // Obtener el contenido del elemento donde se muestra el texto encriptado
    navigator.clipboard.writeText(contenido); // Copiar el texto al portapapeles
    console.log("Texto encriptado copiado al portapapeles: " + contenido); // Mensaje opcional para verificar en la consola
}

function redireccion() {
    // Cambiar la URL a la que deseas redirigir
    window.location.href = "index.html";
}
function redireccionFF() {
    // Cambiar la URL a la que deseas redirigir
    window.location.href = "FF.html";
}