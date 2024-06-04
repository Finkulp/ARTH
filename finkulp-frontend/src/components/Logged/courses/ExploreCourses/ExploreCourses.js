import React, { useState, useEffect } from 'react';
import { data } from '../../../../Data/ExploreCoursesData';
import { Link } from 'react-router-dom';
import '../../../../CSS/Algoshopping.css'
import BombayStockExchange from '../../../../Images/BombayStockExchange.png'
export default function ExploreCourses(props) {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  useEffect(() => {
    let filtered = data;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(course => course.price >= minPrice && course.price <= maxPrice);
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange]);
  function handleclick(course){
    props.setExploreCourses(course)
    console.log(course);
  }
  return (
    <>
    <div style={{background:`url(${BombayStockExchange})`,width:'100%',height:'450px'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{paddingTop:'150px',fontFamily:'poppins',fontWeight:'800',fontSize:'45px',color:'blue'}}>EXPERT INSTRUCTION FROM FINKULP</div>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{paddingTop:'20px',fontFamily:'poppins',fontWeight:'800',fontSize:'28px',color:'green',width:'70%',textAlign:'center'}}>Self-paced, online courses that provide on-the-job skills—all from the world's leader in finance and investing education.</div>
      </div>
      </div>
      <div className="max-w-md mx-auto" style={{ marginLeft: "300px",display:'flex',position:'absolute',top:'110px',left:"800px"}}>
        <div >
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative" style={{width:'500px'}}>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search in online library..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
            style={{height:'40px',width:'400px'}}
          />
        </div>
        </div>

      {/* <div className="filters" style={{ marginLeft: "10px",height:'50px'}}>
        <select onChange={(e) => setSelectedCategory(e.target.value)} className="p-2 border rounded"style={{height:'50px',width:'200px'}}>
          <option value="">All Categories</option>
          <option value="Trading">Trading</option>
          <option value="Data Science">Data Science</option>
          <option value="Management">Management</option>
          <option value="Programming">Programming</option>
          {/* Add more categories as needed 
        </select>
        </div> */}
        {/* <div>
        <select onChange={(e) => setSelectedPriceRange(e.target.value)} className="p-2 border rounded" style={{ marginLeft: "10px" ,height:'50px',width:'200px'}}>
          <option value="">All Prices</option>
          <option value="0-100">0-100</option>
          <option value="100-200">100-200</option>
          {/* Add more price ranges as needed 
        </select>
      </div> */}
      </div>
      <div style={{textAlign:'center',fontFamily:"Lato",fontWeight:"400",fontSize:'32px',paddingTop:"20px"}}>POPULAR COURSES</div>
      <div style={{ display: "flex", gap: "20px", flexWrap: 'wrap', width: "95%", marginTop: "50px", paddingLeft: "70px", justifyContent: "space-evenly" }}>
        {filteredData.map(course => (
          <div className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
            <div style={{width:'400px',border:"solid",height:'575px',borderWidth:'1px',borderColor:"rgb(204, 205, 207",borderRadius:'3px'}}>
            <div><img src={course.image} style={{width:"400px",height:'300px',borderRadius:'3px'}}></img></div>
            <div style={{paddingLeft:'40px',paddingRight:'30px'}}>
            <div style={{fontSize:'23px',fontFamily:"Lato",fontWeight:'400',paddingTop:'22px',height:"70px"}}>{course.title}</div>
            <div style={{paddingTop:'10px',paddingBottom:'20px',height:'100px',fontFamily:"Lato",color:'gray'}}>{course.description}</div>
            </div>
            <hr style={{color:'gray',paddingBottom:'20px',width:"100%"}}></hr>
            <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px"}}>
            <div><Link to='/loggedhome/courses/ExploreCoursesDetails'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}onClick={handleclick(course)}>View All course</button></Link></div>
            </div>
            </div>
            </div>
        ))}
      </div>
    </>
  );
}
