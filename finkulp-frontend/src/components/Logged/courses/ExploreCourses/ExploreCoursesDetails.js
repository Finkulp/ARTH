import React from 'react';
import '../../../../CSS/CourseBlock.css'; // Import the CSS file for styling

const CoursePage = () => {
  return (
    <div className="course-page">
      <div className="course-block">
        <div className="course-block-info">
          <h1 className="course-block-title">Course Name</h1>
          <p className="course-block-description">This is a small description of the course.</p>
          <button className="course-block-get-started-btn">Get Started</button>
          <div className="course-block-rating">
            ⭐⭐⭐⭐⭐ 4.5
          </div>
        </div>
        <div className="course-block-image" style={{border:'solid',width:'300px',height:'300px',borderWidth:'1px'}}>
          <img src="https://via.placeholder.com/150" alt="Course" />
        </div>
      </div>

      <div className="course-details">
        <div className="course-info">
          <h2 className="course-info-title">What You'll Learn</h2>
          <p className="course-info-description">This section provides an overview of what you will learn in this course. The content is designed to help you gain essential skills and knowledge in the topic area.</p>
          
          <h2 className="course-content-title">Course Content</h2>
          <details className="course-content-item">
            <summary>Course Fundamentals</summary>
            <p>Learn the basics of the course topic, including foundational concepts and principles.</p>
          </details>
          <details className="course-content-item">
            <summary>Develop Skills</summary>
            <p>Gain practical skills through hands-on exercises and real-world examples.</p>
          </details>
          <details className="course-content-item">
            <summary>Setup Course Description</summary>
            <p>Understand how to set up and navigate the course materials effectively.</p>
          </details>

          <h2 className="instructor-title">Instructor Details</h2>
          <div className="instructor-details">
            <div className="instructor-info">
              <h3 className="instructor-name">John Doe</h3>
              <p className="instructor-description">John Doe is an expert in the field with over 20 years of experience. He has taught numerous courses and has a passion for sharing knowledge.</p>
              <ul className="instructor-key-points">
                <li>PhD in Computer Science</li>
                <li>Author of 3 best-selling books</li>
                <li>Over 100 published papers</li>
                <li>20 years of teaching experience</li>
              </ul>
            </div>
            <div style={{width:'200px',height:'200px',border:"solid",borderWidth:'1px',margin:'30px'}}><img src="" alt="Instructor" className="instructor-image"/></div>
          </div>
        </div>

        <div className="course-payment">
          <h2 className="course-payment-title">Course Fee</h2>
          <p className="course-payment-amount">$299</p>
          
          <div className="course-start-date">
            <h3>Start Date</h3>
            <p>August 1, 2024</p>
          </div>
          
          <div className="course-contact">
            <h3>Contact Us</h3>
            <p>Call: 123-456-7890</p>
          </div>
          
          <div className="course-social-media">
            <h3>Follow Us</h3>
            <button className="social-media-btn">Facebook</button>
            <button className="social-media-btn">Twitter</button>
            <button className="social-media-btn">LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
