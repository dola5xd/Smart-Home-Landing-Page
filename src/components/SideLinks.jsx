import styled from "styled-components";

const Ul = styled.ul`
  position: absolute;
  left: 100px;
  bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;
const Li = styled.li`
  cursor: pointer;
`;
function SideLinks() {
  return (
    <Ul>
      <Li>
        <img src="./assets/Facebook.svg" alt="facebook-icon" />
      </Li>
      <Li>
        <img src="./assets/Instagram.svg" alt="Instagram-icon" />
      </Li>
      <Li>
        <img src="./assets/Twitter.svg" alt="Twitter-icon" />
      </Li>
      <Li>
        <img src="./assets/Linked in.svg" alt="Linked in-icon" />
      </Li>
    </Ul>
  );
}

export default SideLinks;
