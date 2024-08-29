import styled, { keyframes } from "styled-components";
import SideLinks from "./SideLinks";
import { motion } from "framer-motion";

const dots = keyframes`
    0%{transform:translateY(3%)}
    100%{transform:translateY(0%)}
`;

const StyledHome = styled(motion.section)`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 60px 300px;
  background: url("./assets/Hero dots.svg");
  background-color: #1e5afa;
  background-repeat: no-repeat;
  background-position: top center;
  @media only screen and (max-width: 426px) {
    background-image: none;
    padding: 30px 20px;
    min-height: 60vh;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    background-image: none;
    padding: 30px 20px;
    min-height: 50vh;
  }
`;
const Text = styled(motion.div)`
  color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const ImgDiv = styled(motion.div)`
  display: flex;
  gap: 50px;
  align-items: center;
  transform: translate(-55%, 10%);
  position: absolute;
  top: 50%;
  left: 50%;
  img {
    width: calc(100% / 3);
    animation: ${dots} infinite 1.5s alternate;
  }
  img:nth-child(1) {
    scale: 0.9;
  }
  img:nth-child(2) {
    transform: translateY(-5%);
    animation-delay: 0.2s;
    scale: 1.1;
  }
  img:nth-child(3) {
    animation-delay: 0.4s;
    scale: 0.9;
  }
  @media only screen and (max-width: 769px) {
    gap: 20px;
    transform: translate(85%, 20%);
    width: 90%;
    z-index: 50;
    img {
      width: calc(80% / 3);
    }
  }
  @media only screen and (max-width: 769px) {
    transform: translate(50%, 20%);
  }
`;

const H1 = styled.h1`
  font-size: 85px;
  font-weight: 800;
  line-height: 85px;
  text-align: center;
  @media only screen and (max-width: 426px) {
    font-size: 2.7rem;
    line-height: 2.7rem;
  }
`;
const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  text-align: center;
`;

export const DownloadDiv = styled(motion.div)`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  img {
    cursor: pointer;
  }
  @media only screen and (max-width: 426px) {
    width: 100%;
    img {
      width: 45%;
    }
  }
`;

function Home() {
  const isMobile = window.matchMedia("(max-width: 426px)").matches;
  const isTablet = window.matchMedia("(max-width: 769px)").matches;
  return (
    <StyledHome id="Home">
      <Text
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 75, x: 70 },
          reveal: { opacity: 1, y: 0, x: 0 },
        }}
        initial={"hidden"}
        animate={"reveal"}
        transition={{ delay: 0.25 }}
      >
        <H1>Smart Home Application</H1>
        <P>
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </P>
      </Text>
      <ImgDiv
        as={motion.div}
        variants={{
          hidden: {
            opacity: 0,
            y: isMobile ? "85%" : isTablet ? "50%" : "100%",
            x: isMobile || isTablet ? "-45%" : "-55%",
            scale: isMobile || isTablet ? 0 : 1,
          },
          reveal: {
            opacity: 1,
            y: isMobile ? "85%" : isTablet ? "50%" : "10%",
            x: isMobile || isTablet ? "-45%" : "-55%",
            scale: 1,
          },
        }}
        initial={"hidden"}
        animate={"reveal"}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <img src="./assets/left phone.png" alt="phone" />
        <img src="./assets/center phone.png" alt="phone" />
        <img src="./assets/right phone.png" alt="phone" />
      </ImgDiv>
      {!isTablet && <SideLinks />}
      <DownloadDiv
        as={motion.div}
        variants={{
          hidden: { opacity: 0 },
          reveal: { opacity: 1 },
        }}
        initial={"hidden"}
        animate={"reveal"}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <img src="./assets/Google download button.png" alt="Google" />
        <img src="./assets/Apple download button.png" alt="Apple" />
      </DownloadDiv>
    </StyledHome>
  );
}

export default Home;
