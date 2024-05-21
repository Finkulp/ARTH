import React, { useState } from 'react';
import Broker from '../BrokerDroplist';
import { added_broker } from '../../../Data/AddBroker';
import BrokingDetails from './BrokingDetails';// Assuming you have a Modal component

export default function AddedBroker() {
  return (
    <div>
      <div style={{ paddingTop: "120px" }}></div>
      <div style={{ fontSize:'25px', fontWeight:"600", fontFamily:"poppins", marginLeft:"100px" }}>Broking Details</div>
      
      <div style={{ display:'flex', justifyContent:'center'}}>
        <div style={{ width:'80%' }}>
          <div>
            <div style={{ display: 'flex', alignItems:"center", height:"70px", position:"relative", top:"-10px" , borderWidth:'1px', marginTop:"10px", background:"#e6f7ff", marginTop:"50px" }}>
              <div style={{ paddingLeft:"20px", display:"flex", gap:"250px" }}>
                <span style={{ fontSize:"22px", fontWeight:'600', fontFamily:"poppins" }}>Broker</span>
                <span style={{ fontSize:"22px", fontWeight:'600', fontFamily:"poppins" }}>Trades</span>
                <span style={{ fontSize:"22px", fontWeight:'600', fontFamily:"poppins" }}>Primary</span>
                <span style={{ fontSize:"22px", fontWeight:'600', fontFamily:"poppins" }}>Login/Edit</span>
              </div>
            </div>
            <div style={{marginTop:"-100px",marginBottom:"-100px",position:"relative",left:"80%",top:"-130px",zIndex:"3"}}> <BrokingDetails></BrokingDetails></div>
            <div style={{position:"relative"}}>
            {added_broker.map((broker, index) => (
              <div key={index} style={{ display: 'flex', alignItems:"center", border:"solid", height:"100px" , borderWidth:'1px', marginTop:"10px", borderRadius:'10px' }} >
                <div style={{ boxShadow:'1px 1px 1px cyan', borderRadius:"5px", width:"40px", height:"40px", marginLeft:"20px", borderRadius:'4px' }}></div>
                <div style={{ paddingLeft:"20px" }}>
                  <span style={{ fontSize:"22px", fontWeight:'600', fontFamily:"poppins" }}>{broker.name}</span>
                  <span style={{ fontSize:"19px", color:"gray", fontWeight:"500", fontFamily:"poppins", paddingLeft:"100px" }}>{broker.text}</span>
                </div>
                <div>
                  <div style={{ position:'absolute', left:"80%", border:'solid', width:"70px", textAlign:"center", height:"30px", justifyContent:'center', borderRadius:"10px", color:"blue", borderWidth:'1px', marginTop:"-13px",zIndex:"0" }}>{broker.buttondata}</div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}
