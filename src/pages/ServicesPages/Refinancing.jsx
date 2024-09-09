import React from 'react';
import './Refinancing.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Refinancing = () => {
  return (
    <div className="home-loans-container">
      <header className="home-loans-header">
        <h1>Refinancing</h1>
      </header>
      <div className="home-loans-content" >
        <h2>Refinancing</h2>
        <div className="arrow-down">⬇</div>
      </div>
      <div className="home-container">
      <div className="homebuyer-container">
            <div className="homebuyer-image-section">
                <img src="https://allyshanoellephotography.com/wp-content/uploads/2020/04/Milwaukee-Family-Pictures-Richfield-Historical-Society-Wisconsin_0090.jpg" alt="First Home Buyer" className="homebuyer-image" />
            </div>
            <div className="homebuyer-text-section">
                <h1>Refinancing at Alpha Financial Solutions </h1>
                <p>
                At Alpha Financial Solutions, we offer comprehensive refinancing services to help you optimize your current mortgage and achieve your financial goals. Whether you’re looking to lower your monthly payments, shorten your loan term, or access equity in your home, our team of experts is here to guide you through the refinancing process with ease and efficiency.
                 </p>

                <h2>Refinancing Services We Offer </h2>
                
                <div className="homebuyer-services">
                    <div className="homebuyer-service">
                        <h3>Lower Your Interest Rates</h3>
                        <p>
                        We analyze your existing loans to find opportunities for refinancing at lower interest rates, helping you save money and reduce your monthly payments.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Consolidate Multiple Loans for Simplicity</h3>
                        <p>
                        If you have multiple loans, we can help you consolidate them into a single, more manageable payment plan, making it easier to keep track of your finances.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Adjust Your Loan Terms for Better Flexibility</h3>
                        <p>
                        Whether you need to shorten or extend your loan term, we offer solutions to adjust your repayment plan according to your current financial situation and future goals.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Identify Hidden Costs and Fees</h3>
                        <p>
                        Our detailed loan review process uncovers any hidden costs or fees in your current loans, allowing you to make informed decisions and potentially renegotiate terms.
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

export default Refinancing;
