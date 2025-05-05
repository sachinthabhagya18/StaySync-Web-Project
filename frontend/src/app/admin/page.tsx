'use client';
import React from 'react';
export default function Admin() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Home Panel</h1>
            <p>Welcome to the admin dashboard. Manage your application here.</p>
            <div style={{ marginTop: '20px' }}>
                <button style={{ marginRight: '10px' }}>Manage Users</button>
                <button style={{ marginRight: '10px' }}>View Reports</button>
                <button>Settings</button>
            </div>
        </div>
    );
}