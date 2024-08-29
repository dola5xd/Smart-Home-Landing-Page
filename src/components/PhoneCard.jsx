import styled, { css } from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Card = styled(motion.div)`
  display: flex;
  gap: 150px;
  padding: 100px 200px;
  ${(props) =>
    props.className === "reverse" &&
    css`
      flex-direction: row-reverse;
    `}
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    width: 100%;
    gap: 50px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  img {
    box-shadow: -12px -6px 50px #3c3c3c77;
    border-radius: 30px;
    position: relative;
  }
  &:before {
    content: "";
    width: 150%;
    height: 250px;
    background-color: #1e5afa;
    border-radius: 10px;
    position: absolute;
    left: -25%;
    top: 25%;
  }
  @media only screen and (max-width: 426px) {
    img {
      width: 50%;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 10px;
    }
    &:before {
      content: "";
      width: 100%;
      height: 150px;
      background-color: #1e5afa;
      border-radius: 10px;
      position: absolute;
      left: 0%;
      top: 25%;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 426px) {
    width: 100%;
  }
`;

const Head = styled.h1`
  font-size: 48px;
  line-height: 48px;
  font-weight: 600;
  color: #000f37;
  @media only screen and (max-width: 426px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const Paragraph = styled.p`
  color: #575757;
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
  @media only screen and (max-width: 426px) {
    font-size: 14px;
    padding-right: 10px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  font-weight: 600;
  font-size: 18px;
  color: #000f37;
  border-radius: 10px;
  padding: 20px 30px;
  position: relative;
  cursor: pointer;
  border: 1px solid #000f37;
  transition: 0.7s;
  z-index: 2;

  &::before {
    content: "";
    border-radius: 10px;
    border: 1px solid #000f37;
    background-color: #000f37;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    transition: 0.7s;
  }
  &:hover {
    color: #fafafa;
  }
  &:hover:before {
    opacity: 1;
    width: 100%;
  }
`;

function PhoneCard({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const isMobile = window.matchMedia("(max-width: 426px)").matches;

  useEffect(() => {
    if (inView) controls.start("reveal");
  }, [inView, controls]);

  return (
    <Card
      className={data.id === 2 && "reverse"}
      ref={ref}
      as={motion.div}
      variants={
        !isMobile && {
          hidden: {
            opacity: 0,
            x: data.id === 2 ? -100 : 100,
          },
          reveal: { opacity: 1, x: 0 },
        }
      }
      initial={"hidden"}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <ImgContainer className="imgContainer">
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0, x: isMobile ? "-50%" : 0 },
            reveal: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={controls}
          transition={{ delay: 0.5 }}
          src={data.src}
          alt="phone"
        />
      </ImgContainer>
      <Content className="Content">
        <Head>{data.head}</Head>
        <Paragraph>{data.content}</Paragraph>
        <Button>Learn More</Button>
      </Content>
    </Card>
  );
}

export default PhoneCard;
