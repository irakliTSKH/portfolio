import { MainDiv } from "./components/Header/Header.styled";
import { useRef } from "react";

// components
import Header from "./components/Header/Header";
import Projects from "./components/Project/Projects";
import Fun from "./components/Fun/Fun";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navigation/Navigation";

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const FunRef = useRef<HTMLDivElement>(null);

  return (
    <MainDiv>
      <Navigation
        headerRef={headerRef}
        projectRef={projectRef}
        FunRef={FunRef}
      />
      <Header ref={headerRef} />
      <Projects ref={projectRef} />
      <Fun ref={FunRef} />
      <Footer />
    </MainDiv>
  );
}

export default App;
