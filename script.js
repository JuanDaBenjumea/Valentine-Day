// Lista de GIFs de Tenor
const gifIDs = [
    "2871482820979272488",  // Primer GIF
    "11077874544832083511", // Segundo GIF
    "220120110352320639",   // Tercer GIF
    "15998804"              // Cuarto GIF
];

const frases = [
    "¿Estás segura? 😢",
    "¿Segura segura segurita? 🥺",
    "¿Segura segura segurita segurita? 😭",
    "¿Segura segura segurita segurita segurita? 😭💔"
];

let currentIndex = 0;
let clickCount = 0;

// Función para cambiar el GIF
function cambiarGif() {
    if (currentIndex < gifIDs.length - 1) {
        currentIndex++; // Avanza al siguiente GIF
    }

    let gifDiv = document.getElementById("gif");
    gifDiv.innerHTML = `<div class="tenor-gif-embed" data-postid="${gifIDs[currentIndex]}" data-share-method="host" data-aspect-ratio="1.28351" data-width="200" data-height="155"></div>`;
    tenorEmbedScript(); // Recarga el script de Tenor
}

// Recargar el script de Tenor para mostrar el nuevo GIF
function tenorEmbedScript() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://tenor.com/embed.js";
    document.body.appendChild(script);
}

// Evento para cambiar el GIF y hacer cambios en los botones
document.getElementById("noButton").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    if (clickCount < 4) {
        cambiarGif(); // Cambia el GIF

        // Cambia la pregunta con cada clic
        document.getElementById("pregunta").innerText = frases[clickCount];

        // Modifica el tamaño de los botones
        let siButton = document.getElementById("siButton");
        let noButton = document.getElementById("noButton");

        let siSizeIncrease = (clickCount + 1) * 15; // Crece gradualmente
        let noSizeDecrease = (clickCount + 1) * 3;  // Se reduce gradualmente

        siButton.style.fontSize = `${16 + siSizeIncrease}px`;
        siButton.style.padding = `${10 + siSizeIncrease / 2}px ${25 + siSizeIncrease / 2}px`;

        noButton.style.fontSize = `${16 - noSizeDecrease}px`;
        noButton.style.padding = `${10 - noSizeDecrease}px ${25 - noSizeDecrease}px`;

        clickCount++;
    } 

    // En el cuarto clic, el botón "SÍ" cubre toda la pantalla con color rosa oscuro
    if (clickCount === 4) {
        let siButton = document.getElementById("siButton");
        siButton.classList.add("fullscreen");
        siButton.innerText = "¡SÍ! 💖";
    }
});
