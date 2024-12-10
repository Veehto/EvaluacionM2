// Cargar lista de doctores desde archivo json.
fetch('../doctors.json')
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw Error('Request failed.');
})
.then(jsonResponse => {
    // console.log('Data loaded successfully', jsonResponse);  // imprime los datos a la consola.



    // =====================================================================================================================
    // COPY (CLONACIÓN): crea un copia de un elemento del objeto JSON doctores y lo modifica:
    const doctorOnVacation = { ...jsonResponse[0] };
    doctorOnVacation.available = false;
    // console.log(doctorOnVacation);

    // MERGE (FUSIONAR): fusiona el contenido de dos objetos JSON en uno.
    const servicios = {
        Consultas: true,
        Telemedicina: true,
        Urgencias: true
    };
    const doctorServices = { ...jsonResponse[0], ...servicios };
    // console.log(doctorServices);

    // RECORRIDO & STRINGIFY:
    // jsonResponse.forEach((element) => {
    //     console.log(JSON.stringify(element));
    // });

    // ARRAYS (ARREGLOS):
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
    // console.log(newDoctors);
    const disqualified = newDoctors.find(element => element.experience < 3);
    // console.log(disqualified);
    newDoctors.pop();
    // console.log(newDoctors);

    // STACKS (PILAS):
    const appointments = [];
    const appoint1 = {
        id: 1,
        specialty: 'Medicina General',
        doctor: 'Pablo García',
        patient: "Fernando Numen",
        date: 'lunes',
        time: '10:30',
        cost: 20000,
        minutes: 20
    };
    const appoint2 = {
        id: 2,
        specialty: 'Dermatología',
        doctor: 'Camila Arenas',
        patient: "Alicia Castro",
        date: 'martes',
        time: '16:30',
        cost: 30000,
        minutes: 15
    };
    const appoint3 = {
        id: 3,
        specialty: 'Dermatología',
        doctor: 'Camila Arenas',
        patient: 'Alicia Castro',
        date: 'viernes',
        time: '16:30',
        cost: 30000,
        minutes: 15
    };
    appointments.push(appoint1);
    appointments.push(appoint2);
    appointments.push(appoint3);
    // const nextAppoint = appointments.pop();
    // console.log(`Su próxima cita es con ${nextAppoint.specialty} el ${nextAppoint.date} a las ${nextAppoint.time}`);

    // QUEUES Simulation:
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
    // console.log(`El paciente ${nextPatient.patient} pasar con la doctora ${nextPatient.doctor} al box ${nextPatient.box}`);

    // ALGORITHMS:
    // Algoritmo de búsqueda:
    const searchDoc = docName => jsonResponse.find(doc => doc.name === docName);
    // console.log(searchDoc("Alicia Marambio"));

    // Algoritmo de ordenamiento: ordena los doctores en orden descendiente por experiencia.
    jsonResponse.sort((a, b) => b.experience - a.experience);
    // console.log(jsonResponse);

    // CURRYING:
    const patientName = "Alicia Castro";
    const calculateCost = (appointments) => {
        return (patientName) => {
            const patientAppointments = appointments.filter(appoint => patientName === appoint.patient);
            const totalCost = patientAppointments.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.cost;
            }, 0);
            return totalCost;
        }
    };
    console.log(`Total a pagar de ${patientName}: $${calculateCost(appointments)(patientName)} CLP.`);

    // ARROW Fn (FUNCIÓN FLECHA):
    const avgWaitTime = appointments => {
        const result = appointments.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.minutes;
        }, 0);
        return Math.floor((result / appointments.length));
    };
    console.log(`Tiempo promedio de espera: ${avgWaitTime(appointments)} minutos.`);

    // RECURSION:
    const billingDoc = "Camila Arenas";
    const billingDocAppointments = appointments.filter(appoint => appoint.doctor === billingDoc);
    const totalWeeklyHours = (billingDocAppointments, index = 0) => {
        if (index === billingDocAppointments.length) {
            return 0;
        }
        return billingDocAppointments[index].minutes + totalWeeklyHours(billingDocAppointments, index + 1);
    };
    console.log(`Profesional ${billingDoc} realizó ${(totalWeeklyHours(billingDocAppointments)) / 60} horas esta semana.`);

    // FUNCTION COMPOSITION, aplicar descuento:
    const applyDiscount = cost => discount => cost - (cost * discount);
    const calculateDiscountedCost = cost => applyDiscount(cost)(0.1);
    console.log(`El precio con descuento es $${calculateDiscountedCost(200000)} CLP.`);

    // OOP:
    class Doctor {
        constructor(name, specialty, experience, appointments) {
            this.name = name;
            this.specialty = specialty;
            this._experience = experience;
            this.appointments = appointments;
        }

        get experience() {
            return this._experience;
        }

        set experience(years) {
            if (years < 0) {
                throw new Error('years of experience must be a positive number.');
            }
            this._expecience = years;
        }

        showInformation() {
            return `Doctor ${this.name}, Especialidad: ${this.specialty}, Experiencia: ${this.experience} años.`;
        }

        showAppointments(appointments) {
            const totalDocAppoints = appointments.filter(appoint => appoint.doctor === this.name);
            return `El médico ha realizado ${totalDocAppoints.length} atenciones.`;
        }
    };
    class Surgeon extends Doctor {
        constructor(name, specialty, experience, surgeries) {
            super(name, specialty, experience);
            this.surgeries = surgeries;
        }

        ShowSurgeonInfo() {
            return `Cirujano ${this.name}, Especialidad: ${this.specialty}, Operaciones: ${this.surgeries}.`;
        }
    };
    const practitioner = new Doctor('Camila Arenas', 'Dermatología', 8, appointments);
    const surgeon = new Surgeon('Rodolfo Aldunate', 'Cardiología', 10, 23);
    console.log(practitioner.showAppointments(appointments));
    console.log(surgeon.ShowSurgeonInfo());



    // ==========================================================================================================================
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