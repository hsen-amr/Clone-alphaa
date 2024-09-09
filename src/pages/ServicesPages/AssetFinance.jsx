import React from 'react';
import './Refinancing.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const AssetFinance = () => {
  return (
    <div className="home-loans-container">
      <header className="home-loans-header">
        <h1>Asset Finance
        </h1>
      </header>
      <div className="home-loans-content" >
        <h2>Asset Finance
        </h2>
        <div className="arrow-down">⬇</div>
      </div>
      <div className="home-container">
      <div className="homebuyer-container">
            <div className="homebuyer-image-section">
                <img src="https://mommypotamus.com/wp-content/uploads/family-tradition-ideas3.jpg" alt="First Home Buyer" className="homebuyer-image" />
            </div>
            <div className="homebuyer-text-section">
                <h1>Secure the Equipment and Assets Your Business Needs with Alphaa Financial Solutions                </h1>
                <p>
                At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease.
Whether you're looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.
We streamline the application process and work to secure competitive rates, ensuring you get the best possible terms to support your personal or business objectives.
Trust us to simplify your asset and vehicle financing, so you can focus on what matters most.     </p>
                              
                <div className="homebuyer-services">
                    <div className="homebuyer-service">
                        <h3>Flexible Financing for a Wide Range of Assets</h3>
                        <p>
                        From machinery to vehicles, we provide financing options that cover a broad spectrum of business assets, ensuring you have the right tools to succeed.                                                 </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Preserve Cash Flow with Tailored Repayment Plans</h3>
                        <p>
                        Our asset finance solutions offer flexible repayment plans that align with your cash flow, allowing you to maintain liquidity while investing in essential assets.                                                </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Competitive Rates for Cost-Effective Asset Acquisition</h3>
                        <p>
                        Benefit from competitive interest rates that make it easier and more affordable to finance the assets your business needs to grow and thrive.                                                </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Expert Guidance Throughout the Financing Process</h3>
                        <p>
                        Our team of asset finance specialists is here to guide you through the entire financing process, providing personalized support to ensure a seamless experience.                                                </p>
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

export default AssetFinance;
