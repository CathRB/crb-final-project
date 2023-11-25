import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Background, Title, Form, Container, Label, Input, Button  
} from "./styledRegister"
import registerBackground from "../../assets/registerBackground.jpg"



const RegisterPage = () => {

    const navigate = useNavigate()
    const [registerInfo, setRegsiterInfo] = useState({});
    const [sending, setSending] = useState(false);
    const [errorMessage, setErrorMessage]=useState(null)


    const handleChange = (key, value) => {
      setRegsiterInfo({
          ...registerInfo,
          [key]: value,
        });
      };

   const handleSubmit = (event) => {
        setSending(true);
        event.preventDefault();
    
        fetch("/api/add-user", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerInfo),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.status === 201) {
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
<Background src={registerBackground} alt="registerBackground" />
<Form onSubmit={handleSubmit}>
<Title>Register your account</Title>
    <Container>
    <Label htmlFor = "firstName">First name: </Label>
    <Input required id="firstName" type="text" placeholder = "First name" onChange={(event) => handleChange(event.target.id, event.target.value)}></Input>

    <Label htmlFor = "lastName">Last name: </Label>
    <Input required id="lastName" type="text" placeholder = "Last name" onChange={(event) => handleChange(event.target.id, event.target.value)}></Input>

    <Label htmlFor = "email">Email address: </Label>
    <Input required id="email" type="email" placeholder = "Email address" onChange={(event) => handleChange(event.target.id, event.target.value)}></Input>

    <Label htmlFor = "password">Password: </Label>
    <Input required id="password" type="password" placeholder = "Password" onChange={(event) => handleChange(event.target.id, event.target.value)}></Input>

    <Label htmlFor = "confirmPassword">Email: </Label>
    <Input required id="confirmPassword" type="password" placeholder = "Confirm your password" onChange={(event) => handleChange(event.target.id, event.target.value)}></Input>
    </Container>
    <Button type="Submit" disabled={sending}>{sending ? "Submitting information" : "Regsiter"} </Button>

    {errorMessage?(
    <p> {errorMessage} </p>
 ): (<></>)}

</Form>


</>
)

}

export default RegisterPage