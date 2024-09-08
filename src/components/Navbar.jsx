import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the header
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: #333;
  color: white;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #ddd;

  & > div {
    margin-right: 30px;
    display: flex;
    align-items: center;
  }

  span {
    margin-right: 5px;
    color: #ff6347;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;

const CallButton = styled.a`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5533d;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const DropdownMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 1rem 0;
  display: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
  width: 200px;
`;

const DropdownItem = styled.li`
  padding: 0.75rem 1.5rem;
  text-align: left;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: #green;
  }
`;

const NavItem = styled.div`
  position: relative;

  &:hover ${DropdownMenu} {
    display: block;
  }
`;

const Navbar = () => {
  return (
    <>
      {/* Header section with logo and contact info */}
      <HeaderContainer>
        <ContactInfo>
          <ContactItem>
            <span role="img" aria-label="location">📍</span> Sydney, Australia
          </ContactItem>
          <ContactItem>
            <span role="img" aria-label="phone">📞</span> 0468328227
          </ContactItem>
          <ContactItem>
            <span role="img" aria-label="clock">⏰</span> Mon - Fri: 9:00am - 5:00pm
          </ContactItem>
        </ContactInfo>
      </HeaderContainer>

      {/* Navigation section with logo and menu items */}
      <Nav>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>

          {/* Services Dropdown */}
          <NavItem>
            <NavLink to="/services">Services</NavLink>
            <DropdownMenu>
              <DropdownItem>
                <NavLink to="/services/home-loan">Home Loan</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/services/first-home-buyer">First Home Buyer</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/services/refinancing">Refinancing</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/services/commercial-loan">Commercial Loan</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/services/asset-finance">Asset Finance</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/services/personal-loan">Personal Loan</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/services/smsf-lending">Self-Managed Super Fund (SMSF) Lending</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>

          <NavLink to="/faqs">FAQ's</NavLink>
        </NavLinks>
        <CallButton href="tel:0468328227">CALL US ANYTIME</CallButton>
      </Nav>
    </>
  );
};

export default Navbar;
