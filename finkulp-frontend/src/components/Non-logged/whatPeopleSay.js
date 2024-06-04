import React from 'react'
import arun from '../../Images/Arun.jpg'
import myank from '../../Images/Myank.jpg';
import hethart from '../../Images/Hethart.jpg';
import raghave from '../../Images/Raghav.jpg'
import BlueBackground1 from '../../Animations/BlueBackground1.jpg'
export default function whatPeopleSay() {
  return (
<div id="default-carousel" class="relative w-full" data-carousel="slide" style={{position:'relative',top:'10px'}}>
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
           <div>
           <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r  ">
          <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src={myank} alt="profile picture" style={{width:"100px",height:"100px"}}/>
              </figcaption>  
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 class="text-lg font-semibold "style={{fontFamily:'poppins',color:'blue'}}>Mayank Verma</h3>
                  <p class="my-4"style={{fontFamily:'poppins',color:'seagreen'}}>"I've found Finkulp to be a game-changer, with its automated trading strategies and top-notch trading courses. Highly recommended!"</p>
              </blockquote>
             
          </figure>
           </div>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
           <div>
           <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12  ">
          <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src={arun} alt="profile picture" style={{width:"100px",height:"100px"}}/>
              </figcaption>  
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 class="text-lg font-semibold "style={{fontFamily:'poppins',color:'blue'}}>Arun Rathaur</h3>
                  <p class="my-4"style={{fontFamily:'poppins',color:'seagreen'}}>"Trading is super interesting for us young folks. Finkulp is like the cool way we get to learn more about it and check out all the cool stuff in it."</p>
              </blockquote>
           
          </figure>
           </div>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
           <div>
           <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12  ">
          <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src={hethart} alt="profile picture"style={{width:"100px",height:"100px"}}/>
              </figcaption> 
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 class="text-lg font-semibold "style={{fontFamily:'poppins',color:'blue'}}>Hetharth Sachdeva</h3>
                  <p class="my-4"style={{fontFamily:'poppins',color:'seagreen'}}>"Using automation in trading and finance could be the next big thing in this field."</p>
              </blockquote>
   
          </figure>
           </div>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12  ">
          <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src={raghave}alt="profile picture" style={{width:"100px",height:"100px"}}/>
              </figcaption>  
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 class="text-lg font-semibold "style={{fontFamily:'poppins',color:'blue'}}>Raghav Mahagan</h3>
                  <p class="my-4"style={{fontFamily:'poppins',color:'seagreen'}}>"The fusion of technology and finance is reshaping the future of trading, and Finkulp's automated strategies are leading the change."</p>
              </blockquote>
      
          </figure>
            </div>
        </div>
    </div>
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

  )
}
