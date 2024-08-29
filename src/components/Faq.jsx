import styled, { css } from "styled-components";
import { Head } from "./About";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import QuestionCard from "./QuestionCard";
import { useEffect, useRef } from "react";
import { Container } from "../Ui/Container";

const customContainer = css`
  @media only screen and (max-width: 426px) {
    background-color: #fafafa;
    padding: 50px 0;
  }
`;

const QuestionsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 100px 0;
  @media only screen and (max-width: 426px) {
    padding: 50px 0;
  }
`;

const Decorator = styled.svg`
  position: absolute;
  bottom: 0;
  left: -250px;
  border-radius: 100%;
  rotate: 90deg;
  circle {
    stroke-dashoffset: 0;
    stroke-width: 50%;
    fill: none;
    transition: 0.5s;
  }
  @media only screen and (max-width: 426px) {
    display: none;
  }
  @media only screen and (max-width: 769px) {
    top: 0;
    z-index: -1;
  }
`;

const questionsData = [
  {
    id: 1,
    question: "Chamber reached do he nothing be?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error nisi ut obcaecati quam asperiores eius velit excepturi quidem illo sunt.",
  },
  {
    id: 2,
    question: "Stuff sight equal of my woody?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error nisi ut obcaecati quam asperiores eius velit excepturi quidem illo sunt.",
  },
  {
    id: 3,
    question: "At by pleasure of children be?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error nisi ut obcaecati quam asperiores eius velit excepturi quidem illo sunt.",
  },
  {
    id: 4,
    question: "Amounted repeated as believed in confined?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error nisi ut obcaecati quam asperiores eius velit excepturi quidem illo sunt.",
  },
  {
    id: 5,
    question: "In am do giving to afford parish settle easily garret?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error nisi ut obcaecati quam asperiores eius velit excepturi quidem illo sunt.",
  },
];

function Faq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    if (inView) controls.start("reveal");
  }, [inView, controls]);

  return (
    <Container
      as={motion.section}
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -100 },
        reveal: { opacity: 1, x: 0 },
      }}
      initial={"hidden"}
      animate={controls}
      transition={{ duration: 0.25, delay: 0.25 }}
      customStyles={customContainer}
    >
      <Head>FAQ's</Head>

      <QuestionsContainer>
        {questionsData.map((question) => (
          <QuestionCard questionData={question} key={question.id} />
        ))}
      </QuestionsContainer>
      <Decorator width="500" height="500" viewBox="0 0 500 500">
        <circle cx="250" cy="250" r="250" stroke="#ededed" />
        <motion.circle
          cx="250"
          cy="250"
          r="250"
          stroke="#1E5AFA"
          style={{ pathLength: scrollYProgress }}
        />
      </Decorator>
    </Container>
  );
}

export default Faq;
