import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NevBar from './NevBar';
import { Outlet } from 'react-router-dom';

export default function Loggedin() {
  const navigate = useNavigate();

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return '';
  }

  useEffect(() => {
    const token = getCookie('authToken');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <div style={{ display: "flex", width: '100%' }}>
      <div style={{width:'250px'}}>
        <div style={{ position: 'sticky', top: '0', height: '100vh', overflowY: 'auto', borderRight: '1px solid #ccc' }}>
          <NevBar />
        </div>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
