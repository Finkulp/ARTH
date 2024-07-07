import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreateNewAlgo() {
    const [wait, setwait] = useState(false);
    const[name,setname]=useState(false);
    const [imageBase64, setImageBase64] = useState('');
    const [tradingStrategy, setTradingStrategy] = useState({
        Strategist: '',
        NSE: '',
        Category: '',
        Recommended_Duration: '',
        Fee: {
            Subscription: '',
            Pay: '',
        },
        smalloverview: '',
        description: '',
    });
    const [file, setfile] = useState(null);

    function handleChange(event, field) {
        const { name, value } = event.target;

        if (name.includes('.')) {
            const [parentField, nestedField] = name.split('.');
            setTradingStrategy({
                ...tradingStrategy,
                [parentField]: {
                    ...tradingStrategy[parentField],
                    [nestedField]: value,
                },
            });
        } else {
            setTradingStrategy({
                ...tradingStrategy,
                [field]: value,
            });
        }
    }

    function handleFileChange(event) {
        setfile(event.target.files[0]);
    }

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

    async function AddtheStrategy() {
        setwait(true);
        const checkurl = "http://localhost:5000/admin/checkStrategyName";
        const authToken = getTokenFromCookie();
    
        try {
            const response = await fetch(checkurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `${authToken}`
                },
                body: JSON.stringify({
                    strategy_name: tradingStrategy.Strategist
                }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            setname(data.exists);
    
            if (data.exists) {
                setname(true);
                return;
            } else {
                setname(false);
            }
        } catch (err) {
            console.error('Error fetching user details:', err);
            setwait(false); // Ensure wait is reset in case of error
            return;
        }


        const url = "http://localhost:5000/admin/addStrategyInfo";

        const formData = new FormData();
        formData.append('strategy_name', tradingStrategy.Strategist);
        formData.append('strategy_description', JSON.stringify(tradingStrategy));
        formData.append('image',imageBase64);
        if (file) {
            formData.append('strategyFile', file);
        }

        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData,
                headers: {
                    "authorization": `${authToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

        } catch (err) {
            console.error('Error fetching user details:', err);
        } finally {
            setwait(false);
        }
    }


    const handleimagechange = (e) => {
      const file = e.target.files[0];
      if (file) {
        convertToBase64(file);
      }
    };
  
    const convertToBase64 = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageBase64(reader.result);
      };
      reader.onerror = (error) => {
        console.error('Error converting file to base64:', error);
      };
    };
  
    return (
        <div>
            <div className="mx-auto" style={{border:'solid',width:'800px',padding:"20px",borderWidth:'1px',borderColor:'blue',borderRadius:'10px',marginTop:"50px"}}>
                <div style={{display:'flex',justifyContent:"center"}}>
                    <div style={{fontFamily:"poppins",color:'green'}}>Add a New Algo</div>
                </div>
                {name&&<div>The Strategy with the given name alredy exist in the data base</div>}
                <div className="mb-5">
                    <label htmlFor="strategist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Strategist</label>
                    <input 
                        id="strategist" 
                        name="Strategist" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Strategist} 
                        onChange={(e) => handleChange(e, 'Strategist')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NSE</label>
                    <input 
                        id="nse" 
                        name="NSE" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.NSE} 
                        onChange={(e) => handleChange(e, 'NSE')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <input 
                        id="Category" 
                        name="Category" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Category} 
                        onChange={(e) => handleChange(e, 'Category')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Recommended_Duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recommended Duration</label>
                    <input 
                        id="Recommended_Duration" 
                        name="Recommended_Duration" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Recommended_Duration} 
                        onChange={(e) => handleChange(e, 'Recommended_Duration')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="FeeSubscription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee Subscription</label>
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
                <div className="mb-5">
                    <label htmlFor="FeePay" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee Pay As you Go</label>
                    <input 
                        id="Pay" 
                        name="Fee.Pay" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Fee.Pay} 
                        onChange={(e) => handleChange(e, 'Fee.Pay')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="smalloverview" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small Overview</label>
                    <textarea
                        style={{height:"200px"}}
                        id="smalloverview" 
                        name="smalloverview" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.smalloverview} 
                        onChange={(e) => handleChange(e, 'smalloverview')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brief description</label>
                    <textarea
                        style={{height:"700px"}} 
                        id="description" 
                        name="description" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.description} 
                        onChange={(e) => handleChange(e, 'description')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="strategyFile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Python file</label>
                    <input 
                        id="strategyFile" 
                        name="strategyFile" 
                        type="file" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        onChange={handleFileChange} 
                    />
                </div>
                <div>
                    <input type="file" accept="image/*" onChange={handleimagechange} />
                    {imageBase64 && (
                        <div>
                        <img src={imageBase64} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />
                        </div>
                    )}
                    </div>
                <button onClick={AddtheStrategy} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            {wait && <div style={{fontSize:'50px'}}>Please Wait</div>}
        </div>
    );
}
