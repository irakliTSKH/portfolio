import { HeaderStyled, IconDiv, InfoDiv } from "./Header.styled"
import { forwardRef } from "react";
import logo from '../../assets/logo.png'
import { FaFacebookF, FaLinkedin, FaGithubSquare } from "react-icons/fa";

// components
import AboutMeButton from './AboutMe/AboutMeButton';
import Star from "./Star";

// TS any !!!
const Header = forwardRef((props: any, ref: any) => {
 

  return (
    <HeaderStyled ref={ref}>
     
      <IconDiv
        animate={{x: 0 }} 
        initial={{x: 200}}
        transition={{duration: 1}}
      >
        <a href="https://www.facebook.com/IrakliTskhelishvili" target="_blank"> <FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/irakli-tskhelishvili-8b1856245/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/irakliTSKH" target="_blank"><FaGithubSquare /></a>
      </IconDiv>
    
      <InfoDiv >
        <img src={logo} />

        <h1>Irakli Tskhelishvili</h1>
        <h3>Front-End Developer</h3>

        <AboutMeButton  />

      </InfoDiv>

      <Star x={90} y={800} />
      <Star x={100} y={1000} />
      <Star x={300} y={700} />
      <Star x={250} y={440} />
      <Star x={100} y={340} />
      <Star x={20} y={240} />
      <Star x={200} y={340} />
      <Star x={340} y={740} />
      <Star x={330} y={940} />
      <Star x={240} y={590} />
      <Star x={70} y={670} />
      
    </HeaderStyled>
  );
});

export default Header;
