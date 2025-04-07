import { useNavigate } from "react-router";

export default function WelcomeHero() {
    const navigate = useNavigate();
    
    const backgroundImg = {
        backgroundImage: 'url(/frontis-clinica.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh'
    };

    const backgroundColor = {
        color: 'white'
    };

    const handleAgendarHoraClick = () => {
        navigate("/make-appointments");
    };
    const handleVerDoctoresClick = () => {
        navigate("/doctors");
    };

    return (
        <div className="px-4 py-5 my-5 text-center" style={backgroundImg}>
            <img className="d-block mx-auto mb-4" src="/icons/icon-72x72.png" alt="icon-72x72" width="72" height="72"></img>
            <h1 className="display-5 fw-bold text-body-emphasis">Clínica Misión Real</h1>
            <div className="col-lg-6 mx-auto" style={backgroundColor}>
                <p className="lead mb-4">Nuestra misión es con tu salud y comodidad.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button onClick={handleAgendarHoraClick} type="button" className="btn btn-primary btn-lg px-4 gap-3">Agendar Hora</button>
                    <button onClick={handleVerDoctoresClick} type="button" className="btn btn-secondary btn-lg px-4">Equipo médico</button>
                </div>
            </div>
        </div>
    );
};