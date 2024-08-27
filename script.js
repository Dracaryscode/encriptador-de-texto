// Función para procesar el texto según la opción seleccionada (encriptar o desencriptar)
function processText() {
    let inputText = document.getElementById("input-text").value;
    let outputText;
    let mode = document.querySelector('input[name="mode"]:checked').value;

    if (mode === "encrypt") {
        outputText = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    } else {
        outputText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    document.getElementById("output-text").innerText = outputText;
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    let outputText = document.getElementById("output-text").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    });
}

// Función para actualizar el texto del botón según la opción seleccionada
function updateButtonText() {
    let mode = document.querySelector('input[name="mode"]:checked').value;
    let actionButton = document.getElementById("action-button");
    
    if (mode === "encrypt") {
        actionButton.textContent = "Encriptar";
    } else {
        actionButton.textContent = "Desencriptar";
    }
}

// Evento para actualizar el texto del botón cuando cambia la selección
document.querySelectorAll('input[name="mode"]').forEach((elem) => {
    elem.addEventListener("change", updateButtonText);
});

// Inicializar el texto del botón cuando se carga la página
updateButtonText();