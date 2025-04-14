import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'password') {
            login('admin');
            navigate('/dashboard');
        } else if (username === 'user' && password === 'contrasena') {
            login('user');
            navigate('/');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <MainLayout>
            <form onSubmit={handleLogin} style={{maxWidth: '70%', margin: "0 auto"}} className="mt-5 p-4 border rounded-3 bg-light">
                <img className="mb-4" src="/icons/icon-72x72.png" alt="icon-72x72" />
                <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>
                <div class="form-floating mb-2">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label for="floatingInput">Usuario</label>
                </div>
                <div class="form-floating">
                    <input 
                        type="password" 
                        class="form-control" 
                        id="floatingPassword" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-check text-start my-3">
                    <label className="form-check-label" htmlFor="checkDefault">Recuérdame</label>
                    <input
                        className="form-check-input" 
                        type="checkbox" 
                        value="remember-me" 
                        id="checkDefault" 
                    />
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
            </form>
        </MainLayout>
    );
};

export default Login;