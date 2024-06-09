import React, { useState, useEffect } from 'react';
import DetailContext from "./DetailsContext";

function DetailsState(props) {
    const[id,setid]=useState("");
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
    async function getDetails() {
        setLoading(true);
        const url = "http://localhost:5000/auth/fetchuser";
        const authToken=getTokenFromCookie();
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `${authToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
                 setUserDetails(data);
            console.log(data._id);
            setid(data._id);
        } catch (err) {
            console.error('Error fetching user details:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    // useEffect(() => {
    //  getDetails();
    // }, [])
    
    return (
        <DetailContext.Provider value={{ getDetails,setUserDetails,setUserDetails,userDetails,loading,setLoading,id }}>
            {props.children}
        </DetailContext.Provider>
    );
}

export default DetailsState;
