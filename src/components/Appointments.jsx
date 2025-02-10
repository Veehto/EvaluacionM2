import { useState } from "react";
import { getAppointments } from "../services/api";
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
        try {
            const sanitizeQuery = sanitizeInput(query);
            const allAppointments = await getAppointments();
            const filteredAppointments = allAppointments.filter(
                (appointment) =>
                    appointment.patient.toLowerCase().includes(sanitizeQuery.toLowerCase()) ||
                    appointment.specialty.toLowerCase().includes(sanitizeQuery.toLowerCase())
            );
            setAppointments(filteredAppointments);
            if (filteredAppointments.length === 0) {
                setError("Error al buscar citas. Intenta nuevamente.");
            }
        } catch (error) {
            setError("Error al buscar citas. Intenta nuevamente. " + error);
        }
    };

    const cardStyle = {
        height: 'auto',
        width: 'auto',
    };

    return (
        <MainLayout>
            <h1>Buscar Citas</h1>
            <form onSubmit={handleSearch}>
                <label htmlFor="search">
                    Nombre o Especialidad:
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
                        <div className="col">
                            <div id={index} className="card" style={cardStyle}>
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