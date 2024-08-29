import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 35px 50px;
  width: 550px;
  gap: 2rem;
  border-radius: 10px;
  svg {
    transition: 0.3s;
  }
  span svg rect {
    transition: fill 0.5s;
  }
  span:hover svg rect {
    fill: #fd5757;
  }
  h3 {
    font-size: 18px;
    line-height: 23.4px;
    font-weight: 500;
    color: #313131;
  }
  @media only screen and (max-width: 426px) {
    width: 80%;
    padding: 15px 30px;
    gap: 1rem;
    h3 {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  cursor: pointer;
  @media only screen and (max-width: 426px) {
    gap: 10px;
    span svg {
      width: 20px;
      height: 20px;
    }
  }
`;
const Content = styled(motion.p)`
  font-size: 18px;
  line-height: 21.78px;
  font-weight: 400;
  color: #575757;
  margin-left: 60px;
  @media only screen and (max-width: 426px) {
    margin-left: 0px;
    font-size: 14px;
  }
`;

const plusIco = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="13.9995" width="30" height="3" rx="1.5" fill="#1B1139" />
    <rect
      x="16"
      y="-0.000488281"
      width="30"
      height="3"
      rx="1.5"
      transform="rotate(90 16 -0.000488281)"
      fill="#1B1139"
    />
  </svg>
);

const minusIco = (
  <svg
    width="30"
    height="3"
    viewBox="0 0 30 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      opacity="0.8"
      y="-0.000488281"
      width="30"
      height="3"
      rx="1.5"
      fill="#FD5757"
    />
  </svg>
);

function QuestionCard({ questionData }) {
  const { question, answer } = questionData;
  const [isOpen, setOpen] = useState(false);
  return (
    <Card
      variants={{
        bgGrey: { backgroundColor: "#fafafa", boxShadow: "0" },
        bgWhite: {
          backgroundColor: "#fff",
          boxShadow: "0px 0px 10px #C9CBCC4D ",
        },
      }}
      style={{ boxShadow: 0 }}
      animate={isOpen ? "bgWhite" : "bgGrey"}
    >
      <Question onClick={() => setOpen((prev) => !prev)}>
        <span>{isOpen ? minusIco : plusIco}</span>
        <h3>{question}</h3>
      </Question>

      <Content
        variants={{
          hidden: { scale: 0.5, display: "none" },
          show: { scale: 1, display: "inline" },
        }}
        transition={{ display: { duration: 0.1 } }}
        animate={isOpen ? "show" : "hidden"}
      >
        {answer}
      </Content>
    </Card>
  );
}

export default QuestionCard;
