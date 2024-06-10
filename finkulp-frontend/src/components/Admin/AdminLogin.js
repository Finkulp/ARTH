import React from "react";
import AdminLoginContext from "../../Context/AdminLogin/AdminLoginContext";
import { useState } from "react";
import { useContext } from "react";
const AdminLogin = () => {
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[number,setnumber]=useState("");
  const[password,setpassword]=useState("");
  const[key,setkey]=useState("");
  const[result,setresult]=useState(false);
  // const{x}=useContext(AdminLoginContext);

  function newname(event){
    setname(event.target.value);
    console.log(name);
  }
  function newemail(event){
    setemail(event.target.value);
    console.log(email);
  }
  function newnumber(event){
    setnumber(event.target.value);
    console.log(number);

  }
  function newpassword(event){
    setpassword(event.target.value);
    console.log(password);

  }
  function changekeyvalue(event){
    setkey(event.target.value);
    console.log(key)
  }
  return (
    <>
    <div className=" items-center flex justify-center px-5 lg:px-0">
        <div style={{boxShadow:'1px 1px 10px black',marginBottom:'20px',borderRadius:'15px',height:'600px',width:'500px',marginTop:'50px'}}>
          <div className=" flex flex-col items-center">
          <div style={{textAlign:'center',fontFamily:'poppins',color:"	#4285F4",fontSize:'30px',fontWeight:'600',marginTop:'100px'}}>Admin SignUP</div>
            <div className="text-center">
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name"
                  onChange={newname}
                  value={name}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  onChange={newemail}
                  value={email}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  placeholder="Enter your phone"
                  onChange={newnumber}
                  value={number}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  onChange={newpassword}
                  value={password}
                 
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Enter the Secret key"
                  onChange={changekeyvalue}
                  value={key}
                 
                />
                <button className="mt-5 tracking-wide font-semibold  text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" style={{background:"	#4285F4"}} >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                {result&&<div>contect Admin for the key information</div>
                }

                {/* <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href="">
                    <span className="text-blue-900 font-semibold">Sign in</span>
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminLogin;

