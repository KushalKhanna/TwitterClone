// import React from 'react'
// import Navbar from '../navbar/navbar';

// const Homepage = () => {
//     return (
//         <div>
//             <Navbar />

//             <div className="p-4 container mx-auto">
//                 <div className="mb-6">
//                     <textarea
//                         placeholder="What's on your mind?"
//                         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                         rows="3"
//                     ></textarea>
//                     <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//                         Post
//                     </button>
//                 </div>

//                 <div className="space-y-4">
//                     <div className="p-4 bg-gray-100 rounded-md shadow">
//                         This is the first feed item.
//                     </div>
//                     <div className="p-4 bg-gray-100 rounded-md shadow">
//                         Another feed item with text content.
//                     </div>
//                     <div className="p-4 bg-gray-100 rounded-md shadow">
//                         Yet another feed item for display.
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Homepage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import axios from 'axios';

import apiUrls from '../constants/constants';


const Homepage = () => {
    const [posts, setPosts] = useState([]);

    const [newPost, setNewPost] = useState('');

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.post(`${apiUrls.postBaseUrl}/all-posts`, null,
                    {
                        params: {
                            userName: userData.userName
                        },
                    }
                );
                setPosts(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchPosts();
    }, []);

    const handlePost = async () => {

        if (newPost.trim() !== '') {
            const response = await axios.post(`${apiUrls.postBaseUrl}/add-post`, null, {
                params: {
                    userName: userData.userName,
                    postContent: newPost
                }
            });

            const updatedPosts = await axios.post(`${apiUrls.postBaseUrl}/all-posts`, null, {
                params: {
                    userName: userData.userName,
                },
            });

            setPosts(updatedPosts.data);
            setNewPost('');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="p-4 container mx-auto">
                {/* Input Section */}
                <div className="mb-6">
                    <textarea
                        placeholder="What's on your mind?"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 min-h-32"
                        rows={3}
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                    />
                    <button
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={handlePost}
                    >
                        Post
                    </button>
                </div>

                {/* Display Posts */}
                <div className="space-y-4">
                    {[...posts].reverse().map((post, index) => (
                        <div
                            key={index}
                            className="p-4 bg-gray-100 rounded-md shadow"
                        >
                            <p className="mb-1">{post.postContent}</p>
                            <p className="text-sm text-gray-500">{post.timestamp}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Homepage;