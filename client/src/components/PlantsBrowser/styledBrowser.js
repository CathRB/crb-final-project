import styled from "styled-components";
import browserBackground from "../../assets/browserBackground.jpg"

export const Main = styled.main`
h1{
  font-family: 'Poppins', sans-serif;
 text-align: center
}

input{
align-items: center;
}

`;

export const DivGrid = styled.div`
  z-index:-1;
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  max-width: fit-content;
  margin: 0 auto 100px auto;
  background-color: #89d297;
  
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr ;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr ;
  }
`
export const PlantBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  color: black;
  min-width: 350px;
 border: solid 1px;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   background-color: #EDF6f9; 
 p{
  overflow-wrap: break-word;
  text-align: center;
 
  color: #034925;
  font-family: 'Marcellus SC', serif;
 }

  img{
   
    width: 350px;
  height: 300px;
  object-fit: cover;
  }
`;

export const Footer = styled.footer`
display: flex;
justify-content: center;

p{
    margin-left: 20px;
    margin-right: 20px;
    
   }
`;

export default {
  Main,
    DivGrid,
    PlantBox,
    Footer,


};