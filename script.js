// --- BOTÓN 1: Cambiar texto y mostrar alerta ---
document.getElementById("cambiarTexto").addEventListener("click", function() {
    const parrafo = document.getElementById("miParrafo");
    parrafo.textContent = "Joe observa. Joe analiza. Joe sabe más de ti de lo que imaginas...";
    parrafo.style.color = "#e50914";
    alert("Has descubierto una parte del pensamiento de Joe Goldberg...");
});

// --- BOTÓN 2: Validar formulario ---
document.getElementById("validarBtn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre. Joe quiere saber quién eres...");
    } else {
        alert("Hola " + nombre + ". Joe te esta observando muy de cerca ??");
    }
});

// --- BOTÓN 3 (creado desde JS): Cambiar el tema oscuro/claro ---
const temaBtn = document.createElement("button");
temaBtn.textContent = "Cambiar ambiente";
temaBtn.id = "temaBtn";
temaBtn.style.backgroundColor = "#e50914";
temaBtn.style.color = "#fff";
temaBtn.style.border = "none";
temaBtn.style.padding = "10px 20px";
temaBtn.style.marginTop = "15px";
temaBtn.style.cursor = "pointer";
temaBtn.style.borderRadius = "4px";

document.querySelector("footer").appendChild(temaBtn);

let oscuro = true;
temaBtn.addEventListener("click", function() {
    const body = document.body;
    if (oscuro) {
        body.style.backgroundColor = "#f5f5f5";
        body.style.color = "#111";
        temaBtn.textContent = "Volver al modo oscuro";
        oscuro = false;
    } else {
        body.style.backgroundColor = "#0e0e0e";
        body.style.color = "#f1f1f1";
        temaBtn.textContent = "Cambiar ambiente";
        oscuro = true;
    }
});
