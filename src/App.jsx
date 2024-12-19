import { useEffect, useState } from 'react';
import DoctorList from './components/DoctorList';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import './App.css';

export default function App() {
    const [doctors, setDoctors] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("../doctors.json")
        .then((response) => response.json())
        .then((json) => setDoctors(json));
    }, []);

    useEffect(() => {
        fetch("../services.json")
        .then((response) => response.json())
        .then((json) => setServices(json));
    }, []);

    return (
        <div className='container text-center'>
            <DoctorList
                doctors={doctors}
            />
            <div className='row'>
                <div className='col'>
                    <ServiceList
                        services={services}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <AppointmentForm />
                </div>
            </div>
        </div>
    );
};