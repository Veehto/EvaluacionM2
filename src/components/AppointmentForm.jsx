import { useState } from "react";

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        date: ''
    });
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form sent successfully', formData);
    };

    return (
        <div className="card mt-5">
            <div className="card-body">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input 
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Nombre del paciente"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text"
                            name="text"
                            className="form-control"
                            placeholder="Especialidad"
                            value={formData.specialty}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="date"
                            name="date"
                            placeholder="Fecha"
                            className="form-control"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        ></input>
                    </div>
                    <div className="d-grip gap-2">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};