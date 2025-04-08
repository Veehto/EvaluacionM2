import axios from "axios";

// Use environment variable or default to localhost
const API_URL = process.env.API_URL || "https://misionreal-database.onrender.com";

// Doctors service
export const getDoctors = async () => {
    try {
        const response = await axios.get(`${API_URL}/doctors`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const postDoctors = async (doctor) => {
    try {
        const response = await axios.post(`${API_URL}/doctors`, doctor);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteDoctor = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/doctors/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};
  
export const updateDoctor = async (id, doctor) => {
    try {
        const response = await axios.put(`${API_URL}/doctors/${id}`, doctor);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};


// Appointments service
export const getAppointments = async () => {
    try {
        const response = await axios.get(`${API_URL}/appointments`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};


// Services service
export const getServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};


// Dashboard service
export const getSecureData = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/secure-data`, {
            headers: {
            Authorization: `Bearer ${token}`,
            }
        });
    return response.data;
    } catch (error) {
        console.error("Error al obtener los datos protegidos", error);
        throw error; 
    }
};