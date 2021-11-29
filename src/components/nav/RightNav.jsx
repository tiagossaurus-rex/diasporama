import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Ul = styled.ul`
  z-index: 1;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
 
  
  li {
    padding: 18px 10px;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #eae2d2;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 40px;
    right: 0;
    height: 100vh;
    width: 100vw;
    margin-top: 70px;
    padding-top: 3.5rem;
    transition: transform 0.9s ease-in-out;
    margin: 0;
    
    li {
      color: black;
    }
  }
`;

const StyledLink  = styled(Link)`      
    padding:20px; 
    margin-right: 120px;
     text-decoration: none;
     justify-content: space-between;
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <StyledLink to="/Projects">Projects</StyledLink>
      <StyledLink to="/Reviews">Reviews</StyledLink>    
      <StyledLink to="/Contact">Contact</StyledLink>  
    </Ul>
  );
};

export default RightNav;