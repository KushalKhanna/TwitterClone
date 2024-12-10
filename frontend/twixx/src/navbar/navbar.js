import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles

const Navbar = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogoutClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirmLogout = () => {

        setIsModalOpen(false);

        toast.success("You have logged out successfully!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            onClose: () => {
                navigate('/login');
            }
        });
    };

    const handleCancelLogout = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">Logo</div>

                <div className="flex-grow max-w-md mx-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <div className="flex space-x-4">
                    <button className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-700">
                        <i className="fas fa-user-friends"></i>
                    </button>
                    <button className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-700">
                        <i className="fas fa-user-circle"></i>
                    </button>

                    <button
                        onClick={handleLogoutClick}
                        className="text-white bg-red-500 p-2 rounded-full hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Are you sure you want to log out?</h2>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleConfirmLogout}
                                className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md"
                            >
                                Yes
                            </button>
                            <button
                                onClick={handleCancelLogout}
                                className="text-white bg-gray-500 hover:bg-gray-700 px-4 py-2 rounded-md"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <ToastContainer />
        </nav>
    );
};

export default Navbar;