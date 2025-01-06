import WelcomeHero from "../components/WelcomeHero";
import Narrative from "../components/Narrative";
import ServiceList from '../components/ServiceList';

export default function Home({ setView }) {
    return (
        <div>
            <WelcomeHero setView={setView}/>
            <Narrative />
            <ServiceList />
        </div>
    );
};