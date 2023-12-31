import { HeaderStyled, IconDiv, InfoDiv } from "./Header.styled";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useState, useEffect, forwardRef } from "react";

// components
import AboutMeButton from "./AboutMe/AboutMeButton";
import Star from "./Star";

// TS any !!!
const Header = forwardRef((_, ref: any) => {
  const [outPut, setOutPut] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const name: string = "Irakli Tskhelishvili";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < name.length) {
        setOutPut(outPut + name.charAt(index));
        setIndex(index + 1);
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <HeaderStyled ref={ref}>
      <IconDiv
        animate={{ x: 0 }}
        initial={{ x: 200 }}
        transition={{ duration: 1.5 }}
      >
        <a href="https://www.facebook.com/IrakliTskhelishvili" target="_blank">
          {" "}
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/irakli-tskhelishvili-8b1856245/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/irakliTSKH" target="_blank">
          <FaGithubSquare />
        </a>
      </IconDiv>

      <InfoDiv>
        <img src={logo} />

        <h1>{outPut}</h1>
        <h3>Front-End Developer</h3>

        <AboutMeButton />
      </InfoDiv>

      <Star x={90} y={800} />
      <Star x={100} y={1000} />
      <Star x={300} y={700} />
      <Star x={250} y={440} />
      <Star x={100} y={340} />
      <Star x={20} y={240} />
      <Star x={200} y={340} time={2} />
      <Star x={340} y={740} />
      <Star x={330} y={940} time={2} />
      <Star x={240} y={590} time={2} />
      <Star x={70} y={670} time={2} />
    </HeaderStyled>
  );
});

export default Header;
