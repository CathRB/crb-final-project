import styled from "styled-components";


export const Main = styled.main`
background-color:#c0d4b4;
max-width: 100vw;
height: 86vh;
margin-top: 15px;

h1{
  text-align: center;
  font-size: 26px;
   font-style: bold;

}
`;

export const DivGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr ;
  grid-template-columns: 1fr 1fr ;
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
`;

export const HeaderBox=styled.div`
display: flex;
min-width: 40vw;
justify-content: space-between;

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
  
`;
  
export const TaskIcon=styled.img`
width: 40px;
height: 40px;
padding-left: 10px;
padding-right: 10px;
padding-top: 20px;
`;





export const GeneralBox=styled.div`

padding-left: 40px;
width: 277px;

p {
text-align: left;
}

`;

export const RecomandedCareBox=styled.div`
`;

export const MyCareBox=styled.div`
margin-left: 180px;
`;

export const MiddleBox=styled.div`
display: flex;
min-width: 45vw;
justify-content: flex-start;

`;


export const BottomBox=styled.div`
display: flex;
justify-content: flex-end;
min-width: 45vw;
`;
export const GarbageButton=styled.button`
  border: none;
background-color: transparent;
margin-bottom: 3px;

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
`;

export const Footer=styled.footer`
display: flex;
justify-content: center;

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

&:disabled{
  opacity:0.3;
}
}
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
    Footer
};