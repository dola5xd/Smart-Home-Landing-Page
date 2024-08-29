import { motion, useAnimation, useInView } from "framer-motion";
import { Container } from "../Ui/Container";
import { DownloadDiv } from "./Home";
import styled, { css } from "styled-components";
import { useEffect, useRef } from "react";

const ContainerStyles = css`
  display: flex;
  flex-direction: row;
  padding: 200px;
  align-items: center;
  gap: 16rem;
  @media only screen and (max-width: 769px) {
    flex-direction: column-reverse;
    gap: 5rem;
    padding: 50px 0;
  }
`;

const TextContainer = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 25px;
  @media only screen and (max-width: 426px) {
    width: auto;
    padding: 0 25px;
  }
`;
const Head = styled(motion.h1)`
  font-weight: 700;
  font-size: 85px;
  line-height: 85px;
  letter-spacing: -3px;
  color: #313131;
  @media only screen and (max-width: 426px) {
    font-size: 2.7rem;
    line-height: 2rem;
  }
`;
const P = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.78px;
  color: #575757;
`;
const PhoneContainer = styled.div`
  box-shadow: 0px 0px 10rem #95959578;
  border-radius: 30px;
  @media only screen and (max-width: 426px) {
    box-shadow: -38px 0px 2rem 12px #95959578;
    border-radius: 20px;
    width: 50%;
  }
`;
const Img = styled.img`
  border-radius: 30px;
  @media only screen and (max-width: 426px) {
    border-radius: 20px;
    width: 100%;
  }
`;

function Download() {
  const ref = useRef(null);
  const controles = useAnimation();
  const inView = useInView(ref, { once: true });
  const isTablet = window.matchMedia("(max-width: 769px)").matches;

  useEffect(() => {
    if (inView) controles.start("reveal");
  }, [controles, inView]);

  return (
    <Container
      customStyles={ContainerStyles}
      ref={ref}
      as={motion.div}
      variants={{
        hidden: { x: !isTablet && 120, opacity: 0 },
        reveal: { x: 0, opacity: 1 },
      }}
      initial={"hidden"}
      animate={controles}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <TextContainer
        as={motion.div}
        variants={{
          hidden: { x: -120, scale: 0, opacity: 0 },
          reveal: { x: 0, scale: 1, opacity: 1 },
        }}
        initial={"hidden"}
        animate={controles}
        transition={{ delay: 0.7 }}
      >
        <Head>Download App</Head>
        <P>
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </P>
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
      </TextContainer>
      <PhoneContainer
        as={motion.div}
        variants={{
          hidden: { scale: 0, opacity: 0 },
          reveal: { scale: 1, opacity: 1 },
        }}
        initial={"hidden"}
        animate={controles}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Img src="./assets/center phone.png" alt="phone" />
      </PhoneContainer>
    </Container>
  );
}

export default Download;
