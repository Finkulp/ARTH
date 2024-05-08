import React from 'react';

const Coursestemplate = () => {
  return (
    <div style={{ width: '500px', border: 'solid', borderRadius: '10px', borderWidth: '1px', borderColor: 'blue' }}>
      <div style={{ border: 'solid', width: '500px', height: '200px', borderWidth: '1px', borderRadius: '10px', borderColor: 'blue' }}></div>
      <div style={{ marginLeft: '20px', marginTop: '5px' }}>
        <div style={{ color: 'blue', marginTop: '10px', fontWeight: '400', fontSize: '15px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Taj Mahal, New Delhi</div>
        <div style={{ color: 'gray', marginTop: '10px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '12px' }}>New Delhi, IN | Luxury hotel | Taj Hotels</div>
        <div style={{ color: 'purple', marginTop: '10px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '13px' }}>Rating 5/10</div>
        <div style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'gray', marginTop: '15px' }}>
          <div style={{ marginTop: '10px' }}>Guest Rooms: 213</div>
          <div style={{ marginTop: '10px' }}>Total space: 13,000 sq.ft.</div>
          <div style={{ marginTop: '10px' }}>Meeting rooms: 6</div>
          <div style={{ marginTop: '10px' }}>Largest room: 16,500 sq. ft.</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ width: '90%', height: '50px', marginTop: '10px', marginBottom: '10px' }}>More Info</button>
      </div>
    </div>
  );
};

export default Coursestemplate;
