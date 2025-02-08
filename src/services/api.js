import axios from "axios";

// const API_URL = "http://localhost:3001";

// export const getFlights = async () => {
//   const response = await axios.get(`${API_URL}/flights`);
//   return response.data;
// }

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