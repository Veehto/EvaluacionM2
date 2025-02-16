import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { getDoctors, postDoctors } from "../services/service";

const DoctorForm = () => {
    const [doctorData, setDoctorData] = useState({
        id: 0,
        name: '',
        specialty: '',
        experience: 0,
        schedule: [],
        available: true,
        contact: {
            phone: '',
            mail: '',
        },
        image: './src/assets/doctor-placeholder.png',
        services: [],
        cost: 0
    });
    const [nextId, setNextId] = useState(0);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const doctors = await getDoctors();
                const maxId = doctors.reduce((max, doctor) => Math.max(max, doctor.id), 0);
                setNextId(maxId + 1);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };

        fetchDoctors();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        const sanitizedValue = DOMPurify.sanitize(value);

        if (name === "phone" || name === "email") {
            setDoctorData({
                ...doctorData,
                contact: {
                    ...doctorData.contact,
                    [name]: sanitizedValue
                }
            });
        } else if (name === "schedule" || name === "services") {
            setDoctorData({ ...doctorData, [name]: sanitizedValue.split(',').map(item => item.trim()) });
        } else {
            setDoctorData({ ...doctorData, [name]: sanitizedValue });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const sanitizedDoctorData = {
            id: String(nextId), // Convert nextId to string
            name: DOMPurify.sanitize(doctorData.name),
            specialty: DOMPurify.sanitize(doctorData.specialty),
            experience: DOMPurify.sanitize(doctorData.experience),
            schedule: doctorData.schedule,
            available: doctorData.available,
            contact: {
                phone: DOMPurify.sanitize(doctorData.contact.phone),
                email: DOMPurify.sanitize(doctorData.contact.email),
            },
            image: DOMPurify.sanitize(doctorData.image),
            services: doctorData.services,
            cost: doctorData.cost
        };

        try {
            await postDoctors(sanitizedDoctorData);
            setStatus('Doctor added successfully');
            setNextId(nextId + 1);
            setDoctorData({
                id: 0,
                name: '',
                specialty: '',
                experience: 0,
                schedule: [],
                available: true,
                contact: {
                    phone: '',
                    mail: '',
                },
                image: './src/assets/doctor-placeholder.png',
                services: [],
                cost: 0
            });
        } catch (error) {
            console.error("Error adding doctor:", error);
            setStatus('Error adding doctor');
        }
    };

    const handleKeyPress = (event) => {
        const charCode = event.charCode;
        if (charCode >= 48 && charCode <= 57) {
            event.preventDefault();
        }
    };

    const handleScheduleChange = (event) => {
        const sanitizedValue = DOMPurify.sanitize(event.target.value);
        setDoctorData({ ...doctorData, schedule: sanitizedValue.split(',') });
    };

    return (
        <div className='row'>
            <div className='col'>
                <div className="card mt-2">
                    <h2 className="card-title">Agregar doctor</h2>
                    <div className="card-body">
                        <form className="contact-form pb-2" onSubmit={handleSubmit}>
                        <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre del doctor" 
                                    name="name"
                                    value={doctorData.name}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyPress}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Especialidad" 
                                    name="specialty"
                                    value={doctorData.specialty}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyPress}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Experiencia" 
                                    title="Años de experiencia"
                                    name="experience"
                                    value={doctorData.experience}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Disponibilidad (usa comas)" 
                                    name="schedule"
                                    value={doctorData.schedule.join(', ')}
                                    onChange={handleChange}
                                    onKeyDown={handleScheduleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Teléfono" 
                                    name="phone"
                                    value={doctorData.contact.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Correo electrónico" 
                                    name="email"
                                    value={doctorData.contact.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Imagen URL" 
                                    name="image"
                                    value={doctorData.image}
                                    onChange={handleChange}
                                />
                            </div> */}
                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Servicios" 
                                    name="services"
                                    value={doctorData.services.join(', ')}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Costo" 
                                    title="Costo de la consulta"
                                    name="cost"
                                    value={doctorData.cost}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="d-grip gap-2">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                        {status && <p>{status}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorForm;