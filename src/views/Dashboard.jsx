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
        <section className="pt-1 text-center container">
            <div className="row pt-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Dashboard</h1>
                    <p className="lead text-body-secondary">
                        Bienvenido, Administrador.
                    </p>
                    {/* <p>
                        <a href="#" class="btn btn-primary my-2">Main call to action</a>
                        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                    </p> */}
                </div>
            </div>
        </section>

        <div className="container text-center">
            {user?.role === "admin" && (
                <>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <table style={{margin: "0 auto"}}>
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
        </div>
    </MainLayout>
    );
};

export default Dashboard;
