function saludar(){
    alert("Hola querida mascota");
}

function presentarse(){
    alert("¡Te saluda Harold!");
}

const botonsaludo = document.getElementById("saludo");
botonsaludo.addEventListener("Click",saludar);
