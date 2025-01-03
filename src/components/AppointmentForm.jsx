import { useState } from "react";
import { useRef } from "react";
import StatusMessage from "./StatusMessage";

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        date: ''
    });
    const [status, setStatus] = useState('');
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form sent successfully', formData);
        setStatus('Solicitud en proceso');
    };

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div className='row'>
            <div className='col'>
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
                                    ref={inputRef}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input 
                                    type="text"
                                    name="specialty"
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
                                <button onClick={handleFocus} type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                        <StatusMessage status={status} />
                    </div>
                </div>
            </div>
        </div>
    );
};