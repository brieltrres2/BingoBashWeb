import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // React Router v6

const Layout = () => {
  const [isGreen, setIsGreen] = useState(false);

  const toggleBackground = () => {
    setIsGreen(prev => !prev);
  };

  return (
    <div style={{ backgroundColor: isGreen ? 'rgb(0, 0, 255)' : 'rgb(83, 83, 83)', minHeight: '100vh' }}>
      <div className="text-container">
        {/* This text container will show on all pages */}
        <p onClick={toggleBackground} style={{ cursor: 'pointer' }}>
          JY Tournaments © 2025
        </p>
      </div>
      {/* Outlet renders the matched child route component */}
      <Outlet />
    </div>
  );
};

export default Layout;


