import React from 'react'
import AgloshoppingTemplateStats from './AlgoshoppingTemplateStats'
import Chart from "react-apexcharts";
import { Button } from '@mui/material';
export default function AlgoshoppingDescription(props) {
  function addToCartArray() {
    // Use the state updater function to update the checkout array
    props.setchekout(prevCheckout => [...prevCheckout, props.VeiwAlgo]);
    props.setsum(props.sum+props.VeiwAlgo.price);
  }
  
  
  return (
    <div>
    <div style={{display:'flex',justifyContent:"center"}}>
    <div style={{paddingTop:'200px',border:"solid",borderColor:"blue",borderWidth:'1px'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{marginTop:"-200px"}}>
      <h1 style={{fontWeight:"500",fontSize:'25px',paddingLeft:"100px",paddingRight:'100px',color:"blue",textAlign:'center'}}>Strategy Details</h1>
      <AgloshoppingTemplateStats Algos={props.VeiwAlgo}></AgloshoppingTemplateStats>
      </div>
      </div>
          <div style={{ paddingLeft: '100px', paddingRight: '50px', marginTop: '-40px' }}>
      <h1 style={{ fontWeight: '400', fontSize: '30px', paddingRight: '100px',color:'blue' }}>Description</h1>
      <div style={{  position: 'relative', overflow: 'hidden',display:'flex' }}>
        <div style={{  padding: '10px', marginLeft: '-1px' }}>
          {props.VeiwAlgo.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div>
           {props.VeiwAlgo.graph && props.VeiwAlgo.graph.year && props.VeiwAlgo.graph.profit&&<Chart
              type="area"
              height={400}
              width="600"
              options={{
                chart: {
                  id: "basic-bar1"
                },
                title:{
                  text:"Revenue per Year by the Strategy",
                  style:{fontSize:20}
                },
                xaxis: {
                  name:'Year',
                  categories: props.VeiwAlgo.graph.year
                }
              }}
              series={[
                {
                  name: "Profit",
                  data:props.VeiwAlgo.graph.profit
                }
              ]}
              
            />}
        </div>
      </div>
    </div>
  </div>
  </div>
  <Button onClick={addToCartArray}>Add To Cart</Button>
  </div>
  )
}
