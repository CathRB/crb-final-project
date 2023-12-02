import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Context/UserContext";
import loginBackground from "../../assets/registerLoginBackground.jpg"
import { Link } from 'react-router-dom';
import sendLogin from "./sendLogin";
import {
  Background, Title, Form, Container, Label, Input, Button, ErrorMessage
} from "./styledLogin"


const LoginPage = () => {

    const navigate = useNavigate()
    const [logInfo, setLogInfo] = useState({});
    const [sending, setSending] = useState(false);
    const { setUser, errorMessage, setErrorMessage } = useContext(UserContext);

   
    const handleChange = (key, value) => {
        setLogInfo({
          ...logInfo,
          [key]: value,
        });
      };


return (
<>
<Background src={loginBackground} alt="loginBackground" />
<Form onSubmit= {(event) =>sendLogin( event, setSending, logInfo, setUser, navigate, setErrorMessage)}>

<Title>Log into your account</Title>
    <Container>
   
    <Label htmlFor = "email">Email address: </Label>
    <Input required id="email" type="email" placeholder = "Email address" onChange={(event) => {handleChange(event.target.id, event.target.value); setErrorMessage(null)}}></Input>

    <Label htmlFor = "password">Password: </Label>
    <Input required id="password" type="password" placeholder = "Password" onChange={(event) => {handleChange(event.target.id, event.target.value); setErrorMessage(null)}}></Input>

    </Container>
    <Button type="Submit" disabled={sending}>{sending ? "Submitting information" : "Log in"} </Button>
    <p> If you don't have an account, please go to the {' '} <Link to="/register"> register </Link> {' '}  section</p>
    {errorMessage?(
    <ErrorMessage> {errorMessage} </ErrorMessage>
 ): (<></>)}

</Form>


</>
)

}

export default LoginPage