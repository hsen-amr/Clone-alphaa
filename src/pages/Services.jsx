import React from 'react';
import styled from 'styled-components';
import { FaHandshake, FaRegMoneyBillAlt, FaChartLine } from 'react-icons/fa';


const ServicesContainer = styled.div`
  padding: 3rem 2rem;
  background-color: #f9f9f9;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: white;
  padding: 2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }

  h2 {
    font-size: 1.5rem;
    margin: 1rem 0;
  }`;

const Services = () => {
  return (
    <ServicesContainer>
    <h1>Our Services</h1>
    <ServicesGrid>
      <ServiceCard>
        <FaHandshake size={40} />
        <h2>Financial Consulting</h2>
        <p>We provide expert financial consulting to help you manage your finances and grow your wealth.</p>
      </ServiceCard>
      <ServiceCard>
        <FaRegMoneyBillAlt size={40} />
        <h2>Investment Planning</h2>
        <p>Our team assists with tailored investment strategies to secure your financial future.</p>
      </ServiceCard>
      <ServiceCard>
        <FaChartLine size={40} />
        <h2>Wealth Management</h2>
        <p>Comprehensive wealth management services to safeguard your financial well-being.</p>
      </ServiceCard>
    </ServicesGrid>
  </ServicesContainer>
  );
};

export default Services;
