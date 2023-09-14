import { FooterStyled } from "./Footer.Styled";
import { SiStyledcomponents, SiTypescript } from "react-icons/si"
import {
  FaFacebookF,
  FaLinkedin,
  FaGithubSquare,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <SiStyledcomponents />
        <SiTypescript />
        <FaSass />
        <FaBootstrap />
      </div>

      <div>
        <a href="https://www.facebook.com/IrakliTskhelishvili" target="_blank"
        >
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
      </div>

      <h3>© 2023 Irakli Tskhelishvili</h3>

    </FooterStyled>
  );
};

export default Footer;
