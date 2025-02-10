import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const MainLayout = ({ children }) => {
    const { user, logout } = useAuth();

    return (
        <div className='container text-center'>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top rounded mb-4 shadow-sm p-3 mb-5 bg-white border-bottom border-dark">
                    <Link className="navbar-brand" to='/'>Clínica Misión Real</Link>

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
                                        <Link className="nav-link" to='/make-appointments'>Reservar Hora</Link>
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
                    {user && (
                        <div className="text-right text-secondary small font-weight-bold"> 
                            <p>Autenticado como: <strong>{user.role}</strong>.</p>
                        </div>
                    )}
                </nav>
            </header>
            <main style={{ paddingTop: '60px'}}>
                {children}
            </main>
            <footer className="bg-light text-center fixed-bottom">
                <p>&copy; 2025 Clínica Mision Real</p>
            </footer>
        </div>
    );
};

export default MainLayout;