import React from 'react'
import MyStrategyTemplateStats from './MyStrategyTemplateStats'
export default function MyStrategyDescription(props) {
  return (
    <div style={{display:'flex',justifyContent:"center"}}>
    <div style={{paddingTop:'200px',border:"solid",borderColor:"blue",borderWidth:'1px'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{marginTop:"-200px"}}>
      <h1 style={{fontWeight:"500",fontSize:'25px',paddingLeft:"100px",paddingRight:'100px',color:"blue",textAlign:'center'}}>Strategy Details</h1>
      <MyStrategyTemplateStats Algos={props.viewMyAlog}></MyStrategyTemplateStats>
      </div>
      </div>
          <div style={{ paddingLeft: '100px', paddingRight: '50px', marginTop: '-40px' }}>
      <h1 style={{ fontWeight: '400', fontSize: '30px', paddingRight: '100px',color:'blue' }}>Description</h1>
      <div style={{  position: 'relative', overflow: 'hidden' }}>
        <div style={{  padding: '10px', marginLeft: '-1px' }}>
          {props.viewMyAlog.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
