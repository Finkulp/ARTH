import React from 'react'
import { useState } from 'react'
export default function TradingStrategyfrom(props) {

    const [tradingStrategy, setTradingStrategy] = useState({
        Strategist: props.tradingStrategy.Strategist,
        NSE: props.tradingStrategy.NSE,
        Category: props.tradingStrategy.Category,
        Recommended_Duration: props.tradingStrategy.Recommended_Duration,
        Subscription:props.tradingStrategy.Fee.Subscription,
        Pay:props.tradingStrategy.Fee.Pay_as_you_go,
        smalloverview: props.tradingStrategy.smalloverview,
        description: props.tradingStrategy.description,
    });
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

    return (
        <div>
            <div className=" mx-auto"style={{border:'solid',width:'800px',padding:"20px",borderWidth:'1px',borderColor:'blue',borderRadius:'10px',marginTop:"50px"}}>
                <div style={{display:'flex',justifyContent:"center"}}>
                <div style={{fontFamily:"poppins",color:'green'}}>Update Details</div>
                </div>
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
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
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
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recommended Duration</label>
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
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee Subscription</label>
                    <input 
                        id="Subscription" 
                        name="Subscription" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Subscription} 
                        onChange={(e) => handleChange(e, 'Subscription')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee Pay As you Go</label>
                    <input 
                        id="Pay" 
                        name="Pay" 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        required 
                        value={tradingStrategy.Pay} 
                        onChange={(e) => handleChange(e, 'Pay')} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small Overview</label>
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
                    <label htmlFor="nse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brief description</label>
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
                <button onClick={()=>{console.log(tradingStrategy)}} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </div>
    )
}

