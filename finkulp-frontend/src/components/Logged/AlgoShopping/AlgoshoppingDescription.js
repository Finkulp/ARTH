import React from 'react';
import AgloshoppingTemplateStats from './AlgoshoppingTemplateStats'
import Chart from "react-apexcharts";
import { checkbox } from '@material-tailwind/react';
import { useEffect,useState } from 'react';
import DetailContext from '../../../Context/Details/DetailsContext';
import { useContext } from 'react';
export default function AlgoshoppingDescription(props) {
  const { id } = useContext(DetailContext);
  const [imageBase64, setImageBase64] = useState('');
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

  function addToCartArray() {
    if (props.checkout.length === 0) {
      props.setchekout([props.VeiwAlgo]);
      props.setsum(props.VeiwAlgo.price);
      props.setadded(true);
  
      setTimeout(() => {
        props.setadded(false);
      }, 1000);
      return;
    }
  
    const alreadyInCart = props.checkout.some(item => item.Strategist === props.VeiwAlgo.Strategist);
  
    if (!alreadyInCart) {
      props.setchekout(prevCheckout => [...prevCheckout, props.VeiwAlgo]);
      props.setsum(prevSum => prevSum + props.VeiwAlgo.price);
      props.setadded(true);
  
      setTimeout(() => {
        props.setadded(false);
      }, 1000);
    }
  }

  async function buyStrategy(algo) {
    try {
      addToCartArray();
      const authToken = getTokenFromCookie();
  
      // Create a copy of the algo object and remove the image property
      const algoWithoutImage = { ...algo };
      delete algoWithoutImage.image;
  
      await fetch("http://localhost:5000/notes/addStrategy", {
        method: "POST",
        body: JSON.stringify({
          strategy_name: algoWithoutImage.Strategist,
          user_id: id,
        }),
        headers: {
          "authorization": `${authToken}`,
          "Content-type": "application/json"
        }
      });
  
      await fetch("http://localhost:5000/notes/addStrategytouser", {
        method: "POST",
        body: JSON.stringify({
          addedStrategy: {
            ...algoWithoutImage,
            status: 'started', // Add your specific value here
            amount_Invested: '10000'  // Add your specific value here
          }
        }),
        headers: {
          "authorization": `${authToken}`,
          "Content-type": "application/json"
        }
      });
    } catch (err) {
      console.error('Error buying strategy:', err);
    }
  }
  return (
    <div>
        <div style={{ paddingTop: '20px',border:'solid',borderWidth:'1px',width:'100%',marginTop:'-20px'}}>
        <h1 style={{  fontSize: '25px',color: "blue", textAlign: 'center',paddingBottom:'20px' }}>Strategy Details</h1>
          <div style={{ display: 'flex', justifyContent: 'center',width:'100%'}}>
              <AgloshoppingTemplateStats Algos={props.VeiwAlgo}></AgloshoppingTemplateStats>
          </div>
          <div style={{ paddingLeft: '100px', paddingRight: '50px', marginTop: '-40px' }}>
            <h1 style={{ fontWeight: '400', fontSize: '30px', paddingRight: '100px', color: 'blue' }}>Description</h1>
            <div style={{ position: 'relative', overflow: 'hidden', display: 'flex',gap:'0px' }}>
              <div style={{width:'700px'}}>
            <div style={{ padding: '10px', marginLeft: '-1px' }}>
                {props.VeiwAlgo.smalloverview.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div style={{ padding: '10px', marginLeft: '-1px' }}>
                {props.VeiwAlgo.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              </div>
              <div>
              <img
                src={props.image}
                alt="Strategy"
                style={{ width: '500px', height: '500px'}}
              />
            </div>
            </div>
            <button 
            onClick={() => buyStrategy(props.VeiwAlgo)} 
            style={{ 
              padding: '10px', 
              fontFamily: 'Lato', 
              color: 'white', 
              background: "rgb(44, 90, 163)", 
              fontSize: '15px', 
              fontWeight: '350', 
              paddingLeft: '20px', 
              paddingRight: '20px', 
              borderRadius: '3px', 
              marginRight: '30px' ,
              marginTop:'50px',
              marginBottom:'50px'
            }}
          >
            Buy
          </button>
            {props.added && <div>The Strategy is Added successfully</div>}
          </div>
        </div>
      </div>
  );
}
