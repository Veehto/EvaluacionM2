export default function DoctorCard({ name, specialty, experience, image }) {
    const imageStyle = {
        width: '18rem',
        height: '18rem'
    };
    
    return (
        <div className="col-lg-4 g-3">
            <div className="card">
                <img src={image} className="card-img-top" alt={name} style={imageStyle}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{specialty}</p>
                    <p className="card-text">Experiencia de {experience} años</p>
                    <button type="submit" className="btn btn-primary">Agendar</button>
                </div>
            </div>
        </div>
    );
};