import styled, { css } from "styled-components";
import Nav from "./Nav";
import { useState } from "react";
import MobileNav from "../Ui/MobileNav";

const StyledHeader = styled.header`
  background: url("assets/Header Circle.svg");
  background-repeat: no-repeat;
  background-position: top right;
  background-color: #1e5afa;
  padding: 4rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 769px) {
    padding: 4.5rem 1.25rem;
  }
`;
const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 38.37px;
  color: #fafafa;
  transform: translateX(-20%);
  @media only screen and (max-width: 769px) {
    transform: translateX(0%);
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
const Button = styled.button`
  border: 0;
  font-size: 18px;
  color: #fafafa;
  padding: 15px 25px;
  border-radius: 3px;
  text-align: center;
  line-height: 21.78px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s;
  ${(props) =>
    props.color !== "primary"
      ? css`
          background-color: transparent;
        `
      : css`
          background-color: #ffffff;
          color: #011037;
        `};
  &:hover {
    opacity: 0.9;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media only screen and (max-width: 769px) {
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    width: 35px;
    height: 5px;
    background-color: #fafafa;
  }
  cursor: pointer;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <Nav />
        <Logo>smartHome</Logo>
        <HamburgerMenu onClick={setIsOpen}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerMenu>
        <ButtonGroup>
          <Button>Login</Button>
          <Button color="primary">Sign up</Button>
        </ButtonGroup>
      </StyledHeader>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
