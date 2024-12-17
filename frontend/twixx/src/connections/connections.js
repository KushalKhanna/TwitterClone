import React, { useState, useEffect } from 'react';
import axios from 'axios';

import apiUrls from '../constants/constants';
import Navbar from '../navbar/navbar';

const ConnectionPage = () => {
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState({
        friendList: ['user1', 'user2', 'user3'],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${apiUrls.userBaseUrl}/all-users`);
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load users.');
                setLoading(false);
            }
        };

        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`${apiUrls.userBaseUrl}/${userData.userName}`);
                setUserInfo(response.data);
            } catch (err) {
                setError('Failed to load user info.');
            }
        };

        fetchUsers();
        fetchUserInfo();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    const filteredUsers = users.filter(user => !userInfo.friendList.includes(user.userName));

    const handleFollow = async (user) => {
        try {
    
            const response = await axios.post(`${apiUrls.userBaseUrl}/connect`, null, {
                params: {
                    currentUser: userData.userName,
                    targetUser: user.userName
                },
            });
    
            console.log(`Follow request sent successfully to ${user.userName}`);
            console.log(response.data);
    
            setUserInfo(prevState => ({
                ...prevState,
                friendList: [...prevState.friendList, user.userName]
            }));
        } catch (error) {
            console.error(`Failed to send follow request to ${user.userName}:`, error);
        }
    };

    const handleUnfollow = async (user) => {
        console.log(`Unfollowing ${user.userName}`);
        try {
            const response = await axios.post(`${apiUrls.userBaseUrl}/disconnect`, null, {
                params: {
                    currentUser: userData.userName,
                    targetUser: user.userName
                },
            });
            console.log(`Follow request sent successfully to ${user.userName}`);
            console.log(response.data);
    
            const updatedFriendList = userInfo.friendList.filter(
                (friend) => friend !== user.userName
            );

            setUserInfo({
                ...userInfo,
                friendList: updatedFriendList,
            });

            console.log("Unfollowed successfully!");
        } catch (error) {
            console.error(`Failed to send follow request to ${user.userName}:`, error);
        }
    };

    const renderUserList = (users) => (
        <div className="space-y-4">
            {users.map((user) => (
                <div key={user.userId} className="p-4 bg-gray-100 rounded-md shadow flex items-center justify-between">
                    <div className='mx-2'>
                        <h2 className="text-lg text-left font-medium">{user.firstName} {user.lastName}</h2>
                        <p className="text-sm text-gray-600">Username: {user.userName}</p>
                    </div>
                    <div
                        className="cursor-pointer p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition-transform mx-2"
                        title="Send Follow Request"
                        onClick={() => handleFollow(user)}
                    >
                        <i className="fas fa-user-plus"></i>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderConnections = () => (
        <div className="space-y-4">
            {userInfo.friendList.map((friendUserName) => {
                const friend = users.find(user => user.userName === friendUserName);
                return (
                    friend && (
                        <div key={friend.userId} className="p-4 bg-gray-100 rounded-md shadow flex items-center justify-between">
                            <div className='mx-2'>
                                <h2 className="text-lg text-left font-medium">{friend.firstName} {friend.lastName}</h2>
                                <p className="text-sm text-gray-600">Username: {friend.userName}</p>
                            </div>
                            <div
                                className="cursor-pointer p-2 bg-red-600 text-white rounded-full hover:bg-red-700 hover:scale-105 transition-transform mx-2"
                                title="Unfollow"
                                onClick={() => handleUnfollow(friend)}
                            >
                                <i className="fas fa-user-minus"></i>
                            </div>
                        </div>
                    )
                );
            })}
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
                    {renderConnections()}
                </section>

                <section className="my-16">
                    <h2 className="text-2xl text-left font-semibold mb-4">Other Users</h2>
                    {renderUserList(filteredUsers)}
                </section>
            </div>
        </>
    );
};

export default ConnectionPage;
