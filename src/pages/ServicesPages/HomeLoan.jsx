import React from 'react';
import './HomeLoan.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const HomeLoans = () => {
  return (
    <div className="home-loans-container">
      <header className="home-loans-header">
        <h1>Home Loans</h1>
      </header>
      <div className="home-loans-content">
        <h2>Home Loans</h2>
        <div className="arrow-down">⬇</div>
      </div>
      <div className="home-container">
      <h2 className="title">Alphaa Financial Solutions</h2>
      <h1 className="main-heading">
        We Offer A Variety Of Home Loan Options Tailored To Suit Your Individual Needs
      </h1>
      <h3 className="subheading">Our Home Loan Services</h3>

      <div className="services-container">
        {/* Service 1 */}
        <div className="service-card">
          <img src="https://www.theforage.com/blog/wp-content/uploads/2024/01/jobs-with-highest-satisfaction.jpg" alt="First Home Buyer" className="service-image" />
          <h3>First Home Buyer</h3>
          <p>
            First home buyers represent a significant portion of the real estate market, often driven by
            the desire for stability, investment in property, and the opportunity to personalize a living space.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <img src="https://m.media-amazon.com/images/G/03/HR/eu-wfs/Amazon_employee_wearing_a_vest_blue_tshirt_and_gloves_handling_an_Amazon_parcel_v2.jpg" alt="Refinancing" className="service-image" />
          <h3>Refinancing</h3>
          <p>
            Refinancing involves replacing an existing mortgage with a new loan, typically to take advantage of better
            terms, such as lower interest rates, reduced monthly payments, or a shorter loan term.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/240117205958-online-job-hunting-stock-image-restricted.jpg?c=16x9&q=w_800,c_fill" alt="Investment Property" className="service-image" />
          <h3>Investment Property</h3>
          <p>
            An investment property is real estate purchased primarily for the purpose of generating income or profit.
            Unlike a primary residence, where the owner lives.
          </p>
        </div>
      </div>
    </div>

    <div className="home-loan-container-2">
      <div className="home-loan-content-2">
        <div className="home-loan-image-2">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65f738b4d66e312f6e39f776/6af3c4f2-12be-486d-8eed-1bd2f8de8922/Keys+hand+over+2.png" // Replace with your image URL
            alt="Happy family with house keys"
          />
        </div>
        <div className="home-loan-text-2">
          <div className="loan-category-2">
            <span className="category-badge-2">Best Home Loans</span>
          </div>
          <h2 className="loan-heading-2">Different Types Of Home Loans</h2>
          <p className="loan-description-2">
            To help you determine the best loan option, we have four different types of home loans.
          </p>
          <div className="loan-types-2">
            <div className="loan-type-2">
              <h3>Fixed-Rate Home Loan</h3>
              <p>Provides stability with fixed payments but may have higher total interest.</p>
            </div>
            <div className="loan-type-2">
              <h3>Variable-Rate Home Loan</h3>
              <p>Offers potentially lower payments if rates decrease, but carries risk if rates rise.</p>
            </div>
            <div className="loan-type-2">
              <h3>Interest-Only Home Loan</h3>
              <p>Lower initial payments but higher total interest payable.</p>
            </div>
            <div className="loan-type-2">
              <h3>Hybrid Home Loan</h3>
              <p>Combines stability of fixed rate initially with potential savings of variable rate later.</p>
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

export default HomeLoans;
