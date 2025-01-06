import { useState, useEffect } from "react";

function HOCServices(Component) {
    function NewComponent() {
        const [services, setServices] = useState([]);

        useEffect(() => {
            fetch("/services.json")
            .then((response) => response.json())
            .then((json) => setServices(json));
        }, []);

        return <Component services={services} />;
    };

    return NewComponent;
};

export default HOCServices;