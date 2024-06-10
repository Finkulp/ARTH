import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './Navbar';
import { Outlet } from 'react-router-dom';

function getTokenFromCookie() {
    const cookies = document.cookie.split(';');
    let authToken = null;
    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name === 'authToken') {
            authToken = value;
        }
    });
    return authToken;
}

export default function AdminHome() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = getTokenFromCookie();
        if (!token) {
            navigate('/'); // Redirect to home if no token
        }
    }, [navigate]);

    return (
        <div>
            <AdminNavbar />
            <Outlet />
        </div>
    );
}
