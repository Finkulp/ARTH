import React from 'react';
import Navbar from '../NevBar';
import ExploreCourseTemplate from './ExploreCoursesTemplate';

const data = [
  {
    id: 1,
    image: "https://t4.ftcdn.net/jpg/05/13/77/31/360_F_513773104_G7Pin2bxWwpMAWqI5MIvrSnWDpYs80WN.jpg",
    title: "Course 1",
    description: "This is the Description for Course 1",
    address: "Address 1",
    courseCompleted: "12% completed",
  },
  {
    id: 2,
    image: "https://t4.ftcdn.net/jpg/05/13/77/31/360_F_513773104_G7Pin2bxWwpMAWqI5MIvrSnWDpYs80WN.jpg",
    title: "Course 2",
    description: "This is the Description for Course 2",
    address: "Address 2",
    courseCompleted: "25% completed"
  },
  {
    id: 2,
    image: "https://t4.ftcdn.net/jpg/05/13/77/31/360_F_513773104_G7Pin2bxWwpMAWqI5MIvrSnWDpYs80WN.jpg",
    title: "Course 2",
    description: "This is the Description for Course 2",
    address: "Address 2",
    courseCompleted: "25% completed"
  },
  // Add more records as needed
];

export default function ExploreCourses() {
  return (   
    <>
  <Navbar />
  <h1 style={{textAlign:"center",marginTop:"200px",fontSize:"30px",fontWeight:"600"}}>My Course</h1>
  <form class="max-w-md mx-auto" style={{marginTop:"50px"}}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search in your library..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


    <div style={{display:"flex", gap:"55px",flexWrap:'wrap',width:"90%",marginTop:"100px",paddingLeft:"50px"}}>
   
      {data.map(course => (
        <ExploreCourseTemplate
          key={course.id}
          image={course.image}
          title={course.title}
          description={course.description}
          address={course.address}
          courseCompleted={course.courseCompleted}
          style={{ flex: "0 0 calc(20% - 20px)", margin: "10px" }} 
        />
      ))}
    </div>
    </>
  );
}
