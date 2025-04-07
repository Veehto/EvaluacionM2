import { useState, useEffect } from "react";
import { getServices } from '../services/service';

function HOCServices(Component) {
    function NewComponent(props) {
        const [services, setServices] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchServices = async () => {
                try {
                    const data = await getServices();
                    setServices(data);
                } catch (error) {
                    setError('Error al cargar los servicios.');
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchServices();
        }, []);

        if (loading) {
            return <p>Cargando servicios...</p>;
        }

        if (error) {
            return <p style={{ color: 'red' }}>{error}</p>;
        }

        return <Component services={services} {...props} />;
    };

    return NewComponent;
};

export default HOCServices;