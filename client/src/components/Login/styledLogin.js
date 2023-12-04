import styled from "styled-components";


export const Background = styled.img`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.5;


  @media (max-width: 600px) {
   min-height: 120vh;
    }
`;

export const Title = styled.h1`
 font-family: 'Poppins', sans-serif;
 color: #034925;

 @media (max-width: 1200px) {
    font-size: 2em;
  }
 `;

export const Form = styled.form`
 background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: solid 3px #034925;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  width: 35vw;
  min-height: 55vh;
  text-align: center;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);

  @media (max-width: 1200px) {
    top: 40%;
    width: 80vw;
    min-height: 45vh;
    margin-left: 21vw;
      }

  @media (max-width: 600px) {
    width: 75vw;
    min-height: 58vh;
    margin-left: 20vw;
    margin-top: 25vh;
      justify-content: flex-start
  }
`;

export const Container = styled.div`
 display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
  grid-template-columns: 1fr ;
  }
`;

export const Label = styled.label`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left:20px;
  text-align: left;
  font-size: 18px;
  color: #034925;
  font-weight:600;

  @media (max-width: 1200px) {
    font-size: 1.6em;
  
  }

  @media (max-width: 600px) {
    font-size: 0.9em;
    margin: 0;
      }
`;

export const Input = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  width: 300px;
  height: 30px;
  border: solid 1px  #034925;
  font-size: 16px;
 
  @media (max-width: 1200px) {
    font-size: 1.6em;
    width: 34vw;
  }

  @media (max-width: 600px) {
    font-size: 0.8em;
    margin: -2vh 0 3vh 0;
    width: 200px;
  }

  :focus{
    border-color : hsl(333deg, 100%, 44%);
    border-style: solid;
    border-width: 5px;
  }
`;

export const Button = styled.button`
  min-width: 8vw;
  min-height: 3vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  cursor: pointer;
border: solid 2px  #486454;
color: #9c7a6d;
font-size: 1.1em;
font-weight: 600;
font-family: 'Poppins', sans-serif;
background-color: #9acbaf;
margin-top: 3vh;
margin-bottom: 2vh;

@media (max-width: 1200px) {
    font-size: 1.6em;
    min-width: 30vw;
    min-height: 3.5vh;
  }

  @media (max-width: 600px) {
    font-size: 0.9em;
    min-width: 30vw;
    min-height: 4vh;
  }
`;

export const BottomLink=styled.p`
  font-size: 18px;
  color: #034925;
  font-weight:600;

  @media (max-width: 1200px) {
    font-size: 1.6em;
   }

   @media (max-width: 600px) {
    font-size: 1.1em;
   }
  `;

export const ErrorMessage = styled.p`
 font-family: 'Poppins', sans-serif;
 text-align: center;
 font-size: 1.1em;
 color: red;

 @media (max-width: 1200px) {
    font-size: 1.6em;
   }

   @media (max-width: 600px) {
    font-size: 1.1em;
   }
`;

export default {
  Background,  Title, Form, Container, Label, Input, Button, ErrorMessage,  BottomLink,
};