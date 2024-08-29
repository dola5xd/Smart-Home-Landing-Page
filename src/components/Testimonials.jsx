import styled from "styled-components";
import { Head } from "./About";
import { HeadParagraph } from "./OurClient";
import CommentCard from "./CommentCard";
import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 7rem;
  gap: 4rem;
  @media only screen and (max-width: 426px) {
    background-color: #fafafa;
    padding: 5rem 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 3rem;
  gap: 35px;
  @media only screen and (max-width: 426px) {
    padding: 0;
    p {
      padding: 0 10px;
    }
    h1 {
      font-size: 55px;
    }
  }
`;

const CommentsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Comments = [
  {
    id: 1,
    comment:
      " our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions",
    user: {
      avatar: "./assets/avatar 1.png",
      userName: "Cham",
      position: "Product designer",
    },
  },
  {
    id: 2,
    comment:
      "We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured",
    user: {
      avatar: "./assets/avatar 2.png",
      userName: "Scopic Software",
      position: "Custom IT Solutions Firm",
    },
  },
  {
    id: 3,
    comment:
      "It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.",
    user: {
      avatar: "./assets/avatar 3.png",
      userName: "Russell Lee",
      position: "Writer",
    },
  },
  {
    id: 4,
    comment:
      "At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.",
    user: {
      avatar: "./assets/avatar 4.png",
      userName: "Solace Engineers Inc.",
      position: "Engineering Firm",
    },
  },
];

function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [scope, animate] = useAnimate();
  const isMobile = window.matchMedia("(max-width: 426px)").matches;

  useEffect(() => {
    if (inView) {
      controls.start("reveal");
      animate(
        "div",
        { opacity: 1 },
        {
          duration: 0.5,
          delay: stagger(0.25),
        }
      );
    }
  }, [inView, animate, controls]);

  return (
    <Container
      id="Testimonials"
      ref={ref}
      as={motion.section}
      variants={{
        hidden: { opacity: 0, y: !isMobile && 75, x: !isMobile && 70 },
        reveal: { opacity: 1, y: 0, x: 0 },
      }}
      initial={"hidden"}
      animate={controls}
      transition={{ duration: !isMobile ? 0.25 : 0.1, delay: 0.25 }}
    >
      <Header>
        <Head>Testimonials</Head>
        <HeadParagraph>
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </HeadParagraph>
      </Header>
      <CommentsContainer as={motion.div} ref={scope}>
        {Comments.map((comment) => (
          <CommentCard data={comment} key={comment.id} />
        ))}
      </CommentsContainer>
    </Container>
  );
}

export default Testimonials;
