import styled from "styled-components";


export const DivGrid = styled.div`
  z-index:-1;
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: fit-content;
  margin: 0 auto 100px auto;
  
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
  justify-content: space-evenly;
  margin: 10px;
  color: black;
  min-width: 220px;
 border: solid 2px;
 border-radius: 10px;
    
 p{
  overflow-wrap: break-word;
  text-align: center;
 }

  img{
    width: 200px;
    height: 200px;
  }
`;

export const Footer = styled.footer`
display: flex;
justify-content: center;

p{
    margin-left: 20px;
    margin-right: 20px;
}
`;

export default {
    DivGrid,
    PlantBox,
    Footer,


};