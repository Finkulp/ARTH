import React, { useState } from 'react';

const Story = () => {
  const [position, setPosition] = useState(50); // Initial position at 50vh
  const [passedIcons, setPassedIcons] = useState([]);

  const moveLeft = () => {
    setPosition((prevPosition) => {
      const newPosition = Math.max(prevPosition - 10, 40); // Decrease position by 10vh but not less than 40vh
      updatePassedIcons(newPosition);
      return newPosition;
    });
  };

  const moveRight = () => {
    setPosition((prevPosition) => {
      const newPosition = Math.min(prevPosition + 10, 170); // Increase position by 10vh but not more than 170vh
      updatePassedIcons(newPosition);
      return newPosition;
    });
  };

  const updatePassedIcons = (newPosition) => {
    const newPassedIcons = [];
    
    // Check which icons are passed based on newPosition
    setOnePositions.forEach((pos, index) => {
      if (newPosition >= pos) {
        newPassedIcons.push(index);
      }
    });
    
    setPassedIcons(newPassedIcons);
  };

  const setOnePositions = [45, 65, 85, 105, 125, 145]; // Icon positions in vh
  
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' ,position:"relative",top:"250px"}}>
        <button
          onClick={moveLeft}
          style={{ border: 'solid', margin: '0 20px', position: 'absolute', left: '10vh' }}
          className='bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'
        >
          Left
        </button>
        <div style={{ width: '5px', height: '300px', background: 'blue', position: 'absolute', left: `${position}vh` }}></div>
        <button
          onClick={moveRight}
          style={{ border: 'solid', margin: '0 20px', position: 'absolute', left: '180vh' }}
          className='bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'
        >
          Right
        </button>
      </div>
      <div style={{ marginTop: '100px', position: 'relative' }}>
        <div className='setone'>
          {setOnePositions.map((pos, index) => (
            <div key={index}>
              <i
                className={`fa-solid fa-city ${passedIcons.includes(index) ? 'text-blue' : ''}`}
                style={{
                  position: 'absolute',
                  left: `${pos}vh`,
                  top: index % 2 === 0 ? '20vh' : '30vh',
                  fontSize: '40px',
                  color: passedIcons.includes(index) ? 'blue' : 'black'
                }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
