import Clock from "./FunProjects/Clock/Clock";
import CountryInfoComponent from "./FunProjects/CountryInfoComponent/CountryInfoComponent";
import Submit from "./FunProjects/Rating/Submit";

import { FunDiv, CustomSlickArrows, Container } from "./Fun.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const arr = [Clock, Submit, CountryInfoComponent];

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 720, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
        },
      },
    ],
  };

  return (
    <Container>
      <CustomSlickArrows>

          <Slider {...settings}>
            {arr.map((MiniProj, index) => (
              <FunDiv key={index}>
                <MiniProj />
              </FunDiv>
            ))}
          </Slider>

      </CustomSlickArrows>
    </Container>
  );
};

export default SliderComponent;
