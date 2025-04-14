import { useState } from "react";
import { getAppointments } from "../services/service";
import MainLayout from "../layouts/MainLayout";

const Appointments = () => {
    const [query, setQuery] = useState("");
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);

    const sanitizeInput = (input) => {
        const div = document.createElement("div");
        div.innerText = input;
        return div.innerHTML;
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);
        
        // Check if the input is empty
        if (!query.trim()) {
            setError("Ingrese un nombre.");
            setAppointments([]); // Clear the appointments list
            return;
        }

        try {
            const sanitizeQuery = sanitizeInput(query);
            const allAppointments = await getAppointments();
            const filteredAppointments = allAppointments.filter((appointment) =>
                appointment.patient.toLowerCase().includes(sanitizeQuery.toLowerCase()) ||
                appointment.specialty.toLowerCase().includes(sanitizeQuery.toLowerCase())
            );

            setAppointments(filteredAppointments);
            
            if (filteredAppointments.length === 0) {
                setError("No se encontraron citas para el paciente o especialidad especificados.");
            }
        } catch (error) {
            setError("Error al buscar citas. Intenta nuevamente.");
            console.error(error);
        }
    };

    return (
        <MainLayout>
            <section class="pt-1 text-center container">
                <div class="row pt-lg-1">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Buscar Reservas</h1>
                        <p class="lead text-body-secondary">
                            Encuentra tus reservas en esta lista. Puedes buscar por nombre de paciente o especialidad.
                        </p>
                        {/* <p>
                            <a href="#" class="btn btn-primary my-2">Main call to action</a>
                            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                        </p> */}
                    </div>
                </div>
            </section>

            <form onSubmit={handleSearch} style={{maxWidth: '70%', margin: "0 auto"}} className="mt-5 p-4 border rounded-3 bg-light">
                <div className="mb-3">
                    <label htmlFor="buscarCitaPaciente" className="form-label" style={{float: 'left'}}>Nombre paciente</label>
                    <input 
                        type="text"
                        value={query} 
                        className="form-control" 
                        id="buscarCitaPaciente" 
                        placeholder="ej: John, Jane, o Pablo" 
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div class="album py-5 bg-body-tertiary">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {
                            appointments.map((appointment, index) => (
                                <div key={index} class="col">
                                    <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Paciente</text></svg>
                                        <div class="card-body">
                                            <h5 className="card-title">{appointment.patient}</h5>
                                            <p className="card-text">Doctor: {appointment.specialist}</p>
                                            <p className="card-text">Especialidad: {appointment.specialty}</p>
                                            <p className="card-text">Fecha: {appointment.date}</p>
                                            <p className="card-text">Hora: {appointment.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Appointments;

/*
Check for Empty Input: Added a check to see if the query is empty or contains only whitespace using !query.trim(). 
If the input is empty, set an error message and clear the appointments list.

Clear Appointments List: Set the appointments state to an empty array when the input is empty to ensure that 
no appointments are displayed.

By making these changes, the entire list of appointments will not be displayed when the search input is empty, 
and an appropriate error message will be shown instead.
*/