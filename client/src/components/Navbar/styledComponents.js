import styled from "styled-components";
import { Link } from "react-scroll";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #ffffff;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;

  &:hover,
  &.active {
    color: #760fdd;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #760fdd;
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const ContactButton = styled(Link)`
  background-color: #00bcd4;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-left: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    order: 1;
    margin: 0.5rem 0 0 auto;
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-left: 1rem;
    order: 2;
  }
`;

export {
  NavContainer,
  NavContent,
  Logo,
  NavLinks,
  NavLink,
  ContactButton,
  MobileToggle,
};
