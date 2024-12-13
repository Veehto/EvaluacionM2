// ASYNC/AWAIT: Registrar nueva cita con doctor:
const getClinicData = async () => {
    try {
        const doctors = await fetch('../doctors.json');
        const services = await fetch('../services.json');
        const appointments = await fetch('../appointments.json');
        
        const doctorsResponse = await doctors.json();
        const serviceResponse = await services.json();
        const appointmentsResponse = await appointments.json();

        console.log('Data loaded successfully', doctorsResponse);
        console.log('Data loaded successfully', serviceResponse);
        console.log('Data loaded successfully', appointmentsResponse);

        const addAppointment = async date => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    appointmentsResponse.push(date);
                    resolve("Reserva registrada con éxito.");
                }, 2000);
            });
        };
        addAppointment({ patient: "Juan", doctor: "Juan Pérez" });
        console.log(appointmentsResponse);

    } catch (error) {
        console.error('Error loading data', error);
    };
};

getClinicData();