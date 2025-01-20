import axios from 'axios';

const api = axios.create({
    baseURL: '/doctors.json',
    timeout: 1000
});

export const getDoctors = async () => {
    try {
        const response = await api.get('/doctors.json');
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

// export const createDoctor = async (doctor) => {
//     try {
        
//     } catch (error) {
        
//     }
// };