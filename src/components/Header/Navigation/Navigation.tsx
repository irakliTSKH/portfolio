import { MobileBarStyled, NavBarStyled } from "./Navigation.styled"
import logo from "../../../assets/logo.png"
import {PropsTypes} from '../../../types/types'
import {
  FaHome,
  FaSitemap,
  FaChalkboardTeacher,
} from "react-icons/fa";

//  scroll function
const scrollToElement =  (elementRef: React.RefObject<HTMLDivElement>) => {
  if (elementRef.current) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }
};

const reload = () => {
  window.location.reload()
}

const Navigation = ({headerRef, FunRef, projectRef }:PropsTypes) => {

  return (
    <>
    <MobileBarStyled>
      <FaHome onClick={() => scrollToElement(headerRef)}/>
      <FaSitemap onClick={() => scrollToElement(projectRef)}/>
      <FaChalkboardTeacher  onClick={() => scrollToElement(FunRef)}/>
    </MobileBarStyled>

    <NavBarStyled 
         animate={{y: 0 }} 
         initial={{y: -200}}
         transition={{duration: 1.5}}
    >
      <img src={logo} onClick={reload}/>
      <ul>
        <li onClick={() => scrollToElement(headerRef)}>About</li>
        <li onClick={() => scrollToElement(projectRef)}>Projects</li>
        <li onClick={() => scrollToElement(FunRef)}>LetsFun</li>
              </ul>
    </NavBarStyled>

    </>
  );
};

export default Navigation;
