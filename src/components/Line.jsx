import { motion } from "framer-motion";
import styled from "styled-components";

const Svg = styled(motion.svg)`
  position: absolute;
  left: 50%;
  transform: translate(5%, 0%) rotate(-10deg);
  z-index: -20;
`;

function Line({ styles }) {
  return (
    <Svg
      as={motion.svg}
      width="706"
      height="1308"
      viewBox="0 0 706 1308"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <motion.path
        d="M107.35 1C25.5589 16.2378 -77.8835 172.626 94.5205 259.241C117.24 268.062 174.869 274.478 223.623 229.567C284.566 173.428 207.585 59.5452 122.586 108.467C37.5871 157.388 76.0773 281.696 180.322 307.36C284.566 333.024 328.669 337.835 359.942 372.321C391.216 406.807 429.706 464.55 404.046 547.155C379.87 624.981 255.334 669.348 267.158 549.472C268.732 533.52 274.904 518.277 283.62 504.824C360.709 385.842 445.892 370.717 472.205 370.717C495.546 370.717 643.141 376.594 587.591 554.965C582.401 571.631 573.011 586.699 561.773 600.056C492.122 682.839 378.661 830.448 359.942 888C345.241 934.833 330.5 1029.5 359.942 1090.5C393.015 1159.02 466.5 1260 706.5 1307"
        stroke="#7C43FF"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
        }}
        strokeWidth={1}
        fill="none"
        stroke-linecap="round"
      />
    </Svg>
  );
}

export default Line;
