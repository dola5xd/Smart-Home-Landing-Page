import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  background-color: #1e5afa;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5000;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
  span {
    color: #fafafa;
    font-size: 2rem;
  }
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 38.37px;
  color: #fafafa;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  list-style: none;
  padding: 20px;
`;
const Li = styled.li`
  padding: 10px;
  a {
    color: #fafafa;
    font-size: 24px;
    font-weight: 500;
    transition: 0.5s;
    border-radius: 7px;
    line-height: 29.05px;
    text-decoration: none;
  }
  &:hover {
    color: #fbfbfbcc;
  }
  &.active {
    background-color: #fafafa;
    a {
      color: #1e5afa;
    }
  }
`;

function MobileNav({ setIsOpen, isOpen }) {
  const containerEl = useRef(null);

  function handelClose() {
    setIsOpen();
  }

  return (
    <Container
      ref={containerEl}
      variants={{
        hidden: { x: "-100%", display: "none" },
        show: { x: 0, display: "flex" },
      }}
      initial={"hidden"}
      animate={isOpen ? "show" : "hidden"}
    >
      <Head>
        <Logo>smartHome</Logo>
        <span onClick={handelClose}>&#10005;</span>
      </Head>

      <Ul>
        <Li className="active">
          <a onClick={handelClose} href="#Home">
            Home
          </a>
        </Li>
        <Li>
          <a onClick={handelClose} href="#About">
            About
          </a>
        </Li>
        <Li>
          <a onClick={handelClose} href="#Testimonials">
            Testimonials
          </a>
        </Li>
        <Li>
          <a onClick={handelClose} href="#Contact">
            Contact
          </a>
        </Li>
        <Li>
          <a onClick={handelClose} href="#Contact">
            Login
          </a>
        </Li>
        <Li>
          <a onClick={handelClose} href="#Contact">
            Login
          </a>
        </Li>
      </Ul>
    </Container>
  );
}

export default MobileNav;
