import React, { useState, useEffect, useRef } from 'react';

const Reports = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        console.log('Component position:', rect); // Debugging log
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          console.log('Component is in view'); // Debugging log
          setActiveSlide(1);
          setProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 50);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setProgress(0);
      setActiveSlide((prevSlide) => (prevSlide < slidesData.length ? prevSlide + 1 : 1));
    }
  }, [progress]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    setProgress(0);
  };

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#fff', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ margin: '0 auto 25px', display: 'inline-block' }}>
            <img src="/img/tweak-icon.svg" alt="Tweak Icon" />
          </div>
          <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Comprehensive Reports</h2>
          <p style={{ maxWidth: '770px', margin: '0 auto 25px', fontSize: '1.2em' }}>
            Finkulp gives you the freedom to not just choose among our pre-defined strategies, but also customize them according to your personal preferences and make countless new strategies that can be used by you and your fellows.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap:'30px' }}>
          <div style={{ flex: '1' }}>
            <TweakDots activeSlide={activeSlide} handleSlideChange={handleSlideChange} progress={progress} />
          </div>
          <div style={{ flex: '2', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <button style={arrowStyle} onClick={() => handleSlideChange(activeSlide - 1 > 0 ? activeSlide - 1 : slidesData.length)}>❮</button>
                <button style={arrowStyle} onClick={() => handleSlideChange(activeSlide + 1 <= slidesData.length ? activeSlide + 1 : 1)}>❯</button>
              </div>
              <div>
                {slidesData.map((slide, index) => (
                  <SingleTweakSlide
                    key={index}
                    imgSrc={slide.imgSrc}
                    text={slide.text}
                    isActive={activeSlide === index + 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TweakDots = ({ activeSlide, handleSlideChange, progress }) => {
  return (
    <div style={{display:'flex', flexDirection:'row', gap:'30px'}}>
      {slidesData.map((slide, index) => (
        <TweakButton
          key={index}
          imgSrc={slide.iconSrc}
          heading={slide.heading}
          text={slide.buttonText}
          isActive={activeSlide === index + 1}
          onClick={() => handleSlideChange(index + 1)}
          progress={progress}
        />
      ))}
    </div>
  );
};

const TweakButton = ({ imgSrc, heading, text, isActive, onClick, progress }) => {
  const activeButtonStyle = isActive
    ? { background: `#d3d3d3` ,border:'3px solid #00f' }

    : { backgroundColor: '#fff' };

  return (
    <button onClick={onClick} style={{ ...buttonStyle, ...activeButtonStyle, borderRadius:'10px', height:'200px'}}>
      <div style={{ marginBottom: '10px' }}>
        <img src={imgSrc} alt="" />
      </div>
      <div>
        <h3 style={{ fontSize: '1.5em' }}>{heading}</h3>
        <p>{text}</p>
      </div>
    </button>
  );
};

const SingleTweakSlide = ({ imgSrc, text, isActive }) => {
  return (
    <div style={{ display: isActive ? 'flex' : 'none', textAlign: 'center' }}>
      <img src={imgSrc} alt="" style={{ width: '100%', marginBottom: '20px' }} />
      <p>{text}</p>

    </div>
  );
};

const buttonStyle = {
  width: '100%',
  padding: '20px',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  marginBottom: '10px',
  position: 'relative',
  transition: 'background 0.5s linear'
};

const arrowStyle = {
  backgroundColor: '#fff',
  border: 'none',
  fontSize: '2em',
  cursor: 'pointer'
};

const slidesData = [
  {
    iconSrc: '/img/strategy-tweak-icon.svg',
    heading: 'Strategy tweaks',
    buttonText: 'We give you the freedom to change the strategy parameters which define the functionality of the strategy and create your own unique way of building a trading algo that centers on your specific needs.',
    imgSrc: '/img/strategy-tweaks-new.png',
    text: 'We give you the freedom to change the strategy parameters which define the functionality of the strategy and create your own unique way of building a trading algo that centers on your specific needs.'
  },
  {
    iconSrc: '/img/instrument-modification-icon.svg',
    heading: 'Instrument Modification',
    buttonText: 'As a user, you can easily change the instrument that is traded on our platform with a simple click.',
    imgSrc: '/img/instrument-modification-new.png',
    text: 'As a user, you can easily change the instrument that is traded on our platform with a simple click.'
  },
  {
    iconSrc: '/img/rms-icon.svg',
    heading: 'Strategy Settings',
    buttonText: 'A comprehensive in-built Risk Management System where you can set all the risk factors, from Credit Exposure to Target to Stoploss, giving you the freedom to define risk settings as per your comfort.',
    imgSrc: '/img/rms-new.png',
    text: 'A comprehensive in-built Risk Management System where you can set all the risk factors, from Credit Exposure to Target to Stoploss, giving you the freedom to define risk settings as per your comfort.'
  },
  {
    iconSrc: '/img/miscellaneous-icon.svg',
    heading: 'Order Settings',
    buttonText: 'Be it allowing multiple orders from the same script or defining the maximum orders you want to include in your strategy; a host of customizable options which you can set to the levels you like.',
    imgSrc: '/img/miscellaneous-new.png',
    text: 'Be it allowing multiple orders from the same script or defining the maximum orders you want to include in your strategy; a host of customizable options which you can set to the levels you like.'
  }
];

export default Reports;
