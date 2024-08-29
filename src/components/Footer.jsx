import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  gap: 100px;
  padding: 150px;
  position: relative;
  border: 1px solid #eee;
  &:after {
    content: "Copyright © ${new Date().getFullYear()} all rights reserved Adel yasser";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 25px 0;
    text-align: center;
    color: #fff;
    background-color: #2e2e2e;
  }
  @media only screen and (max-width: 426px) {
    flex-direction: column;
    padding: 150px 25px;
    &:after {
      font-size: 12px;
    }
  }
  @media (min-width: 426px) and (max-width: 769px) {
    flex-direction: column;
    padding: 150px 25px;
    &:after {
      font-size: 18px;
    }
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 25%;
  gap: 30px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  ul li {
    list-style: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
    color: #575757;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: #1e5afa;
    }
  }
  @media only screen and (max-width: 769px) {
    max-width: 100%;
  }
`;
const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 38.75px;
  color: #313131;
`;

const Head = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 29.05px;
  color: #2e2e2e;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.36px;
  color: #575757;
`;

const Form = styled.div`
  display: flex;
  gap: 5px;
  input {
    border: 1px solid #e7ebee;
    background-color: #fafafa;
    padding: 15px 20px;
    border-radius: 5px;
    @media only screen and (max-width: 769px) {
      padding: 10px;
    }
  }
  button {
    background-color: transparent;
    border: 1px solid #011037;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    line-height: 18.94px;
    text-align: center;
    font-weight: 400;
    cursor: pointer;
    position: relative;
    transition: 0.5s;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      background-color: #011037;
      width: 100%;
      height: 0%;
      z-index: -1;
      transition: 0.5s;
      border-radius: 5px;
    }
    &:hover {
      color: #e7ebee;
      border-color: #e7ebee;
    }
    &:hover:before {
      height: 100%;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterCol>
        <Logo>smartHome</Logo>
        <P>
          Automate your entire healthcare hiring, onboarding and compliance with
          a true technology platform.
        </P>
        <Form role="form">
          <input type="email" placeholder="Email Address" />
          <button>Register</button>
        </Form>
      </FooterCol>
      <FooterCol>
        <Head>CATEGORIES</Head>
        <ul>
          <li>Product Management</li>
          <li>Design / Creatives</li>
          <li>Education & Training</li>
          <li>UI/UX Designers</li>
          <li>Development</li>
          <li>Customer Support</li>
        </ul>
      </FooterCol>
      <FooterCol>
        <Head>ABOUT</Head>
        <ul>
          <li>About Us</li>
          <li>Partnerships</li>
          <li>Finance Experts</li>
          <li>Project Management</li>
          <li>Product Manager</li>
          <li>The Team</li>
        </ul>
      </FooterCol>
      <FooterCol>
        <Head>ABOUT</Head>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Linkedin</li>
        </ul>
      </FooterCol>
    </FooterContainer>
  );
}

export default Footer;
