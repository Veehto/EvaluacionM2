// prompts para pedir información al usuario y validación.

//propmt nombre completo
const fullName = prompt('¿Cuál es tu nombre?');
const regexChar = /^[A-Za-z]+$/;
if (!fullName || !regexChar.test(fullName)) {
    alert('Sólo ingresar letras.');
    throw new Error('not a valid name.');
} else {
    console.log(`${fullName} successfully entered.`);
};


// prompt correo electrónico
const mail = prompt('Cuál es tu correo electrónico?');
if (!mail) {
    alert('Ingresa un correo electrónico.');
    throw new Error('not an email'); //see if use try/catch or swtich statement instead.
} else if (!mail.includes('@')) {
    alert('Correo electrónico debe contener el símbolo @');
    throw new Error('email without @');
} else if (mail.includes('.com') || mail.includes('.cl') || mail.includes('.org')) { 
    console.log(`${mail} successfully entered.`);
} else {
    console.log(`${mail} successfully entered.`);
};


// prompt número de teléfono
const phoneNumber = parseInt(prompt('Cuál es tu número de teléfono?'));
if (!phoneNumber || isNaN(phoneNumber)) {
    alert('Sólo ingresa números en tu número de teléfono.');
    throw new Error('not a valid phone number.');
} else {
    console.log(`${phoneNumber} successfully entered.`);
};


// loguear información en consola.
console.log(fullName);
console.log(mail);
console.log(phoneNumber);


// mostrar al usuario la información que entregó.
alert(`Your data: full name: ${fullName} \n mail: ${mail} \n phone Number: ${phoneNumber}`);

// EOP: añadir información de prompts a los campos desl formulario:
form[0].value = fullName;
form[1].value = mail;
form[2].value = phoneNumber;