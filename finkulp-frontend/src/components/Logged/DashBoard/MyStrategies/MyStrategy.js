import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Algos } from '../../../../Data/MyStrategy';
import { ClickAwayListener, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import DetailContext from '../../../../Context/Details/DetailsContext';
import { useContext } from 'react';
import { useEffect } from 'react';
export default function MyStrategy(props) {
  const { getDetails, userDetails,setUserDetails, loading, setLoading ,id} = useContext(DetailContext);
  const [strategistFilter, setStrategistFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [Duration, setDuration] = useState('');
  const [instrumentFilter, setInstrumentFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const[mystrategyloading,setmystrategyloading]=useState(false);
  const handleStrategistFilterChange = (event) => {
    setStrategistFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleDurationFilterChange = (event) => {
    setDuration(event.target.value);
  };

  const handleInstrumentFilterChange = (event) => {
    setInstrumentFilter(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredAlgos = Algos.filter((algo) =>
    algo.Strategist.toLowerCase().includes(strategistFilter.toLowerCase()) &&
    (categoryFilter === '' || algo.Category.toLowerCase() === categoryFilter.toLowerCase()) &&
    (Duration === '' || algo.duration.toLowerCase() === Duration.toLowerCase()) &&
    (instrumentFilter === '' || algo.instrument.toLowerCase() === instrumentFilter.toLowerCase()) &&
    (statusFilter === '' || algo.status.toLowerCase() === statusFilter.toLowerCase())
  );
  function getTokenFromCookie() {
    const cookies = document.cookie.split(';');
    let authToken = null;
    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name === 'authToken') {
            authToken = value;
        }
    });
    return authToken;
  }
  useEffect(() => {
    setmystrategyloading(true);
    console.log('Component mounted');
    // setLoading(true); // This line is redundant as setLoading(true) is already called above.
    getDetails().finally(() => setmystrategyloading(false));
  }, []);
 async function deletestrategy(algo){
  const authToken = getTokenFromCookie();
  if (!authToken) {
    console.error('Auth token not found');
    return;
  }
  //deleting the strategy from the strategy list
    try {
        console.log(algo.Strategist);
          const response = await fetch("http://localhost:5000/notes/removeUserFromStrategy", {
            method: "DELETE",
            body: JSON.stringify({
              strategy_name: algo.Strategist,
              user_id:id
            }),
            headers: {
              "Authorization": `${authToken}`,
              "Content-Type": "application/json"
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        
    } catch (err) {
      console.error('Error placing order:', err);
    }

    //updating the strategy details
    try {
      console.log(algo.Strategist);
        const response = await fetch("http://localhost:5000/notes//updatestrategystatus", {
          method: "POST",
          body: JSON.stringify({
            strategyName: algo.Strategist,
            status:"stopped",
          }),
          headers: {
            "Authorization": `${authToken}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUserDetails(data);
      
  } catch (err) {
    console.error('Error placing order:', err);
  }

}
async function startstrategy(algo){
  const authToken = getTokenFromCookie();
  if (!authToken) {
    console.error('Auth token not found');
    return;
  }
  try {
    const authToken=getTokenFromCookie();
    const response = await fetch("http://localhost:5000/notes/addStrategy", {
      method: "POST",
      body: JSON.stringify({
        strategy_name:algo.Strategist,
        user_id: id,
      }),
      headers: {
        "authorization":`${authToken}`,
        "Content-type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data1 = await response.json();
  } catch (err) {
    console.error('Error fetching user details:', err);
  }
    try {
        console.log(algo.Strategist);
          const response = await fetch("http://localhost:5000/notes//updatestrategystatus", {
            method: "POST",
            body: JSON.stringify({
              strategyName: algo.Strategist,
              status:"started",
            }),
            headers: {
              "Authorization": `${authToken}`,
              "Content-Type": "application/json"
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setUserDetails(data);
        
    } catch (err) {
      console.error('Error placing order:', err);
    }

}
  return (
    <>
    {mystrategyloading&&<div>Please Wait</div>}
    {!mystrategyloading&&
    <div style={{marginRight:'20px',paddingTop:'20px',width:"100%",overflowY:'auto',height:'100vh',marginLeft:'15px'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{width:'200px',fontFamily:'poppins',color:'	#4285F4',fontSize:'23px',textDecoration:'underline',paddingBottom:'20px'}}>My Strategies</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            label="Search by Strategist"
            variant="outlined"
            onChange={handleStrategistFilterChange}
            style={{ marginRight: '30px', width: '400px' }}
          />
          
          <TextField
            select
            label="Filter by Duration"
            value={Duration}
            onChange={handleDurationFilterChange}
            variant="outlined"
            style={{ marginRight: '20px', width: '200px' }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Short">Short</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Long">Long</MenuItem>
          </TextField>

          <TextField
            select
            label="Filter by Instrument"
            value={instrumentFilter}
            onChange={handleInstrumentFilterChange}
            variant="outlined"
            style={{ marginRight: '20px', width: '200px' }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="NIFTY 50">NIFTY 50</MenuItem>
            <MenuItem value="SBIN">SBIN</MenuItem>
            <MenuItem value="CHOFALAIN">CHOFALAIN</MenuItem>
          </TextField>

          <TextField
            select
            label="Filter by Status"
            value={statusFilter}
            onChange={handleStatusFilterChange}
            variant="outlined"
            style={{ marginRight: '20px', width: '200px' }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Running">Running</MenuItem>
            <MenuItem value="Not Started">Not Started</MenuItem>
            <MenuItem value="Stopped">Stopped</MenuItem>
          </TextField>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer component={Paper} style={{ maxWidth: '98%', marginBottom: '' ,overflow:"hidden"}}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Strategy Name</TableCell>
                <TableCell align="center" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Amount Invested</TableCell>
                <TableCell align="center" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Status</TableCell>
                <TableCell align="center" style={{ fontWeight: '600', fontSize: '14px', padding: '8px',position:'relative',left:'50px'  }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {userDetails.addedStrategies&& userDetails.addedStrategies.map((algo, index) => (
              <TableRow key={index} style={{ fontSize: '12px', height: '40px'}}>
                <TableCell align='center' style={{ padding: '8px' ,width:'300px'}}>{algo.Strategist}</TableCell>
                <TableCell align="center" style={{ padding: '8px',width:'300px' }}>{algo.amount_Invested}</TableCell>
                <TableCell align="center" style={{ padding: '8px' ,width:'300px'}}>{algo.status}</TableCell>
                <TableCell align="center" style={{ padding: '8px',position:'relative',display:'flex',justifyContent:'center',width:'400px',gap:'20px'}}>
                  {(algo.status === "stopped") && (
                    <>
                      <div >
                        <button className='bg-blue dark:bg-dark-2 dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-2 px-4 text-center text-sm font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5' style={{ borderRadius: '10px',width:'100px',marginLeft:'50px' }} onClick={()=> startstrategy(algo)}>
                          Start
                        </button>
                      </div>
                    </>
                  )}
                  {(algo.status === 'started') && (
                    <>
                      <div  style={{ paddingLeft: '50px' }}>
                        <button className='bg-red dark:bg-dark-2 dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-2 px-4 text-center text-sm font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5' style={{ borderRadius: '10px',width:'100px' }} onClick={() => deletestrategy(algo)}>
                          Stop
                        </button>
                      </div>
                    </>
                  )}
                   <Link to='/loggedhome/MarketPlace/AlgoDescription' >
                        <button className='bg-blue dark:bg-dark-2 dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-2 px-4 text-center text-sm font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5' style={{ borderRadius: '10px' }} onClick={() => { props.setViewAlgo(algo) }}>
                          Know More
                        </button>
                      </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
    }
    </>
  );
}
