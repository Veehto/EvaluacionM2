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

    const cardStyle = {
        height: 'auto',
        width: 'auto',
    };

    return (
        <MainLayout>
            <h1>Buscar Reservas</h1>
            <form onSubmit={handleSearch}>
                <label htmlFor="search">
                    Nombre:
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="John, Jane, o Pablo"
                    />
                </label>
                <button type="submit">Buscar</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className='row mt-3'>
                {
                    appointments.map((appointment, index) => (
                        <div key={index} className="col">
                            <div className="card" style={cardStyle}>
                                <div className="card-body">
                                    <h5 className="card-title">Paciente: {appointment.patient}</h5>
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