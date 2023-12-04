
import plantSearch1 from "../../assets/plantSearch1.png"
import plantSearch2 from "../../assets/plantSearch2.png"
import plantSearch3 from "../../assets/plantSearch3.png"
import login from "../../assets/login.png"
import register from "../../assets/register.png"
import myGarden1 from "../../assets/myGarden1.png"
import myGarden2 from "../../assets/myGarden2.png"
import myGarden3 from "../../assets/myGarden3.png"


import {
    Main,
    Title,
    Container,
    SectionBox,
    Warning,
    PictureAndText,
    PictureBox,
    Image,

    } from "./styledHome"

const HomePage = () => {

    return (
    <Main>
        <Title>🪴Welcome to My Garden🪴</Title>

                
            <Container>

                <SectionBox>
                    <h2>Browser section</h2>
                    <PictureAndText>
                    <p>In this section you have acces to a whole plant database. When you first acces the page, all plants are sorted by ascending order of common name. You can click on pictures to have more information about a specific plant. If you are looking for a specific plant, type the name and make a search!  </p>
                    <PictureBox>
                    <Image src={plantSearch1} alt={"plantSearch1"}/>
                    <Image src={plantSearch2} alt={"plantSearch2"}/>
                    <Image src={plantSearch3} alt={"plantSearch3"}/>
                    </PictureBox>
                    </PictureAndText>
                </SectionBox>

                <SectionBox>
                    <h2>My Garden</h2>
                    <PictureAndText>
                    <Warning>This section is available only with a valid account</Warning>
                    <p>Create your own library of plants. Add plants you have or you would like to have. Get acces to recommended cares and create your own settings. There is also a reminder option that let you know when it's time to  water or fertilize based on your settings.  </p>
                    <PictureBox>
                    <Image src={myGarden1} alt={"myGarden1"}/>
                    <Image src={myGarden2} alt={"myGarden2"}/>
                    <Image src={myGarden3} alt={"myGarden3"}/>
                    </PictureBox>
                    </PictureAndText>
                </SectionBox>


                <SectionBox>
                    <h2>Log in / Sign up</h2>
                    <PictureAndText>
                    <p>Log into your account to get acces to your plants library in My Garden or create a new account have access to My Garden features.</p>
                    <PictureBox>
                    <Image src={login} alt={"login"}/>
                    <Image src={register} alt={"register"}/>
                    </PictureBox>
                    </PictureAndText>
                </SectionBox>

            </Container>

     </Main>
    )
}

export default HomePage