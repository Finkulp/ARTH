import SignUpContext from "./SignUpContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DetailContext from "../Details/DetailsContext";
const SignUpState=(props)=>{
    const{getDetails}=useContext(DetailContext);
    const Navigate=useNavigate();
    const[password,setpassword]=useState("");
    const[name,setname]=useState("");
    const[number,setnumber]=useState("");
    const[email,setemail]=useState("");
    const[wait,setwait]=useState(false);
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
      async function signup() {
        setwait(true);
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(number);
    
        await fetch("http://localhost:5000/auth/", {
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
            console.log(data.authToken);
            Navigate('/loggedhome');
            // Set the token in a cookie
            document.cookie = `authToken=${data.authToken}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
          const authToken = getTokenFromCookie();
          if (authToken) {
          console.log('Authentication token:', authToken);
          getDetails();
          } else {
          console.log('Authentication token not found in the cookie.');
          }
        setwait(false);
    }
    return(
        <SignUpContext.Provider value={{signup,name,setname,password,setpassword,number,setnumber,email,setemail,wait,setwait}}>
        {props.children}
   </SignUpContext.Provider>
    )
}
export default SignUpState;