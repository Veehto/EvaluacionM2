import MainLayout from "../layouts/MainLayout";
import ServiceList from '../components/ServiceList';
import GetLocation from '../components/GetLocation';

export default function ServiceListView() {
    return (
        <MainLayout>
            <h1>Servicios</h1>
            <ServiceList />
            <GetLocation />
        </MainLayout>
    );
};