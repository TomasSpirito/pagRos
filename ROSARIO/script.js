const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
let scaleFactorYes = 1.1; // Factor de escala para aumentar el tamaño del botón Sí
let scaleFactorNo = 1.1; // Factor de escala para aumentar el tamaño del botón No
let sensitivity = 2; // Sensibilidad para disminuir la velocidad de movimiento y aumentar la dificultad

function onNoClick() {
    // Cambiar la etiqueta del botón NO
    const randomLabels = ["no clickees aca :(", "jamas te haria algo malo", "te amo","sos el amor de mi vida", "sos mi persona favorita", "me haces feliz"];
    const randomLabel = randomLabels[Math.floor(Math.random() * randomLabels.length)];
    btnNo.innerHTML = randomLabel;

    // Disminuir el tamaño del botón NO
    scaleFactorNo *= 0.8; // Puedes ajustar este valor para controlar la velocidad de disminución
    const newFontSizeNo = parseInt(window.getComputedStyle(btnNo).fontSize) * scaleFactorNo;
    btnNo.style.fontSize = newFontSizeNo + 'px';

    // Aumentar el tamaño del botón Sí
    scaleFactorYes *= 1.2; // Puedes ajustar este valor para controlar la velocidad de aumento
    const newFontSizeYes = parseInt(window.getComputedStyle(btnYes).fontSize) * scaleFactorYes;
    btnYes.style.fontSize = newFontSizeYes + 'px';

    // Mover el botón NO a una posición aleatoria con velocidad reducida
    moveButtonNo();

    // Ajustar la sensibilidad para aumentar la dificultad
    sensitivity *= 1.1; // Puedes ajustar este valor según tus preferencias
}

function onYesClick() {
    // Redireccionar a una nueva página
    window.location.href = 'si.html';
}

// Mover el botón NO cuando se carga la página
moveButtonNo();

// Mover el botón NO después de cada clic en "NO"
setInterval(moveButtonNo, 300); // Llama a la función moveButtonNo cada 300 milisegundos

function moveButtonNo() {
    // Calcular la nueva posición del botón NO
    const newX = Math.random() * (window.innerWidth - btnNo.clientWidth);
    const newY = Math.random() * (window.innerHeight - btnNo.clientHeight);

    // Aplicar la nueva posición
    btnNo.style.position = 'absolute';
    btnNo.style.left = newX + 'px';
    btnNo.style.top = newY + 'px';
}

btnYes.addEventListener('click', onYesClick);
btnNo.addEventListener('click', onNoClick);

