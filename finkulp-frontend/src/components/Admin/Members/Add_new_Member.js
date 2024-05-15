import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreateNewAlgo() {
      const [memberDetails, setMemberDetails] = useState({
        name: "",
        role: "",
        image: "",
        email: "",
        phone: "",
        address: "",
        status: "",
        joiningDate: '',
        certification: [
          {
            organization: '',
            complete: '',
            name: '',
            category: ''
          },
        ]
      })
    
    return (
        <div>
            <div className="mx-auto" style={{border:'solid',width:'800px',padding:"20px",borderWidth:'1px',borderColor:'blue',borderRadius:'10px',marginTop:"50px"}}>
                <div style={{display:'flex',justifyContent:"center"}}>
                    <div style={{fontFamily:"poppins",color:'green'}}>Add a new Member</div>
                </div>
                <div className="mb-5">
                    <label htmlFor="strategist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Strategist} 
                        onChange={(e) => handleChange(e, 'name')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="strategist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input 
                        id="phone" 
                        name="phone" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Strategist} 
                        onChange={(e) => handleChange(e, 'phone')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="strategist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <input 
                        id="address" 
                        name="address" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Strategist} 
                        onChange={(e) => handleChange(e, 'address')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="strategist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Joining Date</label>
                    <input 
                        id="joining_date" 
                        name="joining_date" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Strategist} 
                        onChange={(e) => handleChange(e, 'joining_date')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                    <input 
                        id="role" 
                        name="role" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.NSE} 
                        onChange={(e) => handleChange(e, 'role')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Category} 
                        onChange={(e) => handleChange(e, 'email')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload the Image</label>
                    <input 
                        id="image" 
                        name="image" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Recommended_Duration} 
                        onChange={(e) => handleChange(e, 'image')} 
                    />
                </div>
                <div>certification</div>
                <div className="mb-5">
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee Subscription</label>
                    <input 
                        id="Subscription" 
                        name="Fee.Subscription" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Fee.Subscription} 
                        onChange={(e) => handleChange(e, 'Fee.Subscription')} 
                    />
                </div>
               <Link to='/adminhome/updatingAlgo'> <button onClick={()=>{console.log(tradingStrategy)}} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></Link>
            </div>
        </div>
    );
}
