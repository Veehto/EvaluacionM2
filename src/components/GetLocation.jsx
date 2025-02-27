import { useState } from 'react';

const GetLocation = () => {
    const [location, setLocation] = useState(null);

    const getLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            }, (error) => {
                console.error("Error getting location:", error);
            });
        } else {
            console.error("Geolocation is not available.");
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        setLocation(null);
    };

    return (
        <div className="container my-4">
            <form onSubmit={handleSubmit} className="p-3 bg-secondary rounded">
                <button onClick={getLocation} className="btn btn-primary">📍 Obtener Ubicación</button>
                <p>Latitude: {location?.latitude}</p>
                <p>Longitude: {location?.longitude}</p>
            </form>
            {location && (
                <p className="text-white">
                    Latitud: {location.latitude}, Longitud: {location.longitude}
                </p>
            )}
        </div>
        
    );

};