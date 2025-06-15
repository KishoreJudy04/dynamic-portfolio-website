import {
  HeroSection,
  Container,
  ContentWrapper,
  TextContent,
  MainHeading,
  AccentText,
  SubHeading,
  Description,
  ButtonGroup,
  ResumeButton,
  SocialLinks,
  SocialIconButton,
  ImageWrapper,
  ProfileImage,
  MobileProfileImage,
} from "./styledComponents";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <HeroSection id="home">
      <Container>
        <ContentWrapper>
          <TextContent>
            <MobileProfileImage
              src="https://i.ibb.co/ccxxH1Q9/20250328-173317-EDIT.jpg"
              alt="Kishore - Full Stack Developer"
            />
            <MainHeading>
              Hi, I'm <AccentText>KISHORE</AccentText>
            </MainHeading>
            <SubHeading>Full Stack Developer</SubHeading>
            <Description></Description>
            <ButtonGroup>
              <ResumeButton href="/resume.pdf" download>
                Download Resume
              </ResumeButton>
            </ButtonGroup>
            <SocialLinks>
              <SocialIconButton
                type="button"
                onClick={() =>
                  window.open("https://github.com/KishoreJudy04", "_blank")
                }
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </SocialIconButton>
              <SocialIconButton
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kishorebk13042004/",
                    "_blank"
                  )
                }
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </SocialIconButton>
              <SocialIconButton
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/kishore_judy_04/?hl=en",
                    "_blank"
                  )
                }
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </SocialIconButton>
              <SocialIconButton
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100040365094247&sk=about",
                    "_blank"
                  )
                }
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </SocialIconButton>
            </SocialLinks>
          </TextContent>
          <ImageWrapper>
            <ProfileImage
              src="https://i.ibb.co/S4RTrB0y/IMG-9602-removebg-preview.png"
              alt="Kishore - Full Stack Developer"
            />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default Home;
