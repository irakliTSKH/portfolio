import { MainDiv, Enter } from "./components/Header/Header.styled";
import { useRef, useState, useEffect } from "react";

// components
import Header from "./components/Header/Header";
import Projects from "./components/Project/Projects";
import Fun from "./components/Fun/Fun";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navigation/Navigation";

function App() {
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const FunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      console.log("true");
    }, 2000);
  }, []);

  return open ? (
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
  ) : (
    <Enter/>
    
  );
}

export default App;
