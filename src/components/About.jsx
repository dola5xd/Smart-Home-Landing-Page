import styled from "styled-components";
import PhoneCard from "./PhoneCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const StyledAbout = styled(motion.section)`
  padding: 0 5rem;
  padding-top: 40vh;
  background: url("./assets/about us decorator.svg");
  background-position: top 40vh left;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 426px) {
    background-image: none;
    background-color: #fafafa;
    padding: 0 1rem;
    padding-top: 50vh;
  }
`;

export const Head = styled(motion.h1)`
  font-size: 85px;
  line-height: 85px;
  font-weight: 700;
  letter-spacing: -3px;
  text-align: center;
  margin-top: 50px;
  @media only screen and (max-width: 426px) {
    font-size: 60px;
    line-height: 64px;
    text-wrap: nowrap;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 100px 0;
`;

const cardData = [
  {
    id: 1,
    src: "./assets/center phone.png",
    head: "Smart Home’s  Smart Services",
    content:
      "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
  },
  {
    id: 2,
    src: "./assets/right phone.png",
    head: "What app can do to your Appliences?",
    content:
      "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
  },
  {
    id: 3,
    src: "./assets/left phone.png",
    head: "Control Electric Appliences",
    content:
      "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
  },
];

function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("reveal");
  }, [inView, controls]);

  return (
    <StyledAbout
      id="About"
      ref={ref}
      as={motion.section}
      variants={{
        hidden: { opacity: 0 },
        reveal: { opacity: 1 },
      }}
      initial={"hidden"}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Head
        as={motion.h1}
        variants={{
          hidden: { opacity: 0 },
          reveal: { opacity: 1 },
        }}
        initial={"hidden"}
        animate={controls}
        transition={{ duration: 0.5, delay: 1 }}
      >
        About us
      </Head>
      <CardContainer>
        {cardData.map((data) => (
          <PhoneCard data={data} key={data.id} />
        ))}
      </CardContainer>
    </StyledAbout>
  );
}

export default About;
