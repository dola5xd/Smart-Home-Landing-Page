import styled from "styled-components";
import { Head } from "./About";
import {
  stagger,
  motion,
  useAnimate,
  useInView,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Container = styled(motion.section)`
  padding: 150px 5rem;
  gap: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 426px) {
    background-color: #fafafa;
    padding: 100px 2rem;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 25px;
`;
export const HeadParagraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.78px;
  text-align: center;
  color: #575757;
  padding: 0 10rem;
  @media only screen and (max-width: 769px) {
    padding: 0;
    font-size: 12px;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    padding: 0;
    font-size: 18px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 426px) {
    justify-content: start;
    width: 100%;
    gap: 15px;
  }
`;

const ClientCard = styled.div`
  background-color: transparent;
  box-shadow: 0px 0px 20px #a5a5a567;
  padding: 50px;
  height: 75px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0;

  &:hover {
    background-color: #f5f5f5;
  }
  @media only screen and (max-width: 426px) {
    width: 47%;
    padding: 0px;
    height: 85px;
    img {
      width: 50%;
    }
  }
`;

function OurClient() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [scope, animate] = useAnimate();
  const isMobile = window.matchMedia("(max-width: 426px)").matches;

  useEffect(() => {
    if (inView) {
      controls.start("reveal");
      animate(
        "div",
        { opacity: 1 },
        {
          duration: 0.5,
          delay: stagger(0.4),
        }
      );
    }
  }, [inView, animate, controls]);

  return (
    <Container
      as={motion.section}
      ref={ref}
      variants={
        !isMobile && {
          hidden: { opacity: 0, y: 75, x: 70 },
          reveal: { opacity: 1, y: 0, x: 0 },
        }
      }
      initial={"hidden"}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <Header>
        <Head>Our Clients</Head>
        <HeadParagraph>
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </HeadParagraph>
      </Header>
      <CardContainer className="item" as={motion.div} ref={scope}>
        <ClientCard>
          <img src="./assets/Logo 1.svg" alt="Client logo" />
        </ClientCard>
        <ClientCard>
          <img src="./assets/Logo 2.svg" alt="Client logo" />
        </ClientCard>
        <ClientCard>
          <img src="./assets/Logo 3.svg" alt="Client logo" />
        </ClientCard>
        <ClientCard>
          <img src="./assets/Logo 4.svg" alt="Client logo" />
        </ClientCard>
        <ClientCard>
          <img src="./assets/Logo 5.svg" alt="Client logo" />
        </ClientCard>
        <ClientCard>
          <img src="./assets/Logo 6.svg" alt="Client logo" />
        </ClientCard>
        <ClientCard>
          <img src="./assets/Logo 7.svg" alt="Client logo" />
        </ClientCard>
        <ClientCard>
          <img src="./assets/Logo 8.svg" alt="Client logo" />
        </ClientCard>
      </CardContainer>
    </Container>
  );
}

export default OurClient;
