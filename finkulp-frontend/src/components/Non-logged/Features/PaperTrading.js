import React from 'react'
import BackTesting from './BackTesting'
import cyan from '../../../Animations/cyan5.jpg'
export default function PaperTrading() {
  return (
    <>
    <div style={{paddingTop:'150px',background:`url(${cyan})`,backgroundSize:'100%',paddingBottom:'50px'}}>
      <div class="d-flex flex-column" style={{display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
      <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <i class="fa-regular fa-note-sticky" style={{fontSize:'50px',color:'blue'}}></i>
        </button>
        </div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"center",fontWeight:"600"}}>Paper Trading</div>
        <div style={{display:'flex',justifyContent:"center"}}>
            <div style={{width:'50%',fontSize:'18',fontFamily:'poppins',color:'green',marginTop:'30px',textAlign:'center'}}>
            Realistic simulations of actual trading environments allow investors to practice purchasing and selling securities using virtual currency before entering the real market.</div>
        </div>
        <div style={{display:'flex',marginTop:'100px'}}>
            <div>
                <div style={{display:'flex',justifyContent:'center'}}>
            <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <i class="fa-solid fa-book-open" style={{fontSize:'50px',color:'blue'}}></i>
        </button>
        </div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"center",fontWeight:"600"}}>Courses</div>
                <div style={{display:'flex',justifyContent:"center"}}>
                <div style={{width:'50%',fontSize:'18',fontFamily:'poppins',color:'green',marginTop:'30px',textAlign:'center'}}>Explore our comprehensive courses to master the art of trading. Enhance your investment skills and achieve your financial goals with expert guidance.</div>
                </div>
            </div>
            <div>
                <div style={{display:'flex',justifyContent:'center'}}>
            <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <i class="fa-solid fa-hand-holding-dollar" style={{fontSize:'50px',color:'blue'}}></i>
        </button>
        </div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"center",fontWeight:"600"}}>Easy Payment</div>
                <div style={{display:'flex',justifyContent:"center"}}>
                <div style={{width:'50%',fontSize:'18',fontFamily:'poppins',color:'green',marginTop:'30px',textAlign:'center'}}>You can choose between a full subscription package or a pay-as-you-go option (billed per minute) to use our servers for precise Paper Trading simulations.</div>
                </div>
            </div>
        </div>
    </div>
    <BackTesting></BackTesting>
    </>
  )
}
