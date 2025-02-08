import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const MainLayout = ({ children }) => {
    const { user, logout } = useAuth();

    return (
        <div className='container text-center'>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top rounded mb-4 shadow-sm p-3 mb-5 bg-white border-bottom border-dark">
                    <Link className="navbar-brand" to='/'>Clínica Misión Real</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link" to='/'>Inicio</Link></li>
                            {!user && (<li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>)}
                            {user?.role === 'admin' && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/appointments'>Reservas</Link>
                                    </li>
                                </>
                            )}
                            {user && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/doctors'>Doctores</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/services'>Servicios</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link btn btn-link"
                                            onClick={logout}
                                            style={{
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Cerrar Sesión
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
            <main style={{ paddingTop: '60px' }}>
                {children}
            </main>
            <footer>
                <p>&copy; 2025 Clínica Mision Real</p>
            </footer>
        </div>
    );
};

export default MainLayout;