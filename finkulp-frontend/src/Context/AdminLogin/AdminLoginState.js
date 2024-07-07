import AdminLoginContext from "./AdminLoginContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function AdminLoginState(props) {
    const Navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[result,setresult]=useState(false);
    const[key,setkey]=useState("");
    async function Login(){
        if(key==="secretData"){
            await fetch("http://localhost:5000/admin/login", {
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
                Navigate('/adminhome');
                // Set the token in a cookie
                document.cookie = `authToken=${data.authToken}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
              setresult(false);
        }
        else{
            setresult(true);
        }
       
      }
    return (
        <AdminLoginContext.Provider value={{setemail,email,password,setpassword,result,setresult,setkey,key,Login}}>
            {props.children}
        </AdminLoginContext.Provider>
    );
}

export default AdminLoginState;
