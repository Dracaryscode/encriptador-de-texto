// Función para validar el texto ingresado
function validateInput(text) {
    const regex = /^[a-z\s]*$/; // Solo permite letras minúsculas y espacios
    return regex.test(text);
}

// Historial de encriptaciones/desencriptaciones
let historyList = [];

function updateHistory(text) {
    if (historyList.length >= 5) {
        historyList.shift(); // Elimina el primer elemento si ya hay 5 en el historial
    }
    historyList.push(text);
    renderHistory();
}

function renderHistory() {
    const historyElement = document.getElementById("history-list");
    historyElement.innerHTML = "";
    historyList.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyElement.appendChild(li);
    });
}

// Función para procesar el texto según la opción seleccionada (encriptar o desencriptar)
function processText() {
    let inputText = document.getElementById("input-text").value;

    // Validar el texto ingresado
    if (!validateInput(inputText)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

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
    updateHistory(outputText);
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
