import MainLayout from "../layouts/MainLayout";
import ServiceList from '../components/ServiceList';
import GetLocation from '../components/GetLocation';

export default function ServiceListView() {
    return (
        <MainLayout>
            <ServiceList />
            <GetLocation />
        </MainLayout>
    );
};