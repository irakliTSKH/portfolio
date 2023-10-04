import { AboutButtonStyled } from "./AboutMeButton.styled";
import { useState } from "react";
import { AboutWrapper} from "../Header.styled";
import { AboutMeDiv, ContactDiv, DeleteButton, Span } from "./ContactForm/Contact.styled";
import ContactForm from "./ContactForm/ContactForm";

function AboutMeButton() {
  const [hidden, setHidden] = useState(false);

  const openAbout = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <AboutButtonStyled onClick={openAbout}>
        About Me
      </AboutButtonStyled>

      {hidden && (
        <AboutWrapper>
          <AboutMeDiv  
            animate={{x: 0 }} 
            initial={{x: -600}}
            transition={{duration: 0.5}}
            >
              <h2>
                About Me
              </h2>
              <p>
                I'm Irakli Tskhelishvili,  Georgian  <br/> <Span>Front-end developer. </Span> 
                I like to resolve design problems, create smart user interface and imagine useful interaction, 
                developing rich web experiences & web applications.
              </p>
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
