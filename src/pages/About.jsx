import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faClock, faCalendar, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

import './CSS/About.css';


const About = () => {
  return (
    <div>
        <div className='body-title'>      <h1 className='body-title'><b>We believe you’re bright  </b></h1>
        </div>
      <div className='body'>
      <div className='body-left'>
        <img src="https://tinybeans.com/wp-content/uploads/2024/01/more-joy-in-familys-every-day-2.jpg" className='img' />
        <h1>Our Mission        </h1>
        <p>Our mission is to provide our clients with tailored financial solutions that cater to their unique needs. We strive to make the process of securing a mortgage as straightforward and stress-free as possible, guiding you through every step with transparency and integrity.</p>
      </div>
      <div className='body-right'>
        <h2>Welcome to Alphaa Financial Solutions</h2>
        <p>At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. Established with a vision to provide seamless loan processing and financial advisory, we have grown to become a trusted name in the Australian mortgage industry.</p>
        <h1>Our Story 🙂        </h1>
        <p>Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing. Our founder,
        Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise go hand in hand. Over the years, we have helped thousands of Australians achieve their dream of owning a home, thanks to our unwavering commitment to excellence and innovation.</p>
      </div>
      </div>
      <div className='body-2'>
        <div className='img-2'>
          <img src="https://alphaafin.com.au/wp-content/uploads/elementor/thumbs/img-section-02-min-1-qs6zngh4emk55ov1yrf78p7twwstj1uoysatsyplzc.jpg" className='img-22' />
        </div>
        <div className='right-2'> 
          <h3 className="p-c">Why Choose Us  </h3>
          <h1 className="p-c">Our Expertise</h1>
          <p className="p-c">Expertise and Experience: With over 20 Years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table.</p>
          <p className="p-c">Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.</p>
          <p className="p-c">Innovative Solutions: We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients.          </p>
       
       <p className="p-c">Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.</p>
        </div>
      </div>
      <section>
      <div className="contact-card">
        <h2>Talk To Pawan Now</h2>
        <button>contact us</button>
        <h1>Feel Free To Get in Touch For a No Obiligations<a>Call Pawan</a></h1>

    </div>
      </section>
      <section>
      <div className="contact-us-last">
      <div className="contact-info-last">
      <h2>Quick Contact</h2>
      <p>At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services.</p>
    
        <ul>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Sydney, Australia</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <span>0468328227</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>email@example.com</span> {/* Replace with your actual email */}
          </li>
        </ul>
      </div>
      <div className="opening-hours">
        <h3>Opening Hours</h3>
        <table>
          <tbody>
            <tr>
              <td className='gold-color'> Mon to Fri</td>
              <td>------------------------------------------ 9:00 AM - 5:00 PM</td>
            </tr>
            <tr>
              <td className='gold-color'>Sat to Sun</td>
              <td>------------------------------------------ Appointments Only</td>
            </tr>
          </tbody>
        </table>
      <button className="schedule-visit-btn">Schedule a Visit</button>

      </div>
    </div>
      </section>
      <footer className="footer">
      <div className="social-icons">
      <Link to="/facebook">
        <FontAwesomeIcon icon={faPaw} />
      </Link>
      <Link to="/twitter">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link to="/telegram">
        <FontAwesomeIcon icon={faPaperPlane} />
      </Link>
      <Link to="/wordpress">
        <FontAwesomeIcon icon={faWordpress} />
      </Link>
      <Link to="/whatsapp">
        <FontAwesomeIcon icon={faComment} />
      </Link>
    </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
