import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Adminsignupcontext from '../../Context/AdminSignup/Adminsignupcontext';
import { useContext } from 'react';
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
    const { setResult } = useContext(Adminsignupcontext); 
    const navigate = useNavigate();

    useEffect(() => {
        const token = getTokenFromCookie();
        if (!token) {
            navigate('/'); // Redirect to home if no token
        }
        async function getDetails() {
            const url = "http://localhost:5000/admin//fetchuser";
            const authToken=getTokenFromCookie();
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `${token}`
                    }
                });
    
                if (!response.ok) {
                    navigate("/");
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                else{
                    const data = await response.json();
                    console.log(data);
                    if(data)
                        {
                            navigate('/adminhome');
                        }
                }
               
            } catch (err) {
                console.error('Error fetching user details:', err);
                console.log(err.message);
            }
        }
        getDetails();
    }, []);

    return (
        <div>
            <AdminNavbar />
            <Outlet />
        </div>
    );
}
