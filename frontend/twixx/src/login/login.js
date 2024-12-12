import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ userName: '', passWord: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);

            navigate(`/home?username=${form.username}`);
        } catch (err) {
            console.error('Login error:', err.message);
            setError(err.message);
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md w-96"
                >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>

                    {/* if error */}
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-600 font-medium mb-2"
                        >
                            User Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-600 font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
