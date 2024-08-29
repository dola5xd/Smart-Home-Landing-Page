import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 150px 0;
  position: relative;
  ${(props) => props.customStyles && props.customStyles}
`;
