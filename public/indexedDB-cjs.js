const DB_NAME = 'clinicDB';
const DB_VERSION = 1;
const STORE_NAME = 'dataStore';

const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
};

const addData = async (data) => {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        // Check if the data already exists
        const getRequest = store.get(data.id);

        getRequest.onsuccess = () => {
            if (getRequest.result) {
                // Data exists, update it
                const updateRequest = store.put(data);
                updateRequest.onsuccess = () => {
                    resolve(updateRequest.result);
                };
                updateRequest.onerror = (event) => {
                    reject(event.target.error);
                };
            } else {
                // Data does not exist, add it
                const addRequest = store.add(data);
                addRequest.onsuccess = () => {
                    resolve(addRequest.result);
                };
                addRequest.onerror = (event) => {
                    reject(event.target.error);
                };
            }
        };

        getRequest.onerror = (event) => {
            reject(event.target.error);
        };
    });
};

const getData = async (id) => {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(id);

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
};

const getAllData = async () => {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
};

// Expose functions to the global scope
self.openDB = openDB;
self.addData = addData;
self.getData = getData;
self.getAllData = getAllData;