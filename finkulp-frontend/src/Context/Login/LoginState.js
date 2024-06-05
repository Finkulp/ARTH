import LoginContext from "./LoginContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DetailContext from "../Details/DetailsContext";
import {useState} from 'react'
import { useEffect } from "react";
const LoginState=(props)=>{
    const{getDetails,setLoading }=useContext(DetailContext);
    //Handling the Login part
    const[wait,setwait]=useState();
   const Navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
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
    async function handlesubmit() {
        setwait(true);
        console.log(email);
        console.log(password);
    
        await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.authToken);
            // Set the token in a cookie
            document.cookie = `authToken=${data.authToken}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
          const authToken = getTokenFromCookie();
          if (authToken) {
          console.log('Authentication token:', authToken);
          setLoading(true);
          Navigate('/loggedhome');
        //   await getDetails();
        //     setLoading(false);
          } else {
          console.log('Authentication token not found in the cookie.');
          }
        setwait(false);
    }
    return(
    <LoginContext.Provider value={{handlesubmit,email,setemail,password,setpassword,wait}}>
        {props.children}
    </LoginContext.Provider>
    )
   
}
export default LoginState