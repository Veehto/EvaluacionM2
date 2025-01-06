import { useState } from 'react';
import Home from './views/Home';
import DoctorListView from './views/DoctorListView';
import AppointmentsView from './views/AppointmentsView';
import './App.css';

export default function App() {
    // const [doctors, setDoctors] = useState([]);
    // const [services, setServices] = useState([]);
    
    // State to control the current view
    const [view, setView] = useState("home");

    // useEffect(() => {
    //     fetch("../doctors.json")
    //     .then((response) => response.json())
    //     .then((json) => setDoctors(json));
    // }, []);

    // useEffect(() => {
    //     fetch("/services.json")
    //     .then((response) => response.json())
    //     .then((json) => setServices(json));
    // }, []);

    function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        console.log(`ID: ${id}`);
        console.log(`Phase: ${phase}`);
        console.log(`Actual duration: ${actualDuration}`);
        console.log(`Base duration: ${baseDuration}`);
        console.log(`Start time: ${startTime}`);
        console.log(`Commit time: ${commitTime}`);
    };

    return (
        <div className='container text-center'>
            <nav>
                {/* View buttons */}
                <button onClick={() => setView("home")}>Inicio</button>
                <button onClick={() => setView("doctors")}>Doctores</button>
                <button onClick={() => setView("appointments")}>Horas</button>
            </nav>

            {/* Checks to show the current view */}
            {view === "home" && <Home setView={setView}/>}
            {view === "doctors" && <DoctorListView onRender={onRenderCallback} setView={setView}/>}
            {view === "appointments" && <AppointmentsView />}
        </div>
    );
};