import React, { useState, useEffect } from 'react';
import axios from 'axios';

import apiUrls from '../constants/constants';
import Navbar from '../navbar/navbar';

const ConnectionPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const connections = [
        { id: 1, name: 'John Doe', mutualConnections: 5 },
        { id: 2, name: 'Jane Smith', mutualConnections: 3 },
    ];

    const suggestedConnections = [
        { id: 3, name: 'Emily Johnson', mutualConnections: 8 },
        { id: 4, name: 'Michael Brown', mutualConnections: 2 },
    ];

    const otherUsers = [
        { id: 5, name: 'Chris Green', mutualConnections: 0 },
        { id: 6, name: 'Patricia White', mutualConnections: 1 },
    ];

    useEffect(() => {
        // Fetch users from the API
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${apiUrls.userBaseUrl}/all-users`); // Replace with your actual API URL
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load users.');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    const renderUserList = (users) => (
        <div className="space-y-4">
            {users.map((user) => (
                <div key={user.id} className="p-4 bg-gray-100 rounded-md shadow flex items-center justify-between">
                    <div className='mx-2'>
                        <h2 className="text-lg text-left font-medium">{user.name}</h2>
                        <p className="text-sm text-gray-600">Mutual Connections: {user.mutualConnections}</p>
                    </div>
                    <div
                        className="cursor-pointer p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition-transform mx-2"
                        title="Send Follow Request"
                    >
                        <i className="fas fa-user-plus"></i>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <>
        <Navbar />
        <div className="p-4 container mx-auto">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-extrabold text-blue-600">Your Network</h1>
                <p className="text-gray-500 mt-2">Manage your connections and explore new ones</p>
            </div>

            <section className="my-16">
                <h2 className="text-2xl text-left font-semibold mb-4">Connections</h2>
                {renderUserList(connections)}
            </section>

            <section className="my-16">
                <h2 className="text-2xl text-left font-semibold mb-4">Suggested Connections</h2>
                {renderUserList(suggestedConnections)}
            </section>

            <section className="my-16">
                <h2 className="text-2xl text-left font-semibold mb-4">Other Users</h2>
                {renderUserList(otherUsers)}
            </section>
        </div>
        </>
    );
}

export default ConnectionPage;