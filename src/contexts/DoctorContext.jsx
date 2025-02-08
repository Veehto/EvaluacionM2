import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const DoctorContext = createContext(null);
export const ModalContext = createContext(null);

export default function DoctorProvider({ children }) {
    const [doctors, setDoctors] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState(null);
    
    const openModal = (index) => {
        setSelectedDoctorIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const fetchDoctors = async () => {
        setLoading(true);
        setNotification(null);
        try {
            // Simulate a 50% chance of failure:
            if (Math.random() < .3) {
                throw new Error('Failed to load doctors data.');
            }
            const response = await axios.get('/doctors.json');
            setDoctors(response.data);
        } catch (error) {
            console.log(error);
            setNotification('Error en cargar lista de doctores. Por favor, refresque la lista.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // fetch("/doctors.json")
        // .then((response) => response.json())
        // .then((json) => setDoctors(json))
        // .catch(error => console.log(error));
                
        // axios:
        // axios
        //     .get('/doctors.json')
        //     .then(response => setDoctors(response.data))
        //     .catch(error => console.log(error));

        fetchDoctors();

        // axios service
        // const fetchDoctors = async () => {
        //     try {
        //         const data = await getDoctors();
        //         setDoctors(data);
        //     } catch (error) {
        //         console.log(error);
        //     };
        // };
        // fetchDoctors();
    }, []);
    
    return (
        <DoctorContext.Provider value={{ doctors, loading, fetchDoctors, notification }}>
            <ModalContext.Provider value={{ isOpen, openModal, closeModal, selectedDoctorIndex }}>
                {children}
            </ModalContext.Provider>
        </DoctorContext.Provider>
    );
};