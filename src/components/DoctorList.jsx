import { useState, useContext } from 'react';
import { DoctorContext, ModalContext } from '../contexts/DoctorContext';
import PropTypes from 'prop-types';
import DoctorCard from "./DoctorCard";
import Notification from './Notification';

export default function DoctorList() {
    const { doctors, loading, fetchDoctors, notification }= useContext(DoctorContext);
    const { openModal } = useContext(ModalContext);
    const [selectedSpecialty, setSelectedSpecialty] = useState('Todos');

    const handleSpecialtyChange = (specialty) => {
        setSelectedSpecialty(specialty);
    };

    const handleReload = () => {
        fetchDoctors();
    };

    const filteredDoctors = selectedSpecialty === 'Todos'
        ? doctors
        : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

    return (
        <>
            <button onClick={handleReload}>Refrescar lista</button>
            {notification && <Notification message={notification}/>}
            {!notification && (
                <>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Especialidad
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button" onClick={() => handleSpecialtyChange('Todos')}>Todos</button></li>
                            <li><button className="dropdown-item" type="button" onClick={() => handleSpecialtyChange('Medicina General')}>Medicina General</button></li>
                            <li><button className="dropdown-item" type="button" onClick={() => handleSpecialtyChange('Cardiología')}>Cardiología</button></li>
                            <li><button className="dropdown-item" type="button" onClick={() => handleSpecialtyChange('Oncología')}>Oncología</button></li>
                            <li><button className="dropdown-item" type="button" onClick={() => handleSpecialtyChange('Dermatología')}>Dermatología</button></li>
                        </ul>
                    </div>


                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
                        {
                            loading ? (<p>Cargando...</p>) : (
                                filteredDoctors.map((doctor, index) => (
                                    <DoctorCard
                                        key={index}
                                        name={doctor.name}
                                        specialty={doctor.specialty}
                                        experience={doctor.experience}
                                        image={doctor.image}
                                        onClick={() => openModal(index)}
                                    />
                                ))
                            )
                        }
                    </div>
                </>
            )}
        </>
    );
};

DoctorList.propTypes = {
    doctors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            specialty: PropTypes.string.isRequired,
            experience: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};