import React from 'react';
import studentHero from '../assets/student-illustration.png';


const StudentPreview = () => {
    return (
      <section className="studentPreview">
        <div className="preview--info">
          <h2>Our Vision</h2>
          <p>
          To be a leading coaching center known for delivering exceptional
           academic results and fostering a love for learning in every student.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="student--illustration">
            <img src={ studentHero } alt="A happy child"/>
        </div>
      </section>
    );
}

export default StudentPreview;