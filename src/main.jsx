import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { addData, getAllData } from './utils/indexedDB';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker Registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

const root = document.getElementById("root");

const fetchDataAndStoreInIndexedDB = async () => {
    try {
        const response = await fetch('/db.json');
        const data = await response.json();
        const allData = [...data.doctors, ...data.appointments, ...data.services, ...data['secure-data']];
        for (const item of allData) {
            await addData(item);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const AppWrapper = () => {
    useEffect(() => {
        fetchDataAndStoreInIndexedDB();
    }, []);

    return <App />;
};

createRoot(root).render(
    <StrictMode>
        <AppWrapper />
    </StrictMode>,
);