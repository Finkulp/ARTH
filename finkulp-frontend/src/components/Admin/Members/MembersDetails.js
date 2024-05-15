import React, { useState } from "react";

const Member_Details = (props) => {
    return (
        <>
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4" style={{gap:'200px'}}>
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden" style={{width:'300px'}}>
                <img className="w-full"  src={props.member.image} />
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">{props.member.Role}</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                    {props.member.name}
                    </h1>
                </div>
                <button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                >
                    Want to view CV
                </button>
                <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-black mt-7">Status</p>
                <p className="text-base leading-4 mt-7 "style={{fontWeight:'600',fontSize:"22px"}}>{props.member.status}</p>
                <div style={{display:"flex", gap:'80px',marginTop:'20px'}}>
                    <div  style={{boxShadow:'1px 1px 5px blue',padding:'10px',paddingLeft:"20px",paddingRight:'20px',borderRadius:"10px"}}>
                    <p className="text-base leading-4 mt-4 text-black">Email Id</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">{props.member.email}</p>
                    </div>
                    <div  style={{boxShadow:'1px 1px 5px blue',padding:'10px',paddingLeft:"20px",paddingRight:'20px',borderRadius:"10px"}}>
                    <p className="text-base leading-4 mt-4 text-black">Phone Number</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">{props.member.phone}</p>
                    </div>
                    </div>
                    <div style={{display:'flex',marginTop:'20px',gap:"20px"}}>
                    <div  style={{boxShadow:'1px 1px 5px blue',padding:'10px',paddingLeft:"20px",paddingRight:'20px',borderRadius:"10px"}}>
                    <p className="text-base leading-4 mt-4 text-black">Address</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">{props.member.address}</p>
                    </div>
                    <div  style={{boxShadow:'1px 1px 5px blue',padding:'10px',paddingLeft:"20px",paddingRight:'20px',borderRadius:"10px"}}>
                    <p className="text-base leading-4 mt-4 text-black">Joining Date</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">{props.member.joining_date}</p>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    
                </div>
            </div>
            
        </div>
        <p className="text-base leading-4 text-gray-800" style={{marginTop:"20px",paddingBottom:'20px',textAlign:'center',fontWeight:'700',fontSize:'21px'}}>Certification</p>
        <div style={{display:'flex',justifyContent:'center'}}>
         <div class="relative overflow-x-auto shadow-md sm:rounded-lg" style={{width:'80%'}}>
         <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
             <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                     <th scope="col" class="px-6 py-3">
                        Name of Certification
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Organization
                     </th>
                     <th scope="col" class="px-6 py-3">
                         Complete Date
                     </th>
                     <th scope="col" class="px-6 py-3">
                       catogery
                     </th>
                     <th scope="col" class="px-6 py-3">
                        View Certificate
                     </th>
                 </tr>
             </thead>
             <tbody>
             {props.member.certification.map((cert, index) => (
             <tr
                 key={index}
                 className={`border-b dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}
             >
                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {cert.organization}
                 </th>
                 <td className="px-6 py-4">
                 {cert.complete}
                 </td>
                 <td className="px-6 py-4">
                 {cert.name}
                 </td>
                 <td className="px-6 py-4">
                 {cert.catogery}
                 </td>
                 <td className="px-6 py-4">
                 <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Open</a>
                 </td>
             </tr>
             ))} 
             </tbody>
         </table>
         </div>
     </div>
     </>
    );
};

export default Member_Details;
