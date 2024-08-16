import React from 'react';
import Card from './Card';
import cards from '../data/cards';
import heroImage from '../assets/hero-illustration.jpg';
import card1 from '../assets/laptop-illustration.svg';
import card2 from '../assets/telescope-illustration.svg';
import card3 from '../assets/experiment-illustration.svg';


const Main = () => {
  return (
    <main>
      <div className="hero-section">
        <div className="hero-box">
          {/* <h5>Online Training</h5> */}
          <h1>Sure Success Classes</h1>
          <h4>is more than just a coaching center.
          It's a place where students are encouraged to dream big and work hard.</h4>
          <div className="call-to-actions">
           <a href="https://forms.gle/bHvsS47ycxdzs6Hz7" className="cta-btn">Register Now</a>
           <a href="#">Learn More</a>
          </div>
        </div>

        <div className='hero-box'>
          <img src={ heroImage }  alt="a woman smiling" />
        </div>
      </div>
     <br /> <br />
     <h1 className='Card_heading'>Why Choose Us</h1> <br /> <br />
      <div className="card--grid">
       
        {cards.map(card => 
          <Card 
            key={card.id}
            img={card.img}
            title={card.title}
            content={card.content}
          />
        )}
      </div>
    </main>
  );
};

export default Main;