import { AboutButtonStyled } from "./Header.styled";
import { useState } from "react";
import {
  AboutMeDiv,
  DeleteButton,
  ContactDiv,
  AboutWrapper,
} from "./Header.styled";
import ContactForm from "./ContactForm";

function AboutMeButton() {
  const [hidden, setHidden] = useState(false);

  const openAbout = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <AboutButtonStyled 
        onClick={() => openAbout()} 
        animate={{ rotate: 360 }}
        transition={{duration: 1.5}}
      >
        About Me
      </AboutButtonStyled>

      {hidden && (
        <AboutWrapper>
          <AboutMeDiv  
            animate={{x: 0 }} 
            initial={{x: -600}}
            transition={{duration: 0.5}}
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam
            fuga a quo deleniti tempora eaque dolorum omnis totam. Officia error
            atque impedit repellendus ea cumque vero porro alias architecto.
          </AboutMeDiv>
          <ContactDiv
            animate={{x: 0 }} 
            initial={{x: 600}}
            transition={{duration: 0.5}}
          >
            <ContactForm />
            <DeleteButton onClick={() => openAbout()}>X</DeleteButton>
          </ContactDiv>
        </AboutWrapper>
      )}
    </>
  );
}

export default AboutMeButton;
