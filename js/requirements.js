// Cargar lista de doctores desde archivo json.
fetch('../doctors.json')
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw Error('Request failed.');
})
.then(jsonResponse => {
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
    const baseCost = calculateCost(appointments)(patientName);
    const defineDiscount = () => {
        const counter = appointments.filter(appoint => patientName === appoint.patient).length;
        if (counter === 1) {
            return 0.1;
        } else if (counter >= 2 && counter <= 3) {
            return 0.25;
        } else if (counter > 3 && counter <= 5) {
            return 0.4;
        } else {
            return 0.5;
        };
    };
    const applyDiscount = cost => discount => cost - (cost * discount);
    const calculateDiscountedCost = cost => applyDiscount(cost)(defineDiscount());
    console.log(`El precio con descuento es $${calculateDiscountedCost(baseCost)} CLP.`);

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
})
.catch(error => {
    console.error('Error loading data', error);
});