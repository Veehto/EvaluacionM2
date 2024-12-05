// Cargar lista de doctores desde archivo json.
fetch('../doctors.json')
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw Error('Request failed.');
})
.then(jsonResponse => {
    console.log('Data loaded successfully', jsonResponse);  // imprime los datos a la consola.


    // Clonación: crea un copia de un elemento del objeto JSON doctores y lo modifica:
    const doctorOnVacation = { ...jsonResponse[0] };
    doctorOnVacation.available = false;
    console.log(doctorOnVacation);

    // Merge: fusiona el contenido de dos objetos JSON en uno.
    const servicios = {
        Consultas: true,
        Telemedicina: true,
        Urgencias: true
    };
    const doctorServices = { ...jsonResponse[0], ...servicios };
    console.log(doctorServices);

    // Recorrido y Stringify:
    jsonResponse.forEach((element) => {
        console.log(JSON.stringify(element));
    });

    // Arreglos:
    const newDoctors = [];
    const newDoc1 = {
        name: 'Mario Klaus Herrera',
        specialty: 'Medicina General',
        experience: 5
    };
    const newDoc2 = {
        name: 'Waldo Mardones Chadud',
        specialty: 'Medicina General',
        experience: 6
    };
    const newDoc3 = {
        name: 'Diego Jadue Medina',
        specialty: 'Medicina General',
        experience: 2
    };
    newDoctors.push(newDoc1, newDoc2, newDoc3);
    console.log(newDoctors);
    const disqualified = newDoctors.find(element => element.experience < 3);
    console.log(disqualified);
    newDoctors.pop();
    console.log(newDoctors);

    // Stack simulation:
    const appointments = [];
    const appoint1 = {
        specialty: 'Medicina General',
        date: 'lunes',
        time: '10:30'
    };
    const appoint2 = {
        specialty: 'Dermatología',
        date: 'viernes',
        time: '16:30'
    };
    appointments.push(appoint1);
    appointments.push(appoint2);
    const nextAppoint = appointments.pop();
    console.log(`Su próxima cita es con ${nextAppoint.specialty} el ${nextAppoint.date} a las ${nextAppoint.time}`);

    // Queues Simulation:
    const patients = [];
    const patient1 = {
        patient: 'Fernando Numen',
        doctor: 'Camila Arenas',
        specialty: 'Dermatología',
        box: '403'
    };
    const patient2 = {
        patient: 'Alicia Castro',
        doctor: 'Camila Arenas',
        specialty: 'Dermatología',
        box: '403'
    };
    patients.push(patient1);
    patients.push(patient2);
    const nextPatient = patients.shift();
    console.log(`El paciente ${nextPatient.patient} pasar con la doctora ${nextPatient.doctor} al box ${nextPatient.box}`);

    // Algorithms:
    // Algoritmo de búsqueda:
    const searchDoc = docName => jsonResponse.find(doc => doc.name === docName);
    console.log(searchDoc("Alicia Marambio"));

    // Algoritmo de ordenamiento: ordena los doctores en orden descendiente por experiencia.
    jsonResponse.sort((a, b) => b.experience - a.experience);
    console.log(jsonResponse);


    // DOM manipulations:
    let specialties = document.getElementById('specialties');  // guarda las opciones del dropdown menu del modal pop-up en una variable.
    let specialists = document.getElementById('specialists');  // guarda el dropdown menu vacio que posterior% se poblará con médicos.
    let docPortrait = document.getElementById('portrait');     // guarda la tarjeta del médico.

    // Event handlers:
    // limpia la lista de doctores de la espec. elegida anter de cargar una nueva de otra spec. (para que no se acumulen todos los doctores de destintas spec. en la lista).
    const clearDoctorsList = () => {
        let doctorsList = document.getElementById('specialists').children;
        console.log(doctorsList);
        for (let i = 0; i < doctorsList.length; i++) {
            document.getElementById('specialists').removeChild(doctorsList[i]);
        }
        docPortrait.hidden = true;
    };

    // Crea tarjeta del Médico seleccionado:
    const createDocCard = event => {
        let choice = event.target.text;
        console.log(choice);

        jsonResponse.forEach(element => {
            let { name, schedule, image } = element;

            if (name === choice) {
                docPortrait.hidden = false;
                let docImage = docPortrait.children[0];
                let docName = docPortrait.children[1].children[0];
                let docSchedule = docPortrait.children[1].children[1];

                docImage.src = image;
                docImage.alt = name;
                docName.innerHTML = name;
                docSchedule.innerHTML = schedule.join(', ');
            };
        });
    };

    // Captura la espec. elegida por el usuario, itera la lista de doctores para encontrar los que coinciden con la espec., genera nuevo dropdown menu para elegir el doctor.
    const populateDoctorsList = event => {
        let choice = event.target.text;
        console.log(choice);

        jsonResponse.forEach((element, index) => {
            let { name, specialty } = element;
            if (specialty === choice) {
                specialists.hidden = false;

                let option = document.createElement('option');
                option.value = `${index}`
                option.text = name;

                specialists.appendChild(option);
                option.addEventListener('click', createDocCard);
            } else if (choice === 'Especialidad') {
                specialists.hidden = true;
            };
        });
    };

    // Event Listeners:
    specialties.addEventListener('click', clearDoctorsList);
    specialties.addEventListener('click', populateDoctorsList);
})
.catch(error => {
    console.error('Error loading data', error);
});