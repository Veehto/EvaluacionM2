import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { getSecureData } from "../services/api";

const Dashboard = () => {
    const { user } = useAuth();
    const [secureData, setSecureData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("user");
            if (!token) {
                setError("No se encontró un token válido. Inicia sesión de nuevo.");
                return;
            }

            try {
                const data = await getSecureData(token);
                setSecureData(data);
            } catch (error) {
                setError("Token inválido o no autorizado " + error);
            }
        };

        if (user?.role === "admin") {
            fetchData();
        }
    }, [user]);

    return (
    <MainLayout>
        <h1>Dashboard</h1>
        {user?.role === "admin" && (
        <>
            <p>Bienvenido, Administrador</p>
            {error && <p style={{ color: "red" }}> {error} </p>}
            <ul>
            {secureData.map((item) => (
                <li key={item.id}>{item.info}</li>
            ))}
            </ul>
        </>
        )}
        {user?.role === "user" && (
        <>
            <p>Bienvenido, Usuario. No tienes acceso esta página.</p>
        </>
        )}
    </MainLayout>
    );
};

export default Dashboard;
