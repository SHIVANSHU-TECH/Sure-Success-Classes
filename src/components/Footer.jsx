import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024);

  let presentYear = new Date().getFullYear();

  if (currentYear != presentYear) {
    setCurrentYear(new Date().getFullYear());
  }

  return (
    <footer>
      <div className="footer--wrapper">
        <div className="info--header">
          <h5>Company Info</h5>
          <a href="#" className="info--link">
            About us
          </a>
          <a href="#" className="info--link">
          Our vision
          </a>
          <a href="https://forms.gle/bHvsS47ycxdzs6Hz7" className="info--link">
            Contact us
          </a>
          <a href="https://forms.gle/hXg9VJ6RwomhNf5YA" className="info--link">
            Hiring Forum
          </a>
        </div>

        <div className="info--header">
          <h5>Social media Links</h5>
          <a href="#" className="info--link">
            Instagram
          </a>
          <a href="#" className="info--link">
            Whatsapp 
          </a>
          <a href="#" className="info--link">
            Linkedin
          </a>
          
        </div>

        {/* <div className="info--header">
          <h5>Services</h5>
          <a href="#" className="info--link">
            Business Marketing
          </a>
          <a href="#" className="info--link">
            User Analytics
          </a>
          <a href="#" className="info--link">
            Live Chat
          </a>
          <a href="#" className="info--link">
            Unlimited Support
          </a>
        </div> */}

        <div className="info--header">
          <h5>Resources</h5>
          <a href="#" className="info--link">
            Maths
          </a>
          <a href="#" className="info--link">
            Science
          </a>
          <a href="#" className="info--link">
            English
          </a>
          <a href="#" className="info--link">
            GK
          </a>
        </div>

        <div className="company--location">
          <h5>Get in Touch</h5>
          <div className="contact--info">
            <FaPhone />
            <a href="#" className="contact--link">
              +91 9650639315
            </a>
          </div> <br />
          <div className="contact--info">
            <IoLocationOutline />
            <a href="#" className="contact--link">
              H.No.252, Ghitorni-110030
            </a>
          </div><br />
          <div className="contact--info">
            <IoIosMail />
            <a href="#" className="contact--link">
              Shuklasir9996@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="attribution">
        <p className="copyright">
          All Rights Reserved &copy; SS Classes {currentYear}
        </p>

      
      </div>
    </footer>
  );
};

export default Footer;
