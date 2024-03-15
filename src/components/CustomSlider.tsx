import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderBox from './SliderBox';

interface CustomSliderProps {
  title: string;
  numberid: string;
  subtitle1: string;
  subtitle2: string;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ title, numberid, subtitle1, subtitle2 }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '3%',
  };

  return (
    <Slider {...settings}>
      <SliderBox title={title[0]} numberid={numberid[0]} subtitle1={subtitle1} subtitle2={subtitle2} />
      <SliderBox title={title[1]} numberid={numberid[1]} subtitle1={subtitle1} subtitle2={subtitle2} />
    </Slider>
  );
};

export default CustomSlider;
