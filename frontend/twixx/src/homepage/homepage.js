import React from 'react'
import Navbar from '../navbar/navbar';

import { useLocation } from 'react-router-dom';


const Homepage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get('username');
    console.log("user:", username)
    return (
        <div>
            <Navbar />

            <div className="p-4 container mx-auto">
                <div className="mb-6">
                    <textarea
                        placeholder="What's on your mind?"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        rows="3"
                    ></textarea>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Post
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-gray-100 rounded-md shadow">
                        This is the first feed item.
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md shadow">
                        Another feed item with text content.
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md shadow">
                        Yet another feed item for display.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;