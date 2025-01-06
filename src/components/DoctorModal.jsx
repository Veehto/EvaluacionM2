import { useContext, useEffect } from 'react';
import { DoctorContext, ModalContext } from '../contexts/DoctorContext';

export default function DoctorModal({ setView }) {
    const doctors = useContext(DoctorContext);
    const { isOpen, closeModal, selectedDoctorIndex } = useContext(ModalContext);

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleAgendarHoraClick = () => {
        setView("appointments");
        closeModal();
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

    if (selectedDoctorIndex === null) return null;

    const doctor = doctors[selectedDoctorIndex];

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
                            <img src={doctor.image} alt={doctor.name} style={{ width: '100%' }} />
                            <p>Especialidad: {doctor.specialty}</p>
                            <p>Servicios: {doctor.services.join(', ')}</p>
                            <p>Disponibilidad: {doctor.schedule.join(', ')}</p>
                            <p>Experiencia: {doctor.experience} años</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={closeModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button onClick={handleAgendarHoraClick} type="button" className="btn btn-primary">Agendar Hora</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};