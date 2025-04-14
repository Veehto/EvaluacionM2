import { Fragment } from 'react';
import PropTypes from 'prop-types';
import HOCServices from '../hocs/HOCServices';

function ServiceList({ services }) {
    return (
        <>
            <section className="pt-1 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Servicios</h1>
                        <p className="lead text-body-secondary">
                            Puedes ver la lista de servicios disponibles en nuestras clínicas ubicadas al rededor de la región.
                        </p>
                        {/* <p>
                            <a href="#" class="btn btn-primary my-2">Main call to action</a>
                            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                        </p> */}
                    </div>
                </div>
            </section>
        
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Servicios de la Clínica
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="list-group">
                                {
                                    services.map((service, index) => (
                                        <Fragment key={index}>
                                            <li className="list-group-item"><strong>{service.name}</strong>, ubicado en {service.location}</li>
                                        </Fragment>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HOCServices(ServiceList);

ServiceList.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
        })
    ).isRequired,
};