import WelcomeHero from "../components/WelcomeHero";
import Narrative from "../components/Narrative";
import ServiceList from '../components/ServiceList';
import MainLayout from "../layouts/MainLayout";

export default function Home() {

    return (
        <MainLayout>
            <WelcomeHero />
            <Narrative />
            <ServiceList />
        </MainLayout>
    );
};