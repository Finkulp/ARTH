import React, { useState } from 'react';
import DetailContext from "./DetailsContext";

function DetailsState(props) {
  const [brokerDetails, setBrokerDetails] = useState(null);
  const [id, setId] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTokenFromCookie = () => {
    const cookies = document.cookie.split(';');
    let authToken = null;
    cookies.forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      if (name === 'authToken') {
        authToken = value;
      }
    });
    return authToken;
  };

  const getDetails = async () => {
    setLoading(true);
    const url = "http://localhost:5000/auth/fetchuser";
    const authToken = getTokenFromCookie();
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
      setId(data._id);
    } catch (err) {
      console.error('Error fetching user details:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getAliceBlueBrokerDetails = async () => {
    const url = "http://localhost:5000/notes/getAliceBlueBroker";
    const authToken = getTokenFromCookie();

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
      setBrokerDetails(data);
      console.log('Broker Details:', brokerDetails);
    } catch (err) {
      console.error('Error fetching broker details:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DetailContext.Provider value={{ getDetails, setUserDetails, userDetails, loading, setLoading, id, getAliceBlueBrokerDetails, brokerDetails }}>
      {props.children}
    </DetailContext.Provider>
  );
}

export default DetailsState;
