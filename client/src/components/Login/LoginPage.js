import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Context/UserContext";
import loginBackground from "../../assets/registerLoginBackground.jpg"
import { Link } from 'react-router-dom';
import {
  Background, Title, Form, Container, Label, Input, Button  
} from "./styledLogin"


const LoginPage = () => {

    const navigate = useNavigate()
    const [logInfo, setLogInfo] = useState({});
    const [sending, setSending] = useState(false);
    const [errorMessage, setErrorMessage]=useState(null)
    const { setUser } = useContext(UserContext);

   
    const handleChange = (key, value) => {
        setLogInfo({
          ...logInfo,
          [key]: value,
        });
      };

    const handleSubmit = (event) => {
        setSending(true);
        event.preventDefault();
    
        fetch("/api/get-userInfo", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logInfo),
        })
          .then((response) => response.json())
          .then((response) => {
             if (response.status === 200) {
              setUser(response.data);
              sessionStorage.setItem('user', response.data._id)
              navigate(`/myGarden`);
            } else setErrorMessage(response.message);
          })
          .catch((error) => {
            setErrorMessage("Error during register process", error);
          })
          .finally(() => {
            setSending(false);
          });
      }; 

   


return (
<>
<Background src={loginBackground} alt="loginBackground" />
<Form onSubmit={handleSubmit}>
<Title>Log into your account</Title>
    <Container>
   
    <Label htmlFor = "email">Email address: </Label>
    <Input required id="email" type="email" placeholder = "Email address" onChange={(event) => handleChange(event.target.id, event.target.value)}></Input>

    <Label htmlFor = "password">Password: </Label>
    <Input required id="password" type="password" placeholder = "Password" onChange={(event) => handleChange(event.target.id, event.target.value)}></Input>

    </Container>
    <Button type="Submit" disabled={sending}>{sending ? "Submitting information" : "Log in"} </Button>
    <p>  Don't have an account? Register{' '} <Link to="/register"> here</Link>.</p>
    {errorMessage?(
    <p> {errorMessage} </p>
 ): (<></>)}

</Form>


</>
)

}

export default LoginPage