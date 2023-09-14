import { MainDiv } from "./components/Header/Header.styled";
import { useRef } from "react";

// components
import Header from "./components/Header/Header";
import Projects from "./components/Project/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navigation/Navigation";


function App() {

  const headerRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
 
  return (
    <MainDiv>
      <Navigation 
        headerRef={headerRef} 
        projectRef={projectRef} 
        skillsRef={skillsRef} 
        />
      <Header ref={headerRef} />
      <Projects ref={projectRef} />
      <Skills ref={skillsRef} />
      <Footer />
    </MainDiv>
  );
}

export default App;
