// EOP & ASYNC PROGRAMMING:
const getData = async () => {
    try {
        const response = await fetch('../doctors.json');
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('Data loaded successfully', jsonResponse);
        }
        // throw new Error('Request failed.');
    } catch (error) {
        console.error('Error loading data', error);
    }
};

getData();