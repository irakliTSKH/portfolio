import { MobileBarStyled, NavBarStyled } from "./Navigation.styled"
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


const MobileBar = ({headerRef, skillsRef, projectRef }:PropsTypes) => {

  return (
    <>
    <MobileBarStyled>
      <FaHome onClick={() => scrollToElement(headerRef)}/>
      <FaSitemap onClick={() => scrollToElement(projectRef)}/>
      <FaChalkboardTeacher  onClick={() => scrollToElement(skillsRef)}/>
    </MobileBarStyled>

    <NavBarStyled>
      <li onClick={() => scrollToElement(headerRef)}>header</li>
      <li onClick={() => scrollToElement(projectRef)}>project</li>
      <li onClick={() => scrollToElement(skillsRef)}>skills</li>
    </NavBarStyled>

    </>
  );
};

export default MobileBar;
