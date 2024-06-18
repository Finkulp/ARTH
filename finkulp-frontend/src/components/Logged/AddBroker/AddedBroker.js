import React from 'react';
import { Link } from 'react-router-dom';
import PaisaIcon from '../../../Images/5paisalogo.png';
import aliceblueIcon from '../../../Images/aliceblue.png';
import angleoneIcon from '../../../Images/angelone.png';
import HDFCSKYIcon from '../../../Images/HDFCSKy.png';
import KotakIcon from '../../../Images/kotak.png';
import motilalIcon from '../../../Images/motilal.jpg';
import upstocksIcon from '../../../Images/UpstoxIcon.png';
import ZerodthaIcon from '../../../Images/ZerodhaIcon.png';

const brokers = [
  {
    name: '5Paisa',
    description: '5paisa is a popular discount brokerage firm in India, offering a range of investment services including stocks, mutual funds, and insurance with low brokerage fees.',
    img: PaisaIcon,
    link: '/loggedhome/5paisa',
  },
  {
    name: 'Alice Blue',
    description: 'Alice Blue is a prominent Indian brokerage firm known for its competitive brokerage plans and advanced trading platforms.',
    img: aliceblueIcon,
    link: '/loggedhome/Alice-Blue',
  },
  {
    name: 'Angle One',
    description: 'Angel One is a leading full-service brokerage firm in India, offering a comprehensive suite of financial services including stock trading.',
    img: angleoneIcon,
    link: '/loggedhome/Angle-One',
  },
  {
    name: 'Kotak',
    description: 'Kotak Securities is a well-established brokerage firm in India, providing a wide range of investment services including equity trading, mutual funds, and IPOs.',
    img: KotakIcon,
    link: '/loggedhome/Kotak',
  },
  {
    name: 'Motilal',
    description: 'Motilal Oswal is a leading financial services company in India, offering a diverse range of investment options including equities, mutual funds, and portfolio management services.',
    img: motilalIcon,
    link: '/loggedhome/Motilal',
  },
  {
    name: 'Upstox',
    description: 'Upstox is a leading Indian brokerage firm, offering low-cost trading services and a user-friendly trading platform for stocks, mutual funds, and derivatives.',
    img: upstocksIcon,
    link: '/loggedhome/Upstox',
  },
];

export default function AddedBroker() {
  return (
    <div>
      <div style={{ paddingTop: '50px' }}></div>
      <div style={{ fontSize: '20px', fontWeight: '625', fontFamily: 'Poppins', marginLeft: '100px', paddingBottom: '20px', color: 'gray' }}>
        Select Broker
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {brokers.map((broker, index) => (
          <div key={index} style={{ width: '300px', border: 'solid', height: '625px', borderWidth: '1px', borderColor: 'rgb(204, 205, 207)', borderRadius: '3px', marginBottom: '10px' ,background:"rgb(253,253,255)"}} className="hover:scale-105 transition-transform duration-500 ease-in-out explorecourescard">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', height: '250px', background: 'rgb(244, 249, 255)' }}>
              <img src={broker.img} style={{ width: '200px', height: '80px', borderRadius: '3px' }} alt={broker.name} />
            </div>
            <div style={{ paddingLeft: '40px', paddingRight: '30px' }}>
              <div style={{ fontSize: '25px', fontFamily: 'Lato', fontWeight: '600', paddingTop: '25px', height: '70px' }}>{broker.name}</div>
              <div style={{ paddingTop: '20px', paddingBottom: '20px', height: '100px', fontFamily: 'Lato', color: 'gray' }}>
                {broker.description}
              </div>
            </div>
            <hr style={{ color: 'gray', paddingBottom: '50px', width: '100%', position: 'relative', top: '70px' }}></hr>
            <div style={{ display: 'flex', justifyContent: 'right', marginRight: '20px', paddingTop: '13px' }}>
              <div>
                <Link to={broker.link}>
                  <button style={{ padding: '10px', fontFamily: 'Lato', color: 'white', background: 'rgb(44, 90, 163)', fontSize: '15px', fontWeight: '350', paddingLeft: '20px', paddingRight: '20px', borderRadius: '3px', position: 'relative', top: '50px' }}>
                    Click to setup
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
