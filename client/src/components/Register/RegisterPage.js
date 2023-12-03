import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Context/UserContext";
import sendRegister from "./sendRegister";
import {
    Background, Title, Form, Container, Label, Input, Button, ErrorMessage,
} from "./styledRegister"
import registerBackground from "../../assets/registerLoginBackground.jpg"

const RegisterPage = () => {

    const navigate = useNavigate()
    const [registerInfo, setRegsiterInfo] = useState({});
    const [sending, setSending] = useState(false);
    const {setUser, errorMessage, setErrorMessage} = useContext(UserContext)


    const handleChange = (key, value) => {
      setRegsiterInfo({
          ...registerInfo,
          [key]: value,
        });
      };

 return (
<>
<Background src={registerBackground} alt="registerBackground" />
<Form onSubmit={(event) =>sendRegister( event, setSending, registerInfo, setUser, navigate, setErrorMessage)}>
<Title>Create your account</Title>
    <Container>
    <Label htmlFor = "firstName">First name: </Label>
    <Input required id="firstName" type="text" placeholder = "First name" onChange={(event) => {handleChange(event.target.id, event.target.value);  setErrorMessage(null)}}></Input>

    <Label htmlFor = "lastName">Last name: </Label>
    <Input required id="lastName" type="text" placeholder = "Last name" onChange={(event) => {handleChange(event.target.id, event.target.value);  setErrorMessage(null)}}></Input>

    <Label htmlFor = "email">Email address: </Label>
    <Input required id="email" type="email" placeholder = "Email address" onChange={(event) => {handleChange(event.target.id, event.target.value);  setErrorMessage(null)}}></Input>

    <Label htmlFor = "password">Password: </Label>
    <Input required id="password" type="password" placeholder = "Password" onChange={(event) =>{handleChange(event.target.id, event.target.value); setErrorMessage(null)}}></Input>

    <Label htmlFor = "confirmPassword">Email: </Label>
    <Input required id="confirmPassword" type="password" placeholder = "Confirm your password" onChange={(event) => {handleChange(event.target.id, event.target.value);  setErrorMessage(null)}}></Input>
    </Container>
    <Button type="Submit" disabled={sending}>{sending ? "Submitting information" : "Regsiter"} </Button>

    {errorMessage?(
    <ErrorMessage> {errorMessage} </ErrorMessage>
 ): (<></>)}

</Form>
</>
)
}
export default RegisterPage