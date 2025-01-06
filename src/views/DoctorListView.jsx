import { Profiler } from "react";
import DoctorProvider from "../contexts/DoctorContext";
import Overlays from "../components/Overlays";
import DoctorList from "../components/DoctorList";


export default function DoctorListView({ onRender, setView }) {
    return (
        <div>
            <h1>Doctores</h1>
            <DoctorProvider>
                <Overlays setView={setView}/>
                <Profiler id='DoctorList' onRender={onRender}>
                    <DoctorList />
                </Profiler>
            </DoctorProvider>
        </div>
    );
};