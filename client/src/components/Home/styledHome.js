import styled from "styled-components";

export const Main = styled.main`
background-color:#c0d4b4;
max-width: 100vw;
min-height: 86vh;
margin-top: 1.5vh;
`;


export const Title=styled.h1`
 font-family: 'Poppins', sans-serif;
 margin-bottom: 4vh;
 color: #034925;
 text-align: center;
 padding-top: 5vh;
 margin-bottom: 0;
 margin-top: 0;
 font-size: 3em;
`;

export const Container=styled.div`
display: grid;
justify-items: center;
grid-template-rows: 1fr 1fr 1fr ;
grid-template-columns: 1fr ;
max-width: fit-content;
margin: 0 auto 0 auto;
`;

export const SectionBox=styled.div`
display: flex;
flex-direction: column;
margin-top: 5vh;
margin-bottom: 5vh;
align-items: center;

h2{
    color: #e29578;
    text-align: center;
    font-size:2.3em;
    background-color: whitesmoke;
    min-width:30vw; 
    background-color: #486454;
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
   }
`;

export const Warning=styled.h3`

color: whitesmoke;
text-align: center;
font-family: 'Poppins', sans-serif;
letter-spacing:2px;
`;

export const PictureAndText=styled.div`
grid-template-rows: 1fr 1fr ;
grid-template-columns: 1fr ;

width: 98%;
height:100%;
  background-color:  #486454;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  

  p{
    font-family: 'Poppins', sans-serif;
    color: #e29578;
    letter-spacing:1px;
    text-align: center;
    font-size:1.3em;
    background-color: #486454;
    width: 80%;
    margin-bottom: 5vh;
    margin-left: auto;
    margin-right: auto;
    
}


`;


export const PictureBox=styled.div`
display: flex;
justify-content: space-around;
`;


export const Image=styled.img`
width: 450px;
height: auto;
object-fit: cover;
border-radius: 10px;
border: solid 3px #e29578;
`;



export default {
    Main,
    Title,
    Container,
    SectionBox,
    Warning,
    PictureBox,
    Image,
    
    
};