// Cargar lista de doctores desde archivo json.
fetch('./doctors.json')
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw Error('Request Failed.');
})
.then(jsonResponse => {
    console.log('Data loaded successfully', jsonResponse);  // imprime los datos a la consola.

    let specialties = document.getElementById('specialties');  // guarda las opciones del dropdown menu del modal pop-up en una variable.
    
    // Event handlers:
    // limpia la lista de doctores de la espec. elegida anter de cargar una nueva de otra spec. (para que no se acumulen todos los doctores de destintas spec. en la lista).
    const clearDoctorsList = () => {
        let doctorsList = document.getElementById('specialists').children;
        console.log(doctorsList);
        for (let i = 0; i < doctorsList.length; i++) {
            document.getElementById('specialists').removeChild(doctorsList[i]);
        }
    };

    // Captura la espec. elegida por el usuario, itera la lista de doctores para encontrar los que coinciden con la espec., genera nuevo dropdown menu para elegir el doctor.
    const populateDoctorsList = event => {
        let choice = event.target.text;
        console.log(choice);

        jsonResponse.forEach((element, index) => {
            let specialty = element.specialty;
            let doctorsName = element.name;
            if (specialty === choice) {
                document.getElementById('specialists').hidden = false;

                let option = document.createElement('option');
                option.value = `${index}`
                option.text = doctorsName;

                document.getElementById('specialists').appendChild(option);
            };
        });
    };

    // Event Listeners: 1ero se limpia la lista de cualquier elección anterior, luego se cargan nuevos datos.
    specialties.addEventListener('click', clearDoctorsList);
    specialties.addEventListener('click', populateDoctorsList);
})
.catch(error => {
    console.error('Error loading data', error);
});