import { describe, it, expect } from 'vitest';
import { encryptData, decryptData } from './encryption';

describe('Encryption Utility Functions', () => {
    const testData = { username: 'admin', role: 'admin' };

    it('should encrypt data correctly', () => {
        const encryptedData = encryptData(testData);
        expect(encryptedData).toBeDefined();
        expect(typeof encryptedData).toBe('string');
        expect(encryptedData).not.toEqual(JSON.stringify(testData));
    });

    it('should decrypt data correctly', () => {
        const encryptedData = encryptData(testData);
        const decryptedData = decryptData(encryptedData);
        expect(decryptedData).toEqual(testData);
    });

    it('should return null for invalid decryption input', () => {
        const invalidData = 'invalid-encrypted-data';
        const result = decryptData(invalidData);
        expect(result).toBeNull();
    });
});