import axios from "axios";

// const API_URL = "http://localhost:3001";

export const getAppointments = async () => {
  const response = await axios.get('/appointments.json');
  return response.data;
}

export const getSecureData = async (token) => {
    try {
        const response = await axios.get('/securedData.json', {
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