import React from 'react';
import './Refinancing.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const CommercialLoan = () => {
  return (
    <div className="home-loans-container">
      <header className="home-loans-header">
        <h1>Commercial Loan        </h1>
      </header>
      <div className="home-loans-content" >
        <h2>Commercial Loan        </h2>
        <div className="arrow-down">⬇</div>
      </div>
      <div className="home-container">
      <div className="homebuyer-container">
            <div className="homebuyer-image-section">
                <img src="https://anakoskaphotography.com/wp-content/uploads/2021/04/your-own-diy-family-portrait.jpg" alt="First Home Buyer" className="homebuyer-image" />
            </div>
            <div className="homebuyer-text-section">
                <h1>Empower Your Business with Tailored Commercial Loans from Alphaa Financial Solutions</h1>
                <p>
                At Alphaa Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs. Whether you're seeking capital for expansion, equipment purchases, or working capital, our team is dedicated to finding the right financing option to fuel your growth.
               </p>
               <p>
               We offer personalized service and expert guidance throughout the loan process, ensuring you secure competitive rates and terms that align with your business objectives.
               </p>

                <p>
                Trust us to help you navigate the complexities of commercial financing and achieve your business goals with confidence.
                </p>
                <h2>Refinancing Services We Offer </h2>
                
                <div className="homebuyer-services">
                    <div className="homebuyer-service">
                        <h3>Custom Loan Packages for Your Business Needs      </h3>
                        <p>
                        We offer a range of commercial loan packages tailored to suit the specific needs of your business, from real estate acquisitions to equipment financing.
                         </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Competitive Interest Rates for Sustainable Growth</h3>
                        <p>
                        Our commercial loans come with competitive interest rates that help your business grow sustainably without compromising your cash flow.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Flexible Repayment Terms for Better Cash Flow Management</h3>
                        <p>
                        Choose from a variety of repayment terms that align with your business’s cash flow, ensuring that loan repayments are manageable and predictable.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Expert Support Throughout the Loan Process</h3>
                        <p>
                        Our team of commercial loan experts is dedicated to guiding you through every step of the loan process, from application to disbursement, ensuring a smooth and efficient experience.
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

export default CommercialLoan;
