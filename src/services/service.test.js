import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { getDoctors, postDoctors, deleteDoctor } from './service';

// Mock axios
vi.mock('axios');

// Set the API_URL for tests
// beforeAll(() => {
//     process.env.API_URL = "http://localhost:3001";
// });

describe('service.js - getDoctors', () => {
    it('should return a list of doctors on a successful API call', async () => {
        // Arrange
        const mockDoctors = [
            { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology' },
            { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatology' },
        ];
        axios.get.mockResolvedValueOnce({ data: mockDoctors });

        // Action
        const result = await getDoctors();

        // Assert
        expect(result).toEqual(mockDoctors);
        expect(axios.get).toHaveBeenCalledWith('https://misionreal-database.onrender.com/doctors');
    });

    it('should throw an error on a failed API call', async () => {
        // Arrange
        const mockError = new Error('Network Error');
        axios.get.mockRejectedValueOnce(mockError);

        // Action & Assert
        await expect(getDoctors()).rejects.toThrow('Network Error');
        expect(axios.get).toHaveBeenCalledWith('https://misionreal-database.onrender.com/doctors');
    });

    it('should post a new doctor and return the created doctor', async () => {
        // Arrange
        const newDoctor = { name: 'Dr. Alice', specialty: 'Oncology' };
        const mockResponse = { id: 3, ...newDoctor };
        axios.post.mockResolvedValueOnce({ data: mockResponse });
    
        // Act
        const result = await postDoctors(newDoctor);
    
        // Assert
        expect(result).toEqual(mockResponse);
        expect(axios.post).toHaveBeenCalledWith('https://misionreal-database.onrender.com/doctors', newDoctor);
    });

    it('should delete a doctor and return the response', async () => {
        // Arrange
        const doctorId = 1;
        const mockResponse = { message: 'Doctor deleted successfully' };
        axios.delete.mockResolvedValueOnce({ data: mockResponse });
    
        // Act
        const result = await deleteDoctor(doctorId);
    
        // Assert
        expect(result).toEqual(mockResponse);
        expect(axios.delete).toHaveBeenCalledWith(`https://misionreal-database.onrender.com/doctors/${doctorId}`);
    });
});