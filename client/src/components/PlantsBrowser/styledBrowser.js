import styled from "styled-components";

export const Main = styled.main`
background-color:#c0d4b4;
max-width: 100vw;
min-height: 100vh;
margin-top: 15px;
padding-bottom: 7vh;
`;

export const HeaderBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1{
  font-family: 'Poppins', sans-serif;
 text-align: center
}

input{
  width: 30vw;
  height: 5vh;
  text-align: center;
  margin-bottom: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: none;
  outline: none;
  border-radius: 5px;
}

button{
  width: 20vw;
  height: 5vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  
}
`;

export const DivGrid = styled.div`
  z-index:-1;
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  max-width: fit-content;
  margin: 0 auto 25px auto;
  
  
  
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

export const ErrorBox = styled.p`
font-size:20px;
font-style: bold;
border: none;
outline: none;

`;

export const Footer = styled.footer`
display: flex;
justify-content: center;
margin-top: 8vh;

p{
  margin-left: 30px;
    margin-right: 30px;
    font-weight: 700;
    font-size: 16px;
    
   }

   button{
  width: 120px;
  border-radius: 10px;
border: solid 2px  #486454;
color: #9c7a6d;
font-size: 14px;
font-weight: 600;
font-family: 'Poppins', sans-serif;
background-color: #9acbaf;


&:disabled{
  opacity:0.3;
}
}
`;

export default {
  Main,
  HeaderBox,
    DivGrid,
    PlantBox,
    ErrorBox,
    Footer,


};