import { Profiler } from 'react';
import DoctorProvider from './components/DoctorContext';
import DoctorList from './components/DoctorList';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import Overlays from './components/Overlays';
import './App.css';

export default function App() {
    // const [doctors, setDoctors] = useState([]);
    // const [services, setServices] = useState([]);

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
            <DoctorProvider>
                <Overlays />
                <Profiler id='DoctorList' onRender={onRenderCallback}>
                    <DoctorList />
                </Profiler>
            </DoctorProvider>
            <ServiceList />
            <AppointmentForm />
        </div>
    );
};