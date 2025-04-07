import MainLayout from "../layouts/MainLayout";
import AppointmentForm from "../components/AppointmentForm";

export default function AppointmentsView() {
    return (
        <MainLayout>
            <h1>Agenda tu Hora</h1>
            <AppointmentForm />
        </MainLayout>
    );
};