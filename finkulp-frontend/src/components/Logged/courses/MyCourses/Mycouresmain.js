import React, { useState, useEffect } from 'react';
import { data } from '../../../../Data/MyCourses'
import { Link } from 'react-router-dom';
export default function MyCourses(props) {
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

  return (
    <>
      <div className="max-w-md mx-auto" style={{ marginLeft: "500px",display:'flex',position:'absolute',top:'110px',left:"600px" }}>
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
            placeholder="Search in local library..."
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
        </div>
        <div>
        <select onChange={(e) => setSelectedPriceRange(e.target.value)} className="p-2 border rounded" style={{ marginLeft: "10px" ,height:'50px',width:'200px'}}>
          <option value="">All Prices</option>
          <option value="0-100">0-100</option>
          <option value="100-200">100-200</option>
          {/* Add more price ranges as needed 
        </select>
      </div> */}
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: 'wrap', width: "95%", marginTop: "50px", paddingLeft: "70px", justifyContent: "space-evenly" }}>
        {filteredData.map(course => (
          
          
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3" style={{ width: "400px" }}>
          <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3" style={{ width: "400px" }}>
            <img src={course.image} alt="" style={{width:"400px",height:'300px'}}  />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <span className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                  {course.title}
                </span>
              </h3>
              <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                {course.description}
              </p>
              <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                {course.courseCompleted}
              </p>
              <div >
                <Link to='/loggedhome/courses/ExploreCoursesDetails'> <button className=" bg-primary px-6 py-3 text-base font-medium text-white" style={{borderRadius:"10px"}} onClick={()=>{props.setExploreCourses(course)}}>Open Details</button></Link>
             
            </div>        
              </div>
          </div>
        </div>
        
        ))}
      </div>
    </>
  );
}
