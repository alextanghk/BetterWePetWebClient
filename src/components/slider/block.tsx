
import React from 'react';
import Slider from "react-slick";

interface Props {
    items: Array<React.ReactNode>
}

const BWPBlockSlider:React.FC<Props> = (props) => {
    const { items } = props;
    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      swipeToSlide: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            infinite: true
          }
        }
      ]
    };
  
    return(<div className="">
        <Slider {...settings}>
          {
              items.map((item, i:number) =>(
                <div  key={`i${i}`}>
                    <div>
                        {item}            
                    </div>
                </div>
              ))
          }
      </Slider>
    </div>)
  }

export default BWPBlockSlider;