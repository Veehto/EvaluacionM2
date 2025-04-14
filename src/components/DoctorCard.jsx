import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

export default function DoctorCard({ id, name, specialty, image, onClick }) {
    const navigate = useNavigate();

    const handleAgendarHoraClick = () => {
        navigate("/make-appointments");
        closeModal();
    };
    
    return (
        <div class="col">
            <div class="card shadow-sm">
                <img 
                    src={image} 
                    alt={`Doctor ${name}`} 
                    className="card-img-top img-fluid rounded border-0 shadow-sm" 
                    style={{ height: "320px", maxWidth: '100%', objectFit: 'cover' }} 
                />
                <div class="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p class="card-text">{specialty}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button onClick={onClick} type="button" class="btn btn-secondary btn-sm">Ver</button>
                            <button  onClick={handleAgendarHoraClick} type="button" class="btn btn-sm btn-primary">Agendar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DoctorCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};