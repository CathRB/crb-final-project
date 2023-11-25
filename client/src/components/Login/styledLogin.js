import styled from "styled-components";




export const Title = styled.h1`
`

export const Form = styled.form`
 background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  width: 40vw;
  height: 50vh;
  text-align: center;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

export const Container = styled.div`
 display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

export const Label = styled.label`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left:20px;
  text-align: left;

`;

export const Input = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
margin-right: 20px;
  width: 300px;
  height: 20px;

  :focus{
    border-color : hsl(333deg, 100%, 44%);
    border-style: solid;
    border-width: 5px;
  }
`;

export const Button = styled.button`
`

export default {
    Title, Form, Container, Label, Input, Button   

};