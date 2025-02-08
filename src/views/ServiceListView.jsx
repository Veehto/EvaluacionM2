import MainLayout from "../layouts/MainLayout";
import ServiceList from '../components/ServiceList';

export default function ServiceListView() {
    return (
        <MainLayout>
            <h1>Servicios</h1>
            <ServiceList />
        </MainLayout>
    );
};