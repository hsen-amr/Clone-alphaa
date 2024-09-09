import React from 'react';
import './Selfmanaged.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Selfmanaged = () => {
  return (
    <div className="home-loans-container">
      <header className="home-loans-header">
        <h1>Self-Managed Super Fund (SMSF) Lending
        </h1>
      </header>
      <div className="home-loans-content" >
        <h2>Self-Managed Super Fund (SMSF) Lending
        </h2>
        <div className="arrow-down">⬇</div>
      </div>
      <div className="home-container">
      <div className="homebuyer-container">
            <div className="homebuyer-image-section">
                <img src="https://images.pexels.com/photos/1648358/pexels-photo-1648358.jpeg" alt="First Home Buyer" className="homebuyer-image" />
            </div>
            <div className="homebuyer-text-section">
                <h1>Maximize Your Retirement Savings with Alphaa Financial Solutions' SMSF               </h1>
                <p>
                At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential.
                Whether you're looking to acquire residential or commercial property through your SMSF, our team provides tailored advice and innovative financing solutions to suit your needs.  </p>
                  <p>
                  With our deep understanding of SMSF regulations and market trends, we ensure a seamless process, allowing you to leverage your superannuation for strategic investment opportunities and achieve your long-term financial goals.
                  </p>            
                <div className="homebuyer-services">
                    <div className="homebuyer-service">
                        <h3>Tailored Lending Solutions for SMSFs    </h3>
                        <p>
                        Our SMSF loans are designed specifically for the unique requirements of self-managed super funds, providing you with the flexibility to invest in residential or commercial property.
                                                                         </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Competitive Interest Rates to Maximize Returns </h3>
                        <p>
                        Take advantage of our competitive interest rates that help you maximize the returns on your SMSF property investments, ensuring your retirement savings grow efficiently.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Expert Guidance on SMSF Regulations                        </h3>
                        <p>
                        Navigating SMSF regulations can be complex, but our team of experts is here to provide personalized advice and support, ensuring compliance and optimal financial outcomes.
                                                </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Flexible Repayment Options for Financial Security                        </h3>
                        <p>
                        We offer flexible repayment plans that align with your SMSF’s cash flow, helping you manage your retirement savings with confidence and ease.
                                                                        </p>
                    </div>
                </div>
            </div>
        </div>
</div>

    <div className="estimate-container">
      <div className="estimate-content">
        <div className="estimate-text">
          <h2>How To Estimate Mortgage Payments</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="estimate-button">
          <button>INTEREST RATE</button>
        </div>
      </div>
    </div>
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

export default Selfmanaged;
