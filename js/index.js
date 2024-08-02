document.addEventListener("DOMContentLoaded", function() {
    const texto = document.getElementById('bienvenido-texto');
    const textoContent = texto.innerHTML;
    texto.innerHTML = '';

    let i = 0;
    function typeWriter() {
        if (i < textoContent.length) {
            // Si encontramos un <br>, lo añadimos y no incrementamos el índice
            if (textoContent.charAt(i) === '<' && textoContent.charAt(i + 1) === 'b' && textoContent.charAt(i + 2) === 'r' && textoContent.charAt(i + 3) === '>') {
                texto.innerHTML += '<br>';
                i += 4; // Saltamos el <br>
            } else {
                texto.innerHTML += textoContent.charAt(i);
                i++;
            }
            setTimeout(typeWriter, 100); // Ajusta la velocidad aquí
        }
    }

    typeWriter();
});
