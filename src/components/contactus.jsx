import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faClock, faCalendar, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const contactus =()=>{
  return(
<div>
<section>
        <div class="container-contact">
        <div className="contact-us">
      <h2>Contact Us</h2>
      <p>Please feel free to ask if you have any further questions.</p>
      <ul className='infos'>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Sydney, Australia</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          <span>0468328227</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faClock} />
          <span>Mon - Fri: 9:00am - 5:00pm</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Weekend Appointments Only</span>
        </li>
      </ul>
      <div className="social-icons">
        <FontAwesomeIcon icon={faPaw} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faPaperPlane} />
        <FontAwesomeIcon icon={faWordpress} />
        <FontAwesomeIcon icon={faComment} />
      </div>
    </div>
            <div className='image-container'>
              <img src='https://alphaafin.com.au/wp-content/uploads/2024/08/close-up-person-working-call-center-1024x683.jpg' className='img-con'/>
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
export default contactus;
