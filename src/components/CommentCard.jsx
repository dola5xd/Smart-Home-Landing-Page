import { motion } from "framer-motion";
import styled from "styled-components";

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  padding: 30px 40px;
  box-shadow: 0px 0px 20px #7d7d7d43;
  border-radius: 10px;
  width: 500px;
  height: 180px;
  opacity: 0;
  @media only screen and (max-width: 426px) {
    width: auto;
    height: auto;
    padding: 10px;
    gap: 1rem;
  }
`;
const Comment = styled.p`
  font-size: 14px;
  font-style: italic;
  line-height: 30px;
  font-weight: 500;
  color: #5f7285;
  @media only screen and (max-width: 426px) {
    font-size: 0.7rem;
    line-height: 25px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 426px) {
    gap: 1rem;
  }
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.3rem;
  h4 {
    line-height: 16.94px;
    font-size: 14px;
    font-weight: 600;
    color: #1b263d;
  }
  p {
    line-height: 14.52px;
    font-size: 12px;
    font-weight: 600;
    color: #9c9ea3;
  }
  @media only screen and (max-width: 426px) {
    gap: 0rem;
    h4 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
  }
`;

function CommentCard({ data }) {
  const { comment, user } = data;

  return (
    <Card as={motion.div}>
      <Comment>{comment}</Comment>
      <User>
        <img src={user.avatar} alt={user.userName} />
        <UserInfo>
          <h4>{user.userName}</h4>
          <p>{user.position}</p>
        </UserInfo>
      </User>
    </Card>
  );
}

export default CommentCard;
