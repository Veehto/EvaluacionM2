// OOP: EVENT LISTENERS
const form = document.getElementById('contact-form');

// Event handler:
const deliveryConfirm = (event) => {
    event.preventDefault();
    alert('Formulario enviado con éxito.');
};

form.addEventListener('submit', deliveryConfirm);


// PERSONALIZED EVENT:
const newVisitor = new Event('newVisitor');

// Event handler:
const greetVisitor = () => {
    alert('Nuevo visitante a la página ha llegado. ¡Bienvenido!');
};

document.addEventListener('newVisitor', greetVisitor);
document.dispatchEvent(newVisitor);