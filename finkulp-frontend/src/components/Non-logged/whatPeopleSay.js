import React from 'react'
import arun from '../../Images/Arun.jpg'
import myank from '../../Images/Myank.jpg';
import hethart from '../../Images/Hethart.jpg';
import raghave from '../../Images/Raghav.jpg'
import BlueBackground1 from '../../Animations/BlueBackground1.jpg'
export default function whatPeopleSay() {
  return (
    <div >
      <section style={{background:`url(${BlueBackground1})`,backgroundSize:'cover',paddingBottom:'50px'}}>
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold "style={{fontFamily:'poppins',color:'blue'}}>What People Say</h2>
          <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl "style={{fontFamily:'poppins',color:"seagreen"}}>Join 10,000 happy customers worldwide who are already using our amazing product.</p>
      </div> 
      <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r  "
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center">
          <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src={myank} alt="profile picture" style={{width:"100px",height:"100px"}}/>
              </figcaption>  
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 class="text-lg font-semibold "style={{fontFamily:'poppins',color:'blue'}}>Mayank Verma</h3>
                  <p class="my-4"style={{fontFamily:'poppins',color:'seagreen'}}>"I've found Finkulp to be a game-changer, with its automated trading strategies and top-notch trading courses. Highly recommended!"</p>
              </blockquote>
             
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12  "
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center">
          <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src={arun} alt="profile picture" style={{width:"100px",height:"100px"}}/>
              </figcaption>  
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 class="text-lg font-semibold "style={{fontFamily:'poppins',color:'blue'}}>Arun Rathaur</h3>
                  <p class="my-4"style={{fontFamily:'poppins',color:'seagreen'}}>"Trading is super interesting for us young folks. Finkulp is like the cool way we get to learn more about it and check out all the cool stuff in it."</p>
              </blockquote>
           
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r  "
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center">
          <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src={hethart} alt="profile picture"style={{width:"100px",height:"100px"}}/>
              </figcaption> 
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 class="text-lg font-semibold "style={{fontFamily:'poppins',color:'blue'}}>Hetharth Sachdeva</h3>
                  <p class="my-4"style={{fontFamily:'poppins',color:'seagreen'}}>"Using automation in trading and finance could be the next big thing in this field."</p>
              </blockquote>
   
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12  "
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center">
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
</section>
    </div>
  )
}
