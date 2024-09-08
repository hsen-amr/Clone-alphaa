import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faClock, faCalendar, faPaw, faComment , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './CSS/HomePage.css';

// Styled components for content boxes (Our Story and Our Mission)
const ContentSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
  background-color: #23232d;
  border-top: 5px solid #ff6347;
`;


const ContentBox = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 40%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 5px solid #ff6347;
`;

const ContentTitle = styled.h2`
  color: #333;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ContentText = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 20px;
`;
const ImageContainer = styled.div`
  width: 40%;
  position: relative;
  overflow: hidden;
  margin-left: 50px; 
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 5px solid #ff6347;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: opacity 0.5s ease;
`;

const MoreLink = styled.a`
  color: #333;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
    
`;
const HomePage = () => {
  
  const [imageIndex, setImageIndex] = useState(0);
  
  const [heading, setHeading] = useState('Welcome to Our Website');
  const [paragraph, setParagraph] = useState('Your success, our commitment.');
  const [buttonText, setButtonText] = useState('Get Started');
  const images = [
    // Replace with your image URLs
    'https://tinybeans.com/wp-content/uploads/2024/01/more-joy-in-familys-every-day-2.jpg',
    'https://www.kvc.org/wp-content/uploads/2018/07/protectivefactors_WP-1038x576.jpg',
    // Add more image URLs as needed
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      // Update heading, paragraph, and button text based on the image index
      if (imageIndex === 0) {
        setHeading('Welcome to Our Website');
        setParagraph('Your success, our commitment.');
        setButtonText('Get Started');
      } else if (imageIndex === 1) {
        setHeading('Experience Our Services');
        setParagraph('Discover how we can help you achieve your goals.');
        setButtonText('Learn More');
      } else {
        setHeading('Join Our Community');
        setParagraph('Connect with like-minded individuals and share your experiences.');
        setButtonText('Join Now');
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Home Loans",
      description: "At Alpha Financial Solutions, we specialize in guiding you through every step of your home loan journey.",
      icon: "🏠"
    },
    {
      title: "First Home Buyer",
      description: "A first-time homebuyer is an individual or household purchasing a home for the first time. First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible.",
      icon: "🏡"
    },
    {
      title: "Refinancing",
      description: "Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.",
      icon: "🔄"
    },
    {
      title: "Investment Property",
      description: "An investment property is a real estate asset purchased with the intention of generating income or profit, rather than being used as a primary residence. These properties can include residential homes, apartment buildings, commercial spaces, or land. Investors typically buy these properties to earn rental income, benefit from property appreciation over time,",
      icon: "🏢"
    },
    {
      title: "Self Managed Super Fund (SMSF)",
      description: "At Alpha Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential. Whether you’re looking to acquire residential or commercial property through your SMSF, our team provides tailored advice and innovative financing solutions to suit your needs.",
      icon: "💰"
    },
    {
      title: "Asset Finance",
      description: "At Alpha Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.",
      icon: "🚗"
    },
    {
      title: "Personal Loans",
      description: "At Alpha Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs. Whether you’re looking to consolidate debt, fund a major purchase, or cover unexpected expenses, our team is dedicated to finding the right solution for you.",
      icon: "💳"
    },
    {
      title: "Expat Loans",
      description: "At Alpha Financial Solutions, we offer specialized expat loan services designed to meet the unique needs of expatriates. Whether you’re looking to purchase a property, invest, or manage financial obligations in a new country, our expert team provides tailored solutions and comprehensive support.",
      icon: "🌎"
    },
    {
      title: "Commercial/Business Loans",
      description: "At Alpha Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs. Whether you’re seeking capital for expansion, equipment purchase, or working capital, our team is dedicated to finding the right financing option to fuel your growth.",
      icon: "💼"
    }
  ];
  

  


  return (
    <div className="home-page">
      <section className="hero"
        style={{ backgroundImage: `url(${images[imageIndex]})` }}>
        
        <h1>{heading}</h1>
        <p>{paragraph}.</p>
        <button className="cta-button">{buttonText}</button>
      </section>
      <section>
      <ContentSection>
        <ContentBox>
          <ContentTitle>Our Story</ContentTitle>
          <ContentText>
            Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.
          </ContentText>
          <MoreLink href="#">KNOW MORE</MoreLink>
        </ContentBox>

        <ContentBox>
          <ContentTitle>Our Mission</ContentTitle>
          <ContentText>
            At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.
          </ContentText>
          <MoreLink href="#">KNOW MORE</MoreLink>
        </ContentBox>
      </ContentSection>
      </section>
      <section>
      <div className="wrapper">

      <div className="container">
        <div className="card">
          <h2 className="card-title">         🏡Home Loans</h2>
          <p className="card-text">
            At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey.
            Whether you're a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, 
            or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">🏡First Home Buyer</h2>
          <p className="card-text">
            A first-time homebuyer is an individual or household purchasing a home for the first time. 
            First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, 
            which aim to make homeownership more accessible.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">🏡Refinancing</h2>
          <p className="card-text">
            Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, 
            such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Home Loans</h2>
          <p className="card-text">
            At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey.
            Whether you're a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, 
            or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">First Home Buyer</h2>
          <p className="card-text">
            A first-time homebuyer is an individual or household purchasing a home for the first time. 
            First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, 
            which aim to make homeownership more accessible.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Refinancing</h2>
          <p className="card-text">
            Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, 
            such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage.
          </p>
        </div>

        
      </div>

      <div className="image-section">
        
                    <img className='side-image' src={images[imageIndex]} alt="Changing Image" />
      </div>
    </div>
      </section>




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

export default HomePage;
