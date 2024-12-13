// EOP & ASYNC PROGRAMMING:
const getData = async () => {
    try {
        const response = await fetch('../doctors.json');
        if (response.ok) {
            const jsonResponse = await response.json();

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
        }
    } catch (error) {
        console.error('Error loading data', error);
    }
};

getData();