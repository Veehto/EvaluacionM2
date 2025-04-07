import { useContext, useEffect, useState } from 'react';
import { DoctorContext, ModalContext } from '../contexts/DoctorContext';
import { useNavigate } from 'react-router';
import { useAuth } from "../contexts/AuthContext";
import { deleteDoctor } from "../services/service";
import ConfirmationModal from './ConfirmationModal';
import EditDoctorForm from './EditDoctorForm';

export default function DoctorModal({ id, onDelete }) {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { doctors, setDoctors } = useContext(DoctorContext);
    const { isOpen, closeModal, selectedDoctorIndex } = useContext(ModalContext);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleAgendarHoraClick = () => {
        navigate("/make-appointments");
        closeModal();
    };
    
    const handleDelete = async () => {
        const doctorId = doctors[selectedDoctorIndex].id;
        try {
            console.log(`Deleting doctor with ID: ${doctorId}`);
            await deleteDoctor(doctorId);
            setDoctors(doctors.filter(doctor => doctor.id !== doctorId));
            setShowModal(false);
            closeModal();
        } catch (error) {
            console.error("Error deleting doctor:", error);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = (updatedDoctor) => {
        setDoctors(doctors.map(doctor => doctor.id === updatedDoctor.id ? updatedDoctor : doctor));
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    if (selectedDoctorIndex === null || !doctors[selectedDoctorIndex]) return null;

    const doctor = doctors[selectedDoctorIndex];

    const imageStyle = {
        width: '60%',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
    };

    return (
        <>
            {isOpen && <div className="modal-backdrop fade show"></div>}
            <div className={`modal fade ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isOpen ? 'block' : 'none' }} onClick={closeModal}>
                <div className="modal-dialog" onClick={handleModalClick}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{doctor.name}</h5>
                            <button onClick={closeModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {isEditing ? (
                                <EditDoctorForm doctor={doctor} onClose={() => setIsEditing(false)} onUpdate={handleUpdate} />
                            ) : (
                                <>
                                    <img src={doctor.image} alt={doctor.name} style={imageStyle} />
                                    <p>Especialidad: {doctor.specialty}</p>
                                    <p>Servicios: {doctor.services.join(', ')}</p>
                                    <p>Disponibilidad: {doctor.schedule.join(', ')}</p>
                                    {user?.role === 'admin' && (
                                        <>
                                            <p>Experiencia: {doctor.experience} años</p>
                                            <p>Activo: {doctor.available === true ? 'Sí' : 'No'}</p>
                                            <p>Teléfono: {doctor.contact.phone}</p>
                                            <p>Email: {doctor.contact.mail}</p>
                                            <p>imagen: {doctor.image}</p>
                                            <p>Costo: {doctor.cost}</p>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button onClick={closeModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            {!isEditing && (
                                <>
                                    <button onClick={handleAgendarHoraClick} type="button" className="btn btn-primary">Agendar Hora</button>
                                    {user?.role === "admin" && (
                                        <>
                                            <button onClick={handleEdit} className="btn btn-warning">Editar</button>
                                            <button onClick={() => setShowModal(true)} className="btn btn-danger ms-2">Eliminar</button>
                                            <ConfirmationModal
                                                show={showModal}
                                                onClose={() => setShowModal(false)}
                                                onConfirm={handleDelete}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};