import PropTypes from 'prop-types';

export default function DoctorCard({ name, specialty, experience, image, onClick }) {
    
    const imageStyle = {
        width: 'auto',
        height: '18rem',
    };
    
    return (
        <div className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt={name} style={imageStyle}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{specialty}</p>
                    <button onClick={onClick} className="btn btn-primary">Más información</button>
                </div>
            </div>
        </div>
    );
};

DoctorCard.propTypes = {
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};