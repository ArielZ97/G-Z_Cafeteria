const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const phoneValue = document.getElementById('phone').value.trim();

    // Limpiar el div de respuesta del formulario
    formResponse.innerHTML = '';

    // Validar los campos del formulario
    let isValid = true;
    if (nameValue === '') {
        isValid = false;
        showError('Por favor, ingrese su nombre.');
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
        isValid = false;
        showError('Por favor, ingrese un correo electrónico válido.');
    }

    const phoneRegex = /^[0-9]{9,12}$/;
    if (!phoneRegex.test(phoneValue)) {
        isValid = false;
        showError('Por favor, ingrese un número de teléfono válido.');
    }

    // Si todos los campos son válidos, mostrar los datos enviados
    if (isValid) {
        const dataDiv = document.createElement('div');
        dataDiv.innerHTML = `
            <p>Nombre: ${nameValue}</p>
            <p>Correo electrónico: ${emailValue}</p>
            <p>Teléfono: ${phoneValue}</p>
        `;
        formResponse.appendChild(dataDiv);

        // Limpiar los campos 
        contactForm.reset();

        // Mostrar un mensaje de éxito
        showSuccess('¡Formulario enviado correctamente!');
    }
});

// es la funcion que muestra mensaje de error 
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.textContent = message;
    formResponse.appendChild(errorDiv);
}

//  es la funcion que muestra ek mensaje de que fue un exito
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.classList.add('success');
    successDiv.textContent = message;
    formResponse.appendChild(successDiv);
}
