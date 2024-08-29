import styled, { css } from "styled-components";
import { Container } from "../Ui/Container";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ContaienrStyles = css`
  padding: 100px 150px;
  @media only screen and (max-width: 426px) {
    padding: 3px;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    padding: 50px;
  }
`;

const Content = styled(motion.div)`
  background: url("./assets/Subscribe decorator.svg");
  background-repeat: no-repeat;
  background-position: bottom right 5rem;
  background-color: #1e5afa;
  padding: 100px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  button {
    padding: 20px 60px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 7px;
    text-wrap: nowrap;
    color: #fff;
    font-size: 18px;
    line-height: 21.78px;
    text-align: center;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      border-color: #c3c3c3;
      color: #c3c3c3;
    }
  }
  @media only screen and (max-width: 769px) {
    padding: 20px;
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 150px;
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #fdfdff;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #f5f2ff;
  }
  @media only screen and (max-width: 769px) {
    padding-right: 10px;
    h1 {
      font-size: 40px;
      line-height: 56px;
    }
    p {
      font-size: 14px;
      line-height: 30px;
    }
  }
`;

function Subscribe() {
  const ref = useRef(null);
  const controler = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) controler.start("reveal");
  }, [inView, controler]);

  return (
    <Container id="Contact" customStyles={ContaienrStyles} ref={ref}>
      <Content
        as={motion.div}
        variants={{
          init: { scale: 0 },
          reveal: { scale: 1 },
        }}
        initial={"init"}
        animate={controler}
        transition={{ delay: 0.5 }}
      >
        <TextContainer>
          <h1>Subscribe to get updated</h1>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque .
          </p>
        </TextContainer>
        <button>Get start</button>
      </Content>
    </Container>
  );
}

export default Subscribe;
