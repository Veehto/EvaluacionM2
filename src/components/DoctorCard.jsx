import PropTypes from 'prop-types';

export default function DoctorCard({ id, name, specialty, image, onClick }) {
    const imageStyle = {
        width: '100%',
        height: '100%',
    };

    const cardStyle = {
        height: '30rem',
        width: 'auto',
    };
    
    return (
        <div className="col">
            <div className="card" style={cardStyle}>
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};