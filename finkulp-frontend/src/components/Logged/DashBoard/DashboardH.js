import React from 'react'

export default function DashboardH() {
  return (
    <div>
      <div style={{paddingLeft:'50px',fontWeight:'600',fontSize:'25px',paddingBottom:'20px'}}>Dashboard</div>
    <div style={{display:'flex',justifyContent:'space-between',marginLeft:'20px',marginRight:'20px',gap:'50px'}}>
      <div style={{border:'solid',width:'50vh',borderColor:'rgb(232, 232, 232)',borderWidth:'1px',paddingLeft:'20px',borderRadius:'10px'}}>
        <div style={{fontWeight:"500",fontSize:'22px',paddingLeft:'20px'}}>Finkulp Money</div>
        <div style={{color:'blue',fontSize:'20px',paddingLeft:'20px'}}>0.00</div>
        <div style={{paddingLeft:'20px'}}><input type="range" style={{width:'40vh'}}/></div>
        <div style={{display:'flex',justifyContent:'space-between',marginLeft:'20px',marginBottom:'10px',marginTop:'20px',marginRight:'20px',border:'solid',borderColor:'rgb(232, 232, 232)',borderWidth:'1px',paddingLeft:'10px',paddingRight:'10px',paddingTop:'5px',paddingBottom:'5px'}}>
          <div>1000</div>
          <button style={{border:'solid',borderWidth:'1px',paddingLeft:"5px",paddingRight:"5px"}}>Add Money</button>
        </div>
      </div>
      <div style={{border:'solid',borderColor:'rgb(232, 232, 232)',borderWidth:'1px',display:'flex',overflowX:'auto',gap:'50px',width:'800px', whiteSpace: 'nowrap',borderRadius:'10px'}}>
        <div style={{width:'250px',paddingLeft:'20px',paddingRight:'20px',padding:'5px',textAlign:'center',lineHeight:'30px',color:'gray',paddingTop:'20px'}}>
          <div style={{textAlign:'center'}}><i class="fa-solid fa-check" style={{fontSize:'25px',color:'green',textAlign:'center'}}></i></div>
          <div>Finkulp Funds Insufficient</div>
          <div style={{color:'blue'}}>Click to add</div>
        </div>
        <div style={{width:'250px',paddingLeft:'20px',paddingRight:'20px',padding:'5px',lineHeight:'30px',color:'gray',paddingTop:'20px'}}>
          <div style={{textAlign:'center'}}><i class="fa-solid fa-xmark"style={{fontSize:'25px',color:'red',textAlign:'center'}}></i></div>
          <div>Subscription Plan Inactive</div>
          <div style={{color:'blue'}}>Subscribe a Plan</div>
        </div>
        <div style={{width:'250px',paddingLeft:'20px',paddingRight:'20px',padding:'5px',lineHeight:'30px',color:'gray',paddingTop:'20px'}}>
          <div style={{textAlign:'center'}}><i class="fa-solid fa-xmark"style={{fontSize:'25px',color:'red',textAlign:'center'}} ></i></div>
          <div>Broking Account not Connected</div>
          <div style={{color:'blue'}}>Connect a Broking account</div>
        </div>
        <div style={{width:'250px',paddingLeft:'20px',paddingRight:'20px',padding:'5px',lineHeight:'30px',color:'gray',paddingTop:'20px'}}>
          <div style={{textAlign:'center'}}><i class="fa-solid fa-xmark"style={{fontSize:'25px',color:'red',textAlign:'center'}}></i></div>
          <div>Portfolio Strategy Added</div>
          <div style={{color:'blue'}}>Click to add more</div>
        </div>
        <div style={{width:'250px',paddingLeft:'20px',paddingRight:'20px',padding:'5px',lineHeight:'30px',color:'gray',paddingTop:'20px'}}>
          <div style={{textAlign:'center'}}><i class="fa-solid fa-check"style={{fontSize:'25px',color:'green',textAlign:'center'}}></i></div>
          <div>Finkulp Funds Insufficient</div>
          <div style={{color:'blue'}}>Click to add</div>
        </div>
      </div>
    </div>
    <div>
      <div style={{display:"flex",justifyContent:'space-between',marginTop:'30px'}}>
      <div style={{fontWeight:"500",fontSize:'22px',paddingLeft:'20px'}}>Algo Trading Strategy Analytics</div>
      <div style={{display:'flex',gap:'30px'}}>
        <div style={{display:"flex",border:'solid',borderColor:"rgb(232, 232, 232)",width:'200px',borderWidth:'1px',gap:'30px',borderRadius:'5px',textAlign:'center'}}>
          <div style={{paddingLeft:'10px',paddingRight:"10px",padding:'5px',textAlign:'center',paddingLeft:'20px',width:'100px'}}><i class="fa-solid fa-vials" color='blue' style={{paddingRight:'2px',textAlign:'center'}}></i>TEST</div>
          <div style={{padding:"5px",paddingRight:"10px",background:'blue',color:'white',width:'150px',textAlign:"center"}}><i class="fa-solid fa-tower-broadcast" style={{paddingRight:'20px'}}></i>LIVE</div>
        </div>
    
      <div style={{borderColor:'blue',background:'#e6f7ff',borderWidth:'1px',width:'150px',padding:'5px',paddingLeft:'10px',paddingRight:'10px',borderRadius:'5px',color:'blue',fontWeight:'600',textAlign:'center'}}>
      <i class="fa-regular fa-clock"></i> This Month <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div style={{borderColor:'blue',background:'#e6f7ff',borderWidth:'1px',width:"fit-content",padding:'5px',paddingLeft:'10px',paddingRight:'10px',borderRadius:'5px',color:'blue',fontWeight:'600',textAlign:'center'}}>
       <span>2024-07-01   - 2024-07-02<i class="fa-regular fa-calendar-days" style={{paddingLeft:"30px"}}></i></span>
      </div>
    </div>
    </div>
    <hr style={{marginTop:"20px"}}></hr>
    <div style={{display:'flex',gap:'20px'}} >
      <div>
    <div style={{  width: '600px', overflowX: "auto", border: 'solid 1px rgb(232, 232, 232)',borderRadius:'5px',marginLeft:'10px',marginTop:'20px' }}>
      <div style={{display:'flex',width:'920px',padding:"10px"}}>
    <div style={{ border: 'solid 1px blue',width: "300px" ,height:'125px',background:'#e6f7ff',padding:"20px",cursor:'pointer',borderRadius:'5px'}}>
      <div style={{fontWeight:'500',fontSize:'25px',color:'green'}}>0</div>
      <div  style={{fontWeight:'500',fontSize:'13px'}}>Trading Volume</div>
    </div>
    <div style={{ border: 'solid 1px rgb(232, 232, 232)', width: "300px" ,height:'125px',padding:"20px",marginLeft:'10px',coursor:"pointer",borderRadius:'5px'}}>
      <div style={{fontWeight:'500',fontSize:'25px'}}>0</div>
      <div  style={{fontWeight:'500',fontSize:'13px'}}>Trading Volume</div>
    </div>
    <div style={{ border: 'solid 1px rgb(232, 232, 232)', width: '300px' ,height:'125px',padding:'20px',marginLeft:'10px',coursor:'pointer',borderRadius:'5px'}}>
      <div  style={{fontWeight:'500',fontSize:'25px',color:'green'}}>0</div>
      <div  style={{fontWeight:'500',fontSize:'13px',color:'green'}}>Trading Volume</div>
    </div>
  </div>
  </div>
  <div style={{width:'600px',height:'300px',display:'flex',justifyContent:"center",alignItems:'center',border:'solid',marginLeft:'10px',borderWidth:'1px',borderColor:'rgb(232, 232, 232)'}}>
    <div>
      <div style={{textAlign:'center'}}><i class="fa-solid fa-box-open" style={{fontSize:'30px',color:'gray'}}></i></div>
    <div  style={{textAlign:'center'}}>No Profit and Loss data found</div>
    <div style={{textAlign:'center'}}>Rum some strategies to visualize data here</div>
    <div  style={{textAlign:'center'}}><a
   class="bg-blue dark:bg-dark-2  dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-rgb(232, 232, 232)-3 disabled:border-rgb(232, 232, 232)-3 disabled:text-dark-5"
   >Explore Marketplace</a></div></div>
    </div>
    </div>
    <div style={{border:'solid',borderColor:"rgb(232, 232, 232)",borderWidth:'1px',width:'600px',marginTop:'20px',borderRadius:'5px'}}>
      <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',padding:'10px'}}>
      <div style={{fontSize:'20px',fontWeight:'700'}}>Profit & Loss & Trading Volume</div>
      <div style={{display:'flex',gap:'20px'}}>
        <div><i class="fa-solid fa-rotate-right"></i></div>
        <div><i class="fa-solid fa-gear"></i></div>
        <div><i class="fa-solid fa-up-right-and-down-left-from-center"></i></div>
      </div>
      </div>
      <div style={{background:"#6CB4EE" ,width:'100%'}}>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:'19px',fontWeight:'500',paddingTop:'20px',paddingBottom:'20px',marginTop:'10px',padding:'20px'}}>
        <div>Strategy Name</div>
        <div>Total Txns.</div>
        <div>Volume(rupee)</div>
        <div>P&L(rupee)</div>
      </div>
      </div>
      <div style={{width:'600px',height:'300px',display:'flex',justifyContent:"center",alignItems:'center'}}>
        <div style={{lineHeight:'30px'}}>
          <div style={{textAlign:'center'}}><i class="fa-solid fa-box-open" style={{fontSize:'30px',color:'gray'}}></i></div>
        <div  style={{textAlign:'center'}}>No Profit and Loss data found</div>
        <div style={{textAlign:'center'}}>Rum some strategies to visualize data here</div>
        <div  style={{textAlign:'center'}}><a
      class="bg-blue dark:bg-dark-2  dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-rgb(232, 232, 232)-3 disabled:border-rgb(232, 232, 232)-3 disabled:text-dark-5"
      >Explore Marketplace</a></div>
      </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}
