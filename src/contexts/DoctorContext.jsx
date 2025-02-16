import { useState, useEffect, createContext } from 'react';
import { getDoctors } from '../services/service';

export const DoctorContext = createContext(null);
export const ModalContext = createContext(null);

export default function DoctorProvider({ children }) {
    const [doctors, setDoctors] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState(null);
    
    const openModal = (doctorId) => {
        const index = doctors.findIndex(doctor => doctor.id === doctorId);
        if (index !== -1) {
            setSelectedDoctorIndex(index);
            setIsOpen(true);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedDoctorIndex(null);
    };

    const fetchDoctors = async () => {
        setLoading(true);
        setNotification(null);
        try {
            // Simulate a 50% chance of failure:
            if (Math.random() < .3) {
                throw new Error('Failed to load doctors data.');
            }
            const response = await getDoctors();
            setDoctors(response);
        } catch (error) {
            console.log(error);
            setNotification('Error en cargar lista de doctores. Por favor, refresque la lista.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);
    
    return (
        <DoctorContext.Provider value={{ doctors, setDoctors, loading, fetchDoctors, notification }}>
            <ModalContext.Provider value={{ isOpen, openModal, closeModal, selectedDoctorIndex }}>
                {children}
            </ModalContext.Provider>
        </DoctorContext.Provider>
    );
};