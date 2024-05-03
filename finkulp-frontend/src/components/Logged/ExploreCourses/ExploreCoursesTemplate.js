import React from "react";
import ModalExploreCourses from './ModalExploreCourses';

const ExploreCourseTemplate = (props) => {
  return (
    <div className="grid  sm:grid-cols-2 lg:grid-cols-3" style={{ width: "400px" }}>
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3" style={{ width: "400px" }}>
        <img src={props.image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <span className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              {props.title}
            </span>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {props.description}
          </p>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {props.courseCompleted}
          </p>
          <div style={{marginTop:"-60px",marginBottom:"-60px"}}>
          <ModalExploreCourses title={props.title} image={props.image} description={props.description}></ModalExploreCourses>
        
          </div>        
          </div>
      </div>
    </div>
  );
};

export default ExploreCourseTemplate;
