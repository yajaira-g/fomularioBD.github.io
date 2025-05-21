const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

document.getElementById('next1').addEventListener('click', () => {
    page1.style.display = 'none';
    page2.style.display = 'block';
});

document.getElementById('back2').addEventListener('click', () => {
    page2.style.display = 'none';
    page1.style.display = 'block';
});

document.getElementById('next2').addEventListener('click', () => {
    page2.style.display = 'none';
    page3.style.display = 'block';
});

document.getElementById('back3').addEventListener('click', () => {
    page3.style.display = 'none';
    page2.style.display = 'block';
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // evita el envío del formulario por defecto

    // almacenar los datos del formulario en un objeto
    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: document.getElementById('edad').value,
        direccion: document.getElementById('direccion').value,
        telefono: document.getElementById('telefono').value,
        parentesco: document.getElementById('parentesco').value,
        sintomas: document.getElementById('sintomas').value,
        historial: document.getElementById('historial').value,
    };

    // Guarda lo datos en el localStorage
    let array = JSON.parse(localStorage.getItem('pacientes')) || [];
    array.push(formData);
    localStorage.setItem('pacientes', JSON.stringify(array));

    // Redirecciona personas.html con el ID del paciente
    window.location.href = `personas.html`;
    // Limpia los campos del formulario después de guardar los datos
    document.querySelector('form').reset();

    
});

