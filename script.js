const form = document.querySelector('#entry-form');
const nombre = document.querySelector('#nombre');
const edad = document.querySelector('#edad');
const formModal = document.querySelector('#form-modal');
const successScreen = document.querySelector('#success-screen');
const errorScreen = document.querySelector('#error-screen');
const successText = document.querySelector('#success-text');
const errorText = document.querySelector('#error-text');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const nombreValue = nombre.value.trim() || 'Usuario';
    const edadValue = Number(edad.value);

    if (edadValue >= 18) {
        successText.textContent = `Bienvenido, ${nombreValue}, tienes acceso al evento`;
        successScreen.classList.remove('hidden');
        errorScreen.classList.add('hidden');
    } else {
        errorText.textContent = `Lo sentimos, ${nombreValue}, debes ser mayor de edad`;
        errorScreen.classList.remove('hidden');
        successScreen.classList.add('hidden');
    }

    formModal.classList.add('hidden');
}
