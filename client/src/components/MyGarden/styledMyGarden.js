import styled from "styled-components";


export const Main = styled.main`
background-color:#c0d4b4;
max-width: 100vw;
min-height: 86vh;
margin-top: 15px;
padding-bottom: 7vh;

h1{
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 26px;
   font-style: bold;
   color: #034925;
   padding-top: 2vh;
}

`;

export const EmptyGarden = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;

`;


export const DivGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr ;
  grid-template-columns: 1fr 1fr ;
  max-width: fit-content;
  margin: 0 auto 25px auto;
   
  
  @media (max-width: 1600px) {
    grid-template-columns: 1fr ;
  }

    @media (max-width: 1200px) {
    grid-template-columns: 1fr   ;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr ;
  }
`
export const PlantBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  color: black;
  min-width: 40vw;
  min-height: 75vh;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  background-color:#f8fcf4;
  margin-left:45px;
  margin-right: 45px;

  @media (max-width: 1600px) {
    max-width: 82.5vw;
  }

  @media (max-width: 1200px) {
    font-size:1.3em;
    justify-content: flex-start;
    max-width: 88vw;
  }

  span{
    font-weight: 600;
    font-size: 1.1em;
  }
`;

export const HeaderBox=styled.div`
display: flex;
min-width: 40vw;
justify-content: space-between;

@media (max-width: 600px) {
justify-content: flex-start;
flex-direction: column
 }

h2 {
font-family: 'Marcellus SC', serif;
font-size: 25px;
color: #034925;
}
`;


export const PlantPicture=styled.img`
  width: 350px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px 0 20px 0;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  
  @media (max-width: 1600px) {
   width: 35vw;
  }

  @media (max-width: 1200px) {
    width: 35vw;
  }

  @media (max-width: 600px) {
   width: 88vw;
    border-radius: 20px
}

`;
  
export const TaskIcon=styled.img`
width: 40px;
height: 40px;
padding-left: 10px;
padding-right: 10px;
padding-top: 20px;

@media (max-width: 600px) {
  padding-left: 12vw;;
}

`;


export const GeneralBox=styled.div`
padding-left: 40px;
width: 277px;

p {
text-align: left;
}
`;

export const RecomandedCareBox=styled.div`

@media (max-width: 1600px) {
  width: 30vw;
  }

@media (max-width: 1200px) {
  width: 40vw;
  }

  @media (max-width: 600px) {
    width: 70vw;
margin-left:8vw;
}
`;

export const MyCareBox=styled.div`
margin-left: 180px;

@media (max-width: 1600px) {
  margin-left:6vw;
  }

@media (max-width: 1200px) {
  margin-left:-2vw;
  }

  @media (max-width: 600px) {
  margin-left:8vw;
  width: 70vw;
  }
`;

export const MiddleBox=styled.div`
display: flex;
min-width: 45vw;
justify-content: flex-start;


@media (max-width: 1600px) {
  min-width: 65vw;
  }

    @media (max-width: 1200px) {
      min-width: 85vw;
      font-size: 0.9em;
      margin-top:2vh;
  }

  @media (max-width: 600px) {

justify-content: flex-start;
flex-direction: column
}

`;


export const BottomBox=styled.div`
display: flex;
justify-content: flex-end;
min-width: 45vw;

@media (max-width: 1600px) {
  min-width: 68vw;
  }

    @media (max-width: 1200px) {
      min-width: 90vw;
      margin-top: 3vh;
  }

p{
  margin-left: 40px;
    margin-right: 20px;
    font-weight: 700;
    font-size: 16px;
}
`;

export const GarbageButton=styled.button`
border: none;
background-color: transparent;
margin-bottom: 3px;

@media (max-width: 1600px) {
  margin-right: 1vw;
  }

  @media (max-width: 1200px) {
  margin-right: 5vh;
    }

img{
  height:30px;
  width: 30px;
 }
`;

export const SettingsButton=styled.button`
border-radius: 10px;
border: solid 2px  #486454;
color: #9c7a6d;
font-size: 14px;
font-weight: 600;
font-family: 'Poppins', sans-serif;
background-color: #9acbaf;
margin-bottom: 5px;
margin-right: 150px;


@media (max-width: 1600px) {
  margin-right: 12vw;
  }

  @media (max-width: 1200px) {
    margin-right: 6vw;
    font-size: 0.9em;
  }

  @media (max-width: 600px) {
    margin-right: 6vw;
    margin-bottom: 1vh;
    font-size: 0.8em;
  }
`;

export const Footer=styled.footer`
display: flex;
justify-content: center;
margin-top: 8vh;

p{
    margin-left: 20px;
    margin-right: 20px;
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

@media (max-width: 1200px) {
  font-size: 1.2em;
  min-width: 20vw;
  }

&:disabled{
  opacity:0.3;
}
}
`;

export const YesNoButton=styled.button`

  width: 80px;
  border-radius: 10px;
border: solid 2px  #486454;
color: #9c7a6d;
font-size: 14px;
font-weight: 600;
font-family: 'Poppins', sans-serif;
background-color: #9acbaf;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 10px;

&:disabled{
  opacity:0.3;
}
`;

export const ErrorMessage = styled.p`
 font-family: 'Poppins', sans-serif;
 text-align: center;
 font-size: 1.7em;
 color: red;
`;


export const Test = styled.img`
height: 200px;
width: 180px;
   border-radius:0% 70% 50% 70%;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
 `;

export const AAA = styled.img`
height: 850px;
width: auto;
border-radius: 50% 0 0 40%;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const PictureBox=styled.div`

border-radius:0% 70% 50% 70%;
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
position: absolute;
  top: 150px;
  left: 40px;

`;

export const PictureTest=styled.div`
height: 800px;
width: 180px;
object-fit: cover;
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
position: absolute;
  top: 120px;
  left: 1455px;
  border-radius: 70% 0 0 70%;

`;


export default {
    Main,
    DivGrid,
    PlantBox,
    HeaderBox,
    GeneralBox,
    RecomandedCareBox,
    MyCareBox,
    MiddleBox,
    BottomBox,
    PlantPicture,
    TaskIcon,
    GarbageButton,
    SettingsButton,
    Footer,
    YesNoButton,
    ErrorMessage,
    Test,
    AAA,
    PictureBox,
    PictureTest

};