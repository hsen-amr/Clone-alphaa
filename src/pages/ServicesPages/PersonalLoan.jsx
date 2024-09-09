import React from 'react';
import './PersonalLoan.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const PersonalLoan = () => {
  return (
    <div className="home-loans-container">
      <header className="home-loans-header">
        <h1>Personal Loan
        </h1>
      </header>
      <div className="home-loans-content" >
        <h2>Personal Loan
        </h2>
        <div className="arrow-down">⬇</div>
      </div>
      <div className="home-container">
      <div className="homebuyer-container">
            <div className="homebuyer-image-section">
                <img src="https://lakemacfamilylife.com.au/wp-content/uploads/2022/02/parenting-a-tween-main.jpg" alt="First Home Buyer" className="homebuyer-image" />
            </div>
            <div className="homebuyer-text-section">
                <h1>Achieve Your Personal Goals with Alphaa Financial Solutions' Personal Loans                </h1>
                <p>
                At Alphaa Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs.
Whether you're looking to consolidate debt, fund a major purchase, or cover unexpected expenses, our team is dedicated to finding the right loan solution for you.
    </p>
                  <p>
                  We provide personalized support throughout the application process, ensuring you secure the best rates and terms available.
                  Trust us to make your financial goals more achievable with tailored, flexible personal loan solutions.
                    </p>            
                <div className="homebuyer-services">
                    <div className="homebuyer-service">
                        <h3>Flexible Loan Amounts for Your Needs </h3>
                        <p>
                        Borrow the exact amount you need, whether it’s for a small expense or a significant purchase. Our personal loans offer the flexibility to choose the loan amount that best suits your needs.
                                                 </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Quick and Easy Application Process </h3>
                        <p>
                        Apply for a personal loan with ease through our streamlined application process. We prioritize fast approvals, so you can access the funds you need without delay.
                                                 </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Competitive Interest Rates for Affordable Repayments</h3>
                        <p>
                        Our personal loans come with competitive interest rates that make repayments manageable, helping you achieve your financial goals without unnecessary stress.                                                 
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Repayment Plans Tailored to Your Budget</h3>
                        <p>
                        Choose from a variety of repayment plans that fit your budget and financial situation. We offer flexible terms to ensure your loan is repaid comfortably and on your terms.
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

export default PersonalLoan;
