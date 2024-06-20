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
  const [position, setPosition] = useState(40); // Initial position in percentage
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

  const setOnePositions = [10, 30, 50, 70, 90]; // Icon positions in percentage
  const icons = [
    { color: ai, bw: aibw },
    { color: broker, bw: brokerbw },
    { color: flexiblesubs, bw: flexiblesubsbw },
    { color: fullyautomated, bw: fullyautomatedbw },
    { color: selfdevelop, bw: selfdevelopbw },
    { color: secleting, bw: slcletingbw }
  ];

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px', position: 'relative', top: '250px' }}>
        <button
          style={{ border: 'solid', margin: '0 20px', position: 'absolute', left: '10vh' }}
          className='bg-dark border-dark border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:disabled'
        >
          Left
        </button>
        <div
          onMouseDown={handleMouseDown}
          style={{ width: '5px', height: '550px', background: 'blue', position: 'absolute', left: `${position}%`, cursor: 'ew-resize' }}
        ></div>
        <button
          style={{ border: 'solid', margin: '0 20px', position: 'absolute', left: '90vh' }}
          className='bg-dark border-dark border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:disabled'
        >
          Right
        </button>
      </div>
      <div style={{ marginTop: '100px', position: 'relative' }}>
        <div className='setone'>
          {setOnePositions.map((pos, index) => (
            <div key={index}>
              <img
                src={passedIcons.includes(index) ? icons[index].color : icons[index].bw}
                alt={`icon-${index}`}
                style={{
                  position: 'absolute',
                  left: `${pos}%`,
                  top: index % 2 === 0 ? '10vh' : '40vh',
                  width: '150px',
                  height: '150px'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
