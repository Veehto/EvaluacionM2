import { Profiler, useContext } from "react";
import { DoctorContext, ModalContext } from "../contexts/DoctorContext";
import Overlays from "../components/Overlays";
import DoctorList from "../components/DoctorList";

function DoctorListContent({ onRender }) {
    const { doctors, loading } = useContext(DoctorContext);
    const { isOpen, openModal, closeModal, selectedDoctorIndex } = useContext(ModalContext);

    return (
        <>
            {isOpen && selectedDoctorIndex !== null && (
                <Overlays doctor={doctors[selectedDoctorIndex]} onClose={closeModal} />
            )}
            <Profiler id='DoctorList' onRender={onRender}>
                <DoctorList onMoreInfoClick={openModal} />
            </Profiler>
            {loading && <p>Loading...</p>}
        </>
    );
}

export default DoctorListContent;