import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { getSecureData } from "../services/service";

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

    const renderTableHeaders = () => {
        if (secureData.length === 0) return null;
        const headers = Object.keys(secureData[0]);
        return (
            <tr>
                {headers.map((header) => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
        );
    };

    const renderTableRows = () => {
        return secureData.map((item, index) => (
            <tr key={index}>
                {Object.values(item).map((value, idx) => (
                    <td key={idx}>{value}</td>
                ))}
            </tr>
        ));
    };

    return (
    <MainLayout>
        <h1>Dashboard</h1>
        {user?.role === "admin" && (
            <>
                <p>Bienvenido, Administrador</p>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <table>
                    <thead>
                        {renderTableHeaders()}
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>
            </>
        )}
        {user?.role === "user" && (
            <>
                <p>Bienvenido, Usuario. No tienes acceso a esta página.</p>
            </>
        )}
    </MainLayout>
    );
};

export default Dashboard;
