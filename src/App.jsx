import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import Line from "./components/Line";
import About from "./components/About";
import OurClient from "./components/OurClient";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Download from "./components/Download";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const Main = styled.main`
  font-family: "Inter", sans-serif;
  scroll-behavior: smooth;
`;
const Container = styled.div`
  position: relative;
`;

function App() {
  const isTablet = window.matchMedia("(max-width: 769px)").matches;
  return (
    <Main>
      <Header />
      <Container>
        <Home />
        {!isTablet && <Line styles={{ top: "11%" }} key={1} />}
        <About />
        <OurClient />
        <Testimonials />
        {!isTablet && <Line styles={{ top: "66.4%" }} key={2} />}
        <Faq />
        <Download />
        <Subscribe />
      </Container>
      <Footer />
    </Main>
  );
}

export default App;
