// Función para generar un código QR en un contenedor HTML

function generarCodigoQR(texto) {
    const qrCodeContainer = document.getElementById('qrcode'); // Contenedor del código QR
    qrCodeContainer.innerHTML = ''; // Limpiar el contenedor antes de generar uno nuevo

    // Verificar si el texto está vacío
    if (!texto.trim()) {
        alert('El texto para generar el código QR no puede estar vacío.');
        return;
    }

    // Generar el código QR
    const qrCode = new QRCode(qrCodeContainer, {
        text: texto,
        width: 300,
        height: 300,
    });
}

// Ejemplo de uso: Generar un código QR con un texto predeterminado
document.addEventListener('DOMContentLoaded', () => {
    const texto = 'https://ejemplo.com'; // Cambia esto por el texto que desees
    generarCodigoQR(texto);
});

function generarCodigoQRDesdeFormulario() {
    const form = document.getElementById('form');
    const nombres = form.Nombres.value.trim();
    const apellidos = form.Apellidos.value.trim();
    const email = form.Email.value.trim();
    const telefono = form.Telefono.value.trim();

    const texto = `Nombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}`;
    generarCodigoQR(texto);
}
