import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/navbar';
import apiUrls from '../constants/constants';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const userData = JSON.parse(sessionStorage.getItem('userData'));

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${apiUrls.notificationBaseUrl}/${userData.userName}`);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();

    const interval = setInterval(() => {
      fetchNotifications();
    }, 5000);

    return () => clearInterval(interval);
  }, [userData.userName]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Notifications for {userData.userName}</h2>
        <div className="space-y-4">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-md">
                <p>{notification.message}</p>
              </div>
            ))
          ) : (
            <p>No notifications available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationScreen;
