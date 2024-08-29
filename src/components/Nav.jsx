import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
const Ul = styled.ul`
  display: flex;
  gap: 0.6rem;
  list-style: none;
`;
const Li = styled.li`
  a {
    cursor: pointer;
    color: #fafafa;
    font-size: 18px;
    font-weight: 400;
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: #fbfbfbcc;
  }
`;

function Nav() {
  return (
    <StyledNav>
      <Ul>
        <Li>
          <a href="#Home">Home</a>
        </Li>
        <Li>
          <a href="#About">About</a>
        </Li>
        <Li>
          <a href="#Testimonials">Testimonials</a>
        </Li>
        <Li>
          <a href="#Contact">Contact</a>
        </Li>
      </Ul>
    </StyledNav>
  );
}

export default Nav;
