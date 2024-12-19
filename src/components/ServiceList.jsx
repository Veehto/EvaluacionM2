import Service from './Service';

export default function ServiceList({ services }) {
    return (
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
                                    <Service
                                        key={index}
                                        name={service.name}
                                        location={service.location}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};