import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

export default function DoctorCard({ id, name, specialty, image, onClick }) {
    const navigate = useNavigate();

    const handleAgendarHoraClick = () => {
        navigate("/make-appointments");
        closeModal();
    };
    
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img 
                    src={image} 
                    alt={`Doctor ${name}`} 
                    className="card-img-top img-fluid rounded border-0 shadow-sm" 
                    style={{ height: "320px", maxWidth: '100%', objectFit: 'cover' }} 
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{specialty}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button onClick={onClick} type="button" className="btn btn-secondary btn-sm">Ver</button>
                            <button  onClick={handleAgendarHoraClick} type="button" className="btn btn-sm btn-primary">Agendar</button>
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