let currentPage = 0;

// Función para mostrar la página actual del formulario
function showPage(pageIndex) {
    const pages = document.querySelectorAll('.form-page');
    pages.forEach((page, index) => {
        page.style.display = index === pageIndex ? 'block' : 'none';
    });
}

// Función para avanzar a la siguiente página
function nextPage() {
    const pages = document.querySelectorAll('.form-page');
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

// Función para retroceder a la página anterior
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Validación básica para evitar avanzar si hay campos vacíos
function validatePage() {
    const currentFields = document.querySelectorAll(`.form-page:nth-child(${currentPage + 1}) input, .form-page:nth-child(${currentPage + 1}) textarea`);
    let isValid = true;

    currentFields.forEach(field => {
        if (field.hasAttribute('required') && !field.value.trim()) {
            field.classList.add('is-invalid'); // Agregar clase para resaltar     }
            isValid = false;
        } else {
            field.classList.remove('is-invalid'); // Quitar clase si el campo es válido
        }
    });
    
        if (!isValid) {
            alert('Por favor, complete todos los campos requeridos antes de continuar.');
        }
    
        return isValid;
    }
    
    // Inicializar el formulario mostrando la primera página
    document.addEventListener('DOMContentLoaded', () => {
         // Agregar eventos a los botones "Siguiente"
    document.querySelectorAll('.next-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (validatePage()) {
                nextPage();
            }
        });
    });

    // Agregar eventos a los botones "Anterior"
    document.querySelectorAll('.prev-btn').forEach(button => {
        button.addEventListener('click', prevPage);
    });
});
