import styled from "styled-components";
import {Link} from "react-router-dom"


export const NavBar = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
background-color: #047c5E;
height: 10vh;
`;

export const PathLink = styled(Link)`
text-decoration: none;
color: #e29578;
font-size: 24px;
font-weight: 600;

font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
border: none;
background-color: transparent;

color: #e29578;
font-size: 24px;
font-weight: 600;

font-family: 'Poppins', sans-serif;
`;

export default {
  NavBar,
  PathLink,
  Button,
 };
