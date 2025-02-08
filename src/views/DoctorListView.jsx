import DoctorProvider from "../contexts/DoctorContext"
import MainLayout from "../layouts/MainLayout";
import DoctorListContent from "../components/DoctorListContent";

export default function DoctorListView({ onRender }) {
    return (
        <DoctorProvider>
            <MainLayout>
                <h1>Doctores</h1>
                <DoctorListContent onRender={onRender} />
            </MainLayout>
        </DoctorProvider>
    );
};