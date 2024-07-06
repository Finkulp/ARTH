import React, { useState, useEffect, useRef } from 'react';
import Reports_icon from '../../../Images/Reports.png';
import dashboard from '../../../Images/dashboard.png';
import history from '../../../Images/history.png';
import chain from '../../../Images/Option_chain.png';
import orders from '../../../Images/orders.png';

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
    <section ref={sectionRef} style={{ backgroundColor: '#eff', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ margin: '0 auto', display: 'inline-block' }}>
            <img src={Reports_icon} style={{height: '50px' }}></img>
          </div>
          <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Comprehensive Reports</h2>
          <p style={{ maxWidth: '770px', margin: '0 auto 25px', fontSize: '1.2em' }}>
            Finkulp gives you detailed performance reports of market, instruments and strategies.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap:'30px' }}>
          <div style={{ flex: '1' }}>
            <ReportsDots activeSlide={activeSlide} handleSlideChange={handleSlideChange} progress={progress} />
          </div>
          <div style={{ flex: '2', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <button style={arrowStyle} onClick={() => handleSlideChange(activeSlide - 1 > 0 ? activeSlide - 1 : slidesData.length)}>❮</button>
                <button style={arrowStyle} onClick={() => handleSlideChange(activeSlide + 1 <= slidesData.length ? activeSlide + 1 : 1)}>❯</button>
              </div>
              <div>
                {slidesData.map((slide, index) => (
                  <SingleReportsSlide
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

const ReportsDots = ({ activeSlide, handleSlideChange, progress }) => {
  return (
    <div style={{display:'flex', flexDirection:'row', gap:'30px'}}>
      {slidesData.map((slide, index) => (
        <ReportsButton
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

const ReportsButton = ({ imgSrc, heading, text, isActive, onClick, progress }) => {
  const activeButtonStyle = isActive
    ? { background: `#dedeff` ,border:'3px solid #00f' }

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

const SingleReportsSlide = ({ imgSrc, text, isActive }) => {
  return (
    <div style={{ display: isActive ? 'flex' : 'none', textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}>

      <img src={imgSrc} alt="" style={{ width: '80%',height:'400px', marginBottom: '20px' }} />
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
    iconSrc: '/img/strategy-reports-icon.svg',
    heading: 'Live Market Updates',
    buttonText: 'Monitor your performance throughout the market in real time and make quick decisions',
    imgSrc: dashboard,
  },
  {
    iconSrc: '/img/instrument-modification-icon.svg',
    heading: 'Flexible Strategies',
    buttonText: 'Use and make strategies based on anything from basic options data to advanced AI/ML models',
    imgSrc: chain,
  },
  {
    iconSrc: '/img/rms-icon.svg',
    heading: 'Historical References',
    buttonText: 'Keep a track of historical data to predict the future, learn from past, apply in future',
    imgSrc: history,
  },
  {
    iconSrc: '/img/miscellaneous-icon.svg',
    heading: 'Details of Past Orders',
    buttonText: 'Return anytime to view all your past orders to review the execution of applied strategies',
    imgSrc: orders,
  }
];

export default Reports;
