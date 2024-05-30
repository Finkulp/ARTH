import React from 'react';

export default function ResourcesHome() {
  const containerStyle = {
    background: 'white',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '10px',
  };

  const itemStyle = {
    flex: '1 1 calc(25% - 10px)',
    boxSizing: 'border-box',
    padding: '10px',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontWeight: '600',
    color: 'blue',
    borderRadius: '5px',
    background: 'linear-gradient(cyan, rgb(5, 247, 82))',
    color: 'blue',
    transition: 'transform 0.3s, background-color 0.3s',
  };

  const itemHoverStyle = {
    transform: 'scale(1.05)',
    backgroundColor: 'blue',
  };

  const items = [
    { name: 'Help', icon: 'fa-solid fa-circle-info' },
    { name: 'Blog', icon: 'fa-solid fa-blog' },
    { name: 'Videos', icon: 'fa-solid fa-video' },
    { name: 'Community', icon: 'fa-solid fa-users' },
    { name: 'Telegram', icon: 'fa-brands fa-telegram' },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
    { name: 'Twitter', icon: 'fa-brands fa-twitter' },
    { name: 'Facebook', icon: 'fa-brands fa-facebook' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram' },
  ];

  return (
    <div style={containerStyle}>
      {items.map((item) => (
        <div
          key={item.name}
          style={itemStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = itemHoverStyle.transform;
            e.currentTarget.style.backgroundColor = itemHoverStyle.backgroundColor;
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'linear-gradient(cyan, rgb(5, 247, 82))';
            e.currentTarget.style.color = 'blue';
          }}
        >
          <i className={item.icon} style={{ marginRight: '8px' }}></i>
          {item.name}
        </div>
      ))}
    </div>
  );
}
