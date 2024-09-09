import React from 'react';
import './HomeLoan.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import './FirstHomeBuyer.css';

const FirstHomeBuyer = () => {
  return (
    <div className="home-loans-container">
      <header className="home-loans-header">
        <h1>First Home Buyer</h1>
      </header>
      <div className="home-loans-content" >
        <h2>First Home Buyer</h2>
        <div className="arrow-down">⬇</div>
      </div>
      <div className="home-container">
      <div className="homebuyer-container">
            <div className="homebuyer-image-section">
                <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Family-travel.jpg" alt="First Home Buyer" className="homebuyer-image" />
            </div>
            <div className="homebuyer-text-section">
                <h1>First Home Buyer At Alpha Financial Solutions</h1>
                <p>
                    At Alpha Financial Solutions, we understand that purchasing your first home is one of the most 
                    significant financial decisions you’ll ever make. As a first-time homebuyer, navigating the complexities 
                    of the real estate market and mortgage options can be overwhelming. That’s why we offer tailored financial 
                    solutions and expert guidance to help you make informed decisions and achieve your dream of homeownership.
                </p>

                <h2>Services Offered To First Home Buyers</h2>
                
                <div className="homebuyer-services">
                    <div className="homebuyer-service">
                        <h3>Personalized Mortgage Options:</h3>
                        <p>
                            We offer a range of mortgage products specially designed for first-time buyers, including fixed-rate 
                            and adjustable-rate mortgages. Our financial advisors work with you to find the best loan that fits 
                            your budget and long-term goals.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Pre-Approval Assistance:</h3>
                        <p>
                            Getting pre-approved for a mortgage is a critical first step. We guide you through the pre-approval 
                            process, helping you understand how much you can afford and giving you a competitive edge when making 
                            an offer on a home.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Down Payment Solutions:</h3>
                        <p>
                            Struggling with the down payment? Alpha Financial Solutions provides access to various programs and 
                            strategies to help you secure the funds needed for your down payment, whether through savings plans, 
                            grants, or special loan products.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>First-Time Buyer Incentives:</h3>
                        <p>
                            We help you take advantage of government programs and incentives specifically designed for first home 
                            buyers, such as tax credits, reduced-interest loans, and grants that can lower the overall cost of 
                            purchasing your home.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Expert Financial Guidance:</h3>
                        <p>
                            Our team of experienced financial advisors is here to support you at every step of the home-buying process. 
                            From understanding your budget to exploring mortgage options and closing the deal, we provide the expert 
                            advice you need to make confident decisions.
                        </p>
                    </div>

                    <div className="homebuyer-service">
                        <h3>Credit Counseling:</h3>
                        <p>
                            If you’re concerned about your credit score, we offer credit counselling services to help you improve 
                            your credit profile, making it easier to qualify for favourable mortgage terms.
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

export default FirstHomeBuyer;
