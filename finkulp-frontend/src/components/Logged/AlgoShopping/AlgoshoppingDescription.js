import React from 'react'
import AgloshoppingTemplateStats from './AlgoshoppingTemplateStats'
export default function AlgoshoppingDescription(props) {
  return (
    <div style={{paddingTop:'200px'}}>
      <div style={{marginTop:"-200px"}}>
      <h1 style={{fontWeight:"700",fontSize:'30px',paddingLeft:"100px",paddingRight:'100px',color:"blue"}}>Strategy Details</h1>
      <AgloshoppingTemplateStats Algos={props.VeiwAlgo}></AgloshoppingTemplateStats>
      </div>
          <div style={{ paddingLeft: '100px', paddingRight: '50px', marginTop: '20px' }}>
      <h1 style={{ fontWeight: '700', fontSize: '30px', paddingRight: '100px',color:'blue' }}>Description</h1>
      <div style={{ border: '1px solid blue', position: 'relative', overflow: 'hidden' }}>
        <div style={{ borderRight: '1px solid black', padding: '10px', marginLeft: '-1px' }}>
          {props.VeiwAlgo.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
