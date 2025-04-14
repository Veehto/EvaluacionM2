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

    // const handleReload = () => {
    //     fetchDoctors();
    // };

    // const handleDelete = (id) => {
    //     setDoctors(doctors.filter(doctor => doctor.id !== id));
    // };

    const filteredDoctors = selectedSpecialty === 'Todos'
        ? doctors
        : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

    return (
        <>
            {/* <button onClick={handleReload}>Refrescar lista</button> */}
            {notification && <Notification message={notification}/>}
            {!notification && (
                <>
                    <section class="pt-5 text-center container">
                        <div class="row pt-lg-1">
                            <div class="col-lg-6 col-md-8 mx-auto">
                                <h1 class="fw-light">Doctores</h1>
                                <p class="lead text-body-secondary">
                                    Encuentra a tu especialista en esta lista. Puedes filtrar por especialidad.
                                </p>
                                <div className="dropdown">
                                    <button className="btn btn-primary m2-y dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <p>
                                    {/* <a href="#" class="btn btn-primary my-2"></a> */}
                                    {/* <a href="#" class="btn btn-secondary my-2">Secondary action</a> */}
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className='album py-5 bg-body-tertiary'>
                        <div className='container'>
                            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3'>
                                {
                                    loading ? (<p>Cargando...</p>) : (
                                        filteredDoctors.map((doctor) => (
                                            <DoctorCard
                                                key={doctor.id}
                                                id={doctor.id}
                                                name={doctor.name}
                                                specialty={doctor.specialty}
                                                experience={doctor.experience}
                                                image={doctor.image}
                                                onClick={() => openModal(doctor.id)}
                                                // onDelete={handleDelete}
                                            />
                                        ))
                                    )
                                }
                            </div>
                        </div>
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