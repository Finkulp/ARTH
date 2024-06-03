import React from 'react';

const Navbar = () => {
    return (
        <div style={navbarStyle}>
            <h2>Navbar</h2>
            <ul style={navListStyle}>
                <li style={navItemStyle}>Home</li>
                <li style={navItemStyle}>Profile</li>
                <li style={navItemStyle}>Settings</li>
                <li style={navItemStyle}>Logout</li>
            </ul>
        </div>
    );
};

const navbarStyle = {
    width: '13%', 
    height: '100vh', 
    backgroundColor: '#f4f4f4', 
    padding: '16px',
    boxSizing: 'border-box',
    position: "fixed",
    top: '100px', 
    left: 0, 
    overflowY: 'auto',
};

const navListStyle = {
    listStyleType: 'none',
    padding: 0
};

const navItemStyle = {
    margin: '16px 0',
    cursor: 'pointer'
};

export default Navbar;
