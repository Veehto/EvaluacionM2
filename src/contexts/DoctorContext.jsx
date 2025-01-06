import { useState, useEffect, createContext } from 'react';

export const DoctorContext = createContext(null);
export const ModalContext = createContext(null);

export default function DoctorProvider({ children }) {
    const [doctors, setDoctors] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);
    
    const openModal = (index) => {
        setSelectedDoctorIndex(index);
        setIsOpen(true);
    };
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        fetch("/doctors.json")
        .then((response) => response.json())
        .then((json) => setDoctors(json));
    }, []);
    
    return (
        <DoctorContext.Provider value={doctors}>
            <ModalContext.Provider value={{ isOpen, openModal, closeModal, selectedDoctorIndex }}>
                {children}
            </ModalContext.Provider>
        </DoctorContext.Provider>
    );
};