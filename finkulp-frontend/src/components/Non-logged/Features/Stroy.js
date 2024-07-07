import React, { useState, useEffect, useRef } from 'react';
import ai from './Images for Story/AI Leverage.png';
import aibw from './Images for Story/AI Leverage black and white.png';
import broker from './Images for Story/broker.png';
import brokerbw from './Images for Story/broker black white.png';
import flexiblesubsbw from './Images for Story/flexible subscription black and white.png';
import flexiblesubs from './Images for Story/flexible subscription.png';
import fullyautomatedbw from './Images for Story/fully automated trading black and white.png';
import fullyautomated from './Images for Story/fully automated trading.png';
import selfdevelop from './Images for Story/develop and trade.png';
import selfdevelopbw from './Images for Story/develop and trade black and white.png';
import secleting from './Images for Story/secleting multiple stratgies.png';
import slcletingbw from './Images for Story/secleting multiple stratgies black and white.png';

const Story = () => {
  const [position, setPosition] = useState(10); // Initial position in percentage
  const [passedIcons, setPassedIcons] = useState([]);
  const dragging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (dragging.current) {
        const newPosition = Math.min(Math.max(event.clientX / window.innerWidth * 100, 0), 100);
        setPosition(newPosition);
        updatePassedIcons(newPosition);
      }
    };

    const handleMouseUp = () => {
      dragging.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    dragging.current = true;
  };

  const updatePassedIcons = (newPosition) => {
    const newPassedIcons = [];
    setOnePositions.forEach((pos, index) => {
      if (newPosition >= pos) {
        newPassedIcons.push(index);
      }
    });
    setPassedIcons(newPassedIcons);
  };

  const setOnePositions = [20, 35, 50, 65, 80]; // Icon positions in percentage
  const icons = [
    { color: ai, bw: aibw },
    { color: broker, bw: brokerbw },
    { color: flexiblesubs, bw: flexiblesubsbw },
    { color: fullyautomated, bw: fullyautomatedbw },
    { color: selfdevelop, bw: selfdevelopbw },
    { color: secleting, bw: slcletingbw }
  ];
  const content = [
    "Leverage AI",
    "Investor/Trader",
    "Flexible Subscription Pricing",
    "Automated Trading ",
    "Develop & Trade Your Strategies",
    "Select Customized Strategies",
  ];
  const contentbw = [
    'Human Trading',
    "Broker Issues",
    "High Subscription",
    "Manual Trading",
    "No Selection of Strategies",
    'Limited Customization Options'
  ];

  return (
    <div>
      <div style={{textAlign:"center",fontSize:'25px',fontWeight:'600',paddingTop:'30px'}}>Advantage of Finkulp</div>
      <div style={{ position: 'relative', height: '50vh', width: '100vw' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px', position: 'relative', top: '250px' }}>
          <div
            onMouseDown={handleMouseDown}
            style={{ width: '5px', height: '300px', background: 'blue', position: 'absolute', left: `${position}%`, cursor: 'ew-resize' }}
          >
            <div style={{ width: "50px", height: '50px', borderRadius: "50%", background: 'blue', position: 'relative', top: "250px", left: "-25px", cursor: "grab", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <i className="fa-solid fa-dragon" style={{ fontSize: '25px', color: 'white' }}></i>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '100px', position: 'relative' }}>
          <div className='setone'>
            {setOnePositions.map((pos, index) => (
              <div key={index} style={{ position: 'absolute', left: `${pos}%`, textAlign: 'center', transform: 'translateX(-50%)' }}>
                <img
                  src={passedIcons.includes(index) ? icons[index].color : icons[index].bw}
                  alt={`icon-${index}`}
                  style={{
                    width: '150px',
                    height: '150px',
                    filter: 'none', // Ensure no filters are applied
                  }}
                />
                <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                  {passedIcons.includes(index) ? content[index] : contentbw[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
