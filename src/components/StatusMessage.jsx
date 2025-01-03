import React from 'react';

export default function StatusMessage({ status }) {
    return (
        <>
            <h2>Estado de solicitud</h2>
            <p>{status}</p>
        </>
    );
}
