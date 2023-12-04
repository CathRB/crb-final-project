import styled from "styled-components";

export const Main = styled.main`
background-color:#c0d4b4;
max-width: 100vw;
min-height: 86vh;
margin-top: 1.5vh;
`;

export const HeaderBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1{
 font-family: 'Poppins', sans-serif;
 margin-bottom: 4vh;
 color: #034925;
 font-size: 3em;


 @media (max-width: 600px) {
  font-size: 1.5em;
  }
}

input{
  min-width: 25vw;
  min-height: 5vh;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: solid 2px  #486454;
  font-size: 1.2em;
  padding: 0;
  margin-bottom: 5vh;
  margin-right: 1vw;

  @media (max-width: 1200px) {
    font-size: 1.4em;
    min-width: 40vw;
  }

  @media (max-width: 600px) {
  margin-left: 0;
  margin-bottom: 2vh;
  font-size: 1.2em;
  }
}

button{
  min-width: 10vw;
  min-height: 5vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  cursor: pointer;
border: solid 2px  #486454;
color: #9c7a6d;
font-size: 1.2em;
font-weight: 600;
font-family: 'Poppins', sans-serif;
background-color: #9acbaf;
margin-left: 1vw;
margin-bottom: 5vh;

@media (max-width: 1200px) {
    font-size: 1.4em;
  
  }

@media (max-width: 600px) {
  margin-left: 0;
  margin-bottom: 2vh;
  font-size: 1.2em;
  }
}

div{
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
}
`;

export const DivGrid = styled.div`
   display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  max-width: fit-content;
  margin: 0 auto 0 auto;
  
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr  1fr;
  }

    @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr  ;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr ;
  }
`;

export const PlantBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  color: black;
  min-width: 360px;
  border: solid 1px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #EDF6f9; 
  cursor: pointer;

  @media (max-width: 1600px) {
    max-width: 360px;
  }

  @media (max-width: 1200px) {
    max-height: 435px;
    width: 370px;
  }

  @media (max-width: 600px) {
    max-width: 290px;
    min-height: 415px;
    margin: 0 0 20px 0;
  }

   p{
  overflow-wrap: break-word;
  text-align: center;
  color: #034925;
  font-family: 'Marcellus SC', serif;

  @media (max-width: 1200px) {
    font-size: 1.3em;
  }

  @media (max-width: 600px) {
   font-size: 1.1em;
  }
  }

  img{
  width: 360px;
  height: 300px;
  object-fit: cover;

  @media (max-width: 1600px) {
    max-width: 360px;
  }

  @media (max-width: 1200px) {
    max-width: 370px;
      }

  @media (max-width: 600px) {
    max-width: 330px;
  }
  }

  span{
    font-weight: 600;
    font-size: 1.1em;
  }

button{
  margin-top: 2vh;
    margin-bottom: 2vh;
border-radius: 10px;
border: solid 2px  #486454;
color: #9c7a6d;
font-size: 14px;
font-weight: 600;
font-family: 'Poppins', sans-serif;
background-color: #9acbaf;
cursor: pointer;

@media (max-width: 1200px) {
    font-size: 1.1em;
    }
    @media (max-width: 600px) {
    font-size: 1em;
    }
}

a{
  @media (max-width: 1200px) {
    font-size: 1.3em;
    }

    @media (max-width: 600px) {
    font-size: 1.1em;
    }
    }
`;

export const Name = styled.p`
font-weight: 600;
font-size: 1.1em;
`;

export const Light = styled.p`
max-width: 335px;
margin-left: 0.5vw;
margin-right:0.5vw;

@media (max-width: 1600px) {
max-width: 345px;
}

@media (max-width: 1200px) {
max-width: 355px;
}

@media (max-width: 600px) {
max-width: 280px;
}
`;

export const Reminder = styled.p`
max-width: 335px;
margin-left: 0.5vw;
margin-right:0.5vw;

@media (max-width: 600px) {
max-width: 280px;
}
`;

export const Loading=styled.p`
width: 335px;
margin-left: 0.5vw;
margin-right:0.5vw;

@media (max-width: 600px) {
max-width: 280px;
min-height: 415px;
}
`;

export const Footer = styled.footer`
display: flex;
justify-content: center;
margin-top: 8vh;
padding-bottom: 5vh;

p{
  margin-left: 30px;
  margin-right: 30px;
  font-weight: 700;
  font-size: 16px;

  @media (max-width: 1200px) {
    font-size: 1.4em;
    }

    @media (max-width: 600px) {
    font-size: 0.9em;
    }
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
cursor: pointer;

@media (max-width: 1200px) {
    font-size: 1.4em;
    width: 30vw;
    }

    @media (max-width: 600px) {
    font-size: 0.9em;
    width: 35vw;
    }

&:disabled{
opacity:0.3;
}
}
`;

export const ErrorMessage = styled.p`
font-family: 'Poppins', sans-serif;
text-align: center;
font-size: 1.7em;
color: red;
`;


export default {
Main,
HeaderBox,
DivGrid,
PlantBox,
Footer,
ErrorMessage,
Name,
Light,
Loading,
};