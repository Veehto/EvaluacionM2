import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { updateDoctor } from '../services/service';
import DOMPurify from 'dompurify';

const EditDoctorForm = ({ doctor, onClose, onUpdate }) => {
    const [doctorData, setDoctorData] = useState({ ...doctor });
    const [status, setStatus] = useState('');

    useEffect(() => {
        setDoctorData({ ...doctor });
    }, [doctor]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        const sanitizedValue = DOMPurify.sanitize(value);

        if (name === "phone" || name === "mail") {
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

        try {
            await updateDoctor(doctorData.id, doctorData);
            setStatus('Doctor updated successfully');
            onUpdate(doctorData);
            onClose();
        } catch (error) {
            console.error("Error updating doctor:", error);
            setStatus('Error updating doctor');
        }
    };

    return (
        <div className="edit-doctor-form">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre del doctor"
                        name="name"
                        value={doctorData.name}
                        onChange={handleChange}
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
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Experiencia"
                        name="experience"
                        value={doctorData.experience}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="boolean"
                        className="form-control"
                        placeholder="Activo"
                        name="available"
                        value={doctorData.available}
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
                        name="mail"
                        value={doctorData.contact.mail}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                        name="cost"
                        value={doctorData.cost}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="d-grip gap-2">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                </div>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

EditDoctorForm.propTypes = {
    doctor: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default EditDoctorForm;

/*
1. Create EditDoctorForm Component: This component handles the form for editing a doctor's information.

2. Populate the Form with Existing Data: When the edit button is clicked, populate the form with the existing data 
  of the selected doctor. When the edit button is clicked, the EditDoctorForm component is displayed, 
  allowing the user to edit the doctor's information.

3. Handle Form Submission: Handle the form submission to update the doctor's information in the database 
  using the updateDoctor function from services.js.
*/