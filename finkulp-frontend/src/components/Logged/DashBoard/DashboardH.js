import React from 'react';
import Home from '../Home';
import MoneyStats from './StatsH';
import Navbar from './NavbarH';
import BigBox from './BigContainer';

const data = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    
];

const Dashboard = () => {
    return (
        <div style={{paddingRight:"0px",marginRight:"0px"}}>
            <Navbar></Navbar>
            <div style={{paddingLeft:"0px",marginLeft:"13%"}}>
                <Home name="Hetharth The Great"/>
                <div>
                    <BigBox />
                </div>
                <MoneyStats />
            </div>
        </div>
    );
};

export default Dashboard;
