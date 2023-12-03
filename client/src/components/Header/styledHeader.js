import styled from "styled-components";
import {Link} from "react-router-dom"


export const NavBar = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
background-color: #486454;
min-height: 10vh;

@media (max-width: 600px) {
  display: flex;
 flex-direction: column;
}

p{
color: #e29578;
font-size: 1.5em;
font-weight: 600;
font-family: 'Poppins', sans-serif;

@media (max-width: 600px) {
  font-size: 1em;
}

}
`;

export const PathLink = styled(Link)`
text-decoration: none;
color: #e29578;
font-size: 1.5em;
font-weight: 600;
font-family: 'Poppins', sans-serif;

@media (max-width: 600px) {
  font-size: 0.9em;
}

`;

export const Button = styled.button`
border: none;
background-color: transparent;
color: #e29578;
font-size: 1.5em;
font-weight: 600;
font-family: 'Poppins', sans-serif;

@media (max-width: 600px) {
  font-size: 0.9em;
}
`;

export default {
  NavBar,
  PathLink,
  Button,
 };
