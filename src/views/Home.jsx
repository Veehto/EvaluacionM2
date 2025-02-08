import WelcomeHero from "../components/WelcomeHero";
import Narrative from "../components/Narrative";
import ServiceList from '../components/ServiceList';
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router";

export default function Home() {
    const { user } = useAuth();

    return (
        <MainLayout>
            <WelcomeHero />
            <Narrative />
            <ServiceList />
            {!user && (<Link to='/login'>Iniciar Sesión</Link>)}
            {user && (<p>Autenticado como: <strong>{user.role}</strong>.</p>)}
        </MainLayout>
    );
};