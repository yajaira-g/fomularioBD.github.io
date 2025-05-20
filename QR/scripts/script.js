function generarCodigoQRDesdeFormulario() {
    // Obtener los valores del formulario
    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.querySelector("input[name='Apellidos']").value.trim();
    const email = document.getElementById("email").value;
    const telefono = document.querySelector("input[name='Telefono']").value.trim();
    const compania = document.querySelector("input[name='Compania']").value.trim();
    const mensaje = document.querySelector("textarea[name='Mensaje']").value.trim();

    if (!nombres || !apellidos || !email || !telefono || !compania || !mensaje) {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }
       
    
    // Crear el contenido del código QR
       const contenidoQR = `
BEGIN:VCARD  
VERSION:3.0
N:${apellidos};${nombres}
FN:${nombres} ${apellidos}
EMAIL:${email}
TEL:${telefono}
ORG:${compania}
NOTE:${mensaje}
END:VCARD
    `.trim();
    
    // Limpiar el contenedor del código QR
    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";

    // Generar el código QR

    try {
        const qrCode = new QRCode(qrContainer, {
            text: contenidoQR,
            width: 200,
            height: 200,
        });
    } catch (error) {
        console.error("Error al generar el código QR:", error);
        alert("Hubo un problema al generar el código QR. Intenta nuevamente.");
    }
}