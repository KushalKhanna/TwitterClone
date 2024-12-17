// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from '../login/login';
// import Signup from '../signup/signup';
// import Homepage from '../homepage/homepage';
// import ConnectionPage from '../connections/connections';
// import NotificationScreen from '../notification/notification';

// const Navigation = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Homepage />} />
//         <Route path="/connections" element={<ConnectionPage />} />
//         <Route path="/notification/:userData" element={<NotificationScreen />} />
//       </Routes>
//     </Router>
//   );
// };

// export default Navigation;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../login/login';
import Signup from '../signup/signup';
import Homepage from '../homepage/homepage';
import ConnectionPage from '../connections/connections';
import NotificationScreen from '../notification/notification';

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/connections" element={<ConnectionPage />} />
        <Route path="/notification/:userName" element={<NotificationScreen />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
