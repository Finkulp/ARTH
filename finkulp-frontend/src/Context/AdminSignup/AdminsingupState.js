import Adminsignupcontext from "./Adminsignupcontext";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminSignupstate(props){
    const Navigate=useNavigate();
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[number,setnumber]=useState("");
    const[password,setpassword]=useState("");
    const[key,setkey]=useState("");
    const[result,setresult]=useState(false);
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
       async function SignUP(){
        if(key==="secretData"){
            await fetch("http://localhost:5000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    mobile:number
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
                Navigate('/adminhome');
                // Set the token in a cookie
                document.cookie = `authToken=${data.authToken}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
              const authToken = getTokenFromCookie();
              if (authToken) {
             
            //   getDetails();
              } else {
              console.log('Authentication token not found in the cookie.');
              }
              setresult(false);
        }
        else{
            setresult(true);
        }
       
      }
    return(
        <Adminsignupcontext.Provider value={{name,email,password,number,setemail,setpassword,setname,setnumber,SignUP,key,setkey,result,setresult}}>
           {props.children} 
        </Adminsignupcontext.Provider>
    );
}
export default AdminSignupstate;