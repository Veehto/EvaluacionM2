import { useContext } from 'react';
import { DoctorContext, ModalContext } from './DoctorContext';
import PropTypes from 'prop-types';
import DoctorCard from "./DoctorCard";

export default function DoctorList() {
    const doctors = useContext(DoctorContext);
    const modal = useContext(ModalContext);

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
            {
                doctors.map((doctor, index) => (
                    <DoctorCard
                        key={index}
                        name={doctor.name}
                        specialty={doctor.specialty}
                        experience={doctor.experience}
                        image={doctor.image}
                        onClick={() => modal.openModal(index)}
                    />
                ))
            }
        </div>
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