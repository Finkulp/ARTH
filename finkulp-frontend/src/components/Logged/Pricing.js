import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import FAQlogged from './FAQ';
const Pricing = () => {
  const plans = [
    {
      type: 'For individuals/business starting their trading journey',
      price: 1200,
      features: [
        { name: 'Number of Strategies Users can save', available: true, value: '10' },
        { name: 'Number of Strategies User can Execute in Parallel', available: true, value: '3' },
        { name: 'Real Time Dashboard for Trade Reports', available: true },
        { name: 'Minimum Capital Requirement', available: true, value: '5 Lakhs' },
        { name: 'Live Trading Allowed in Segments of India', available: true },
        { name: 'NSE/BSE Market - Equity', available: true },
        { name: 'NSE/BSE - F&O', available: true },
        { name: 'MCX - Commodity', available: true },
        { name: 'Brokers - Standard', available: true },
        { name: 'Real Time Analytics Dashboard', available: true },
        { name: 'AI Based Strategies', available: true },
        { name: 'Multileg Strategies', available: true },
        { name: 'Strategy Watchlist', available: true },
      ],
    },
    {
      type: 'For Growing & established trading professionals/businesses',
      price: 3200,
      features: [
        { name: 'Number of Strategies Users can save', available: true, value: '50' },
        { name: 'Number of Strategies User can Execute in Parallel', available: true, value: '10' },
        { name: 'Real Time Dashboard for Trade Reports', available: true },
        { name: 'Minimum Capital Requirement', available: true, value: '10 Lakhs' },
        { name: 'Live Trading Allowed in Segments of India', available: true },
        { name: 'NSE/BSE Market - Equity', available: true },
        { name: 'NSE/BSE - F&O', available: true },
        { name: 'MCX - Commodity', available: true },
        { name: 'Brokers - Standard', available: true },
        { name: 'Real Time Analytics Dashboard', available: true },
        { name: 'AI Based Strategies', available: true },
        { name: 'Multileg Strategies', available: true },
        { name: 'Strategy Watchlist', available: true },
      ],
    },
    {
      type: 'For 1-3 Years experienced trading professionals',
      price: 2100,
      features: [
        { name: 'Number of Strategies Users can save', available: true, value: '30' },
        { name: 'Number of Strategies User can Execute in Parallel', available: true, value: '5' },
        { name: 'Real Time Dashboard for Trade Reports', available: true },
        { name: 'Minimum Capital Requirement', available: true, value: '5-10 Lakhs' },
        { name: 'Live Trading Allowed in Segments of India', available: true },
        { name: 'NSE/BSE Market - Equity', available: true },
        { name: 'NSE/BSE - F&O', available: true },
        { name: 'MCX - Commodity', available: true },
        { name: 'Brokers - Standard', available: true },
        { name: 'Real Time Analytics Dashboard', available: true },
        { name: 'AI Based Strategies', available: true },
        { name: 'Multileg Strategies', available: true },
        { name: 'Strategy Watchlist', available: true },
      ],
    },
    
  ];
  

  return (
    <>
    <div style={{display:'flex',justifyContent:'center' ,marginTop:'-100px'}}>
    <section className="  bg-white pb-12 pt-20 dark:bg-dark ">
    <div className="flex justify-center bg-white pb-12 pt-20 dark:bg-dark">
  <section className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-semibold text-dark dark:text-white mb-3">Our Pricing Plan</h2>
      <p className="text-base text-body-color dark:text-dark-6">Choose the Perfect Plan for Your Needs</p>
    </div>
    <div className="relative flex flex-col md:flex-row justify-center items-stretch gap-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`flex-1 transition-all ${
            index === 1
              ? 'z-10 transform scale-110  bg-white  p-4 rounded-lg   ' // Middle card is bigger and raised
              : 'transform scale-100 ' // Normal size for side cards
          }`} 
        >
          <PricingCard plan={plan} />
        </div>
      ))}
    </div>
      </section>
    </div>

      <div style={{marginTop:'20px'}}>
      <FAQlogged ></FAQlogged>
      </div>
    </section>
    </div>
    </>
  );
};

export default Pricing;

const PricingCard = ({ plan }) => {
  return (
    <div className="flex-1 max-w-sm mx-auto">
      <div className="border-2 border-stroke rounded-lg shadow-lg  bg-white dark:bg-dark-2 p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">{plan.type}</h3>
          <div className="text-3xl font-bold text-dark dark:text-white mb-2">
            ₹{plan.price}
            <span className="text-base font-medium text-body-color dark:text-dark-6">/month</span>
          </div>
          <p className="text-sm text-body-color dark:text-dark-6 mb-6">(excluding GST)</p>
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <FontAwesomeIcon
                  icon={feature.available ? faCheck : faTimes}
                  className={`w-4 h-4 mr-2 ${
                    feature.available ? 'text-green-500' : 'text-red-500'
                  }`}
                />
                {feature.value ? (
                  <span className="text-sm text-body-color dark:text-dark-6">
                    {feature.name}: <strong>{feature.value}</strong>
                  </span>
                ) : (
                  <span className="text-sm text-body-color dark:text-dark-6">{feature.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};
