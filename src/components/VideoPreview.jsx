import React from 'react';
import { FaPlay } from 'react-icons/fa';
import videoPreview from '../assets/video-preview.jpg';


const VideoPreview = () => {
    return (
      <section className="videoPreview">
        <div className="preview--info">
          <h2>Our Mission</h2>
          <p>
          To provide personalized, high-quality education that empowers 
          students to achieve academic excellence and prepare them for a successful future.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="videoPlayer">
            <div className='gradient'></div>
            <img src= { videoPreview } alt="An advertisement" className='media' />
            <button className='play'>
                <FaPlay />
            </button>
        </div>
      </section>
    );
}

export default VideoPreview;