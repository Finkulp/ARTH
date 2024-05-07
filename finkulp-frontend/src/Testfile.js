import React from 'react';

const Testfile = () => {
  return (
    <div style={{ border: 'solid', borderWidth: '1px', borderColor: 'blue', padding: '10px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', height: '200px', border: 'solid' }}></div>
        <div>
          <p style={{ fontSize: '18px', fontWeight: 200, color: 'gray', paddingLeft: '50px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Created:9 months ago | live deployment : 146</p>
          <div style={{ fontSize: '20px', fontWeight: 900, color: 'black', paddingLeft: '50px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>BankNifty Positional Weekly</div>
          <div style={{ paddingLeft: '50px', fontSize: '18px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>by:<span style={{ color: 'blue', paddingLeft: '20px', fontSize: '18px' }}>Market Start</span> </div>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', paddingLeft: '50px' }}>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                <div style={{ color: 'blue', backgroundColor: 'rgb(200, 205, 223)', borderRadius: '50px', textAlign: 'center', width: '80px', height: '30px' }}>NFO</div>
                <div style={{ color: 'blue', backgroundColor: 'rgb(200, 205, 223)', borderRadius: '50px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px', height: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>NonDirectional</div>
                <div style={{ color: 'blue', backgroundColor: 'rgb(200, 205, 223)', borderRadius: '50px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px', height: '30px' }}>Volatility</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '30px', marginTop: '-50px' }}>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Total/Costs</div>
                <div style={{ fontSize: '20px' }}>146(2.9k)</div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Drawdown Min</div>
                <div style={{ fontSize: '20px' }}>11.1K(6%)</div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Drawdown Min</div>
                <div style={{ fontSize: '20px' }}>11.1K(6%)</div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Drawdown Min</div>
                <div style={{ fontSize: '20px' }}>11.1K(6%)</div>
              </div>
            </div>
            <div style={{ marginTop: '-60px', paddingLeft: '20px' }}>
              <div><button style={{ fontSize: '20px', fontWeight: 700, color: 'blue', backgroundColor: 'rgb(178, 180, 240)', border: 'none', textDecoration: 'none', padding: '10px', borderRadius: '10px' }}>Subscribe</button></div>
              <div><button style={{ fontSize: '20px', fontWeight: 700, color: 'blue', backgroundColor: 'rgb(178, 180, 240)', border: 'none', textDecoration: 'none', padding: '10px', borderRadius: '10px', marginTop: '20px' }}>Know More</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testfile;
