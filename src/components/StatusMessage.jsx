import React from 'react';

export default function StatusMessage({ status }) {
    return (
        <>
            <h4>Estado de solicitud</h4>
            <p>{status}</p>
        </>
    );
}
