import React from 'react';
import { Bar } from 'react-chartjs-2';

const BigBox = () => {
    
    return (
        <div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            height: '300px',
            padding: '20px',
            boxSizing: 'border-box',
            marginLeft:'3%',
            paddingLeft:"0px"
        }}>
            <div style={{flex: 1,display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',padding: '20px',
border: '1px solid #ccc',marginBottom: '20px'}}>
                <div style={{width: '100%'}}>
                    <h2>Container</h2>
                    <p>Some content goes here</p>
                </div>
            </div>
            <div style={{flex: 1,display: 'flex',justifyContent: 'center',alignItems: 'center',padding: '20px',border: '1px solid #ccc',
 marginBottom: '20px'}}>
                <div style={{width: '100%', height: '300px'}}>
                    //Bar chart
                </div>
            </div>
        </div>    
            <div style={{display: 'flex',justifyContent: 'space-around',padding: '20px'}}>
                <div style={{padding: '10px'}}>Stat 1: 100</div>
                <div style={{padding: '10px'}}>Stat 2: 200</div>
                <div style={{padding: '10px'}}>Stat 3: 300</div>
            </div>
        
    </div>    
    );
};

export default BigBox;
