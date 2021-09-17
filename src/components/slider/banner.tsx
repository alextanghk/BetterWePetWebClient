import React from 'react';
import Slider from "react-slick";

import "./styles.scss";

interface ItemProps {
    image: any
}

interface Props {
    items: Array<ItemProps>
}

const BWPBannerSlider:React.FC<Props> = (props) => {
  const  { items } = props;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i:number) => (
        <div>
            <div className={`hidden sm:block w-10 h-8 bg-bwp-light-green bg-opacity-50 px-3 py-2 ${i === 0 ? "rounded-l-full w-12 pl-5" : i === (items.length -1 ) ? "rounded-r-full w-12 pr-5" : "" }`}>
                <span className="block w-4 h-4 m-auto bg-bwp-white rounded-full"></span>
            </div>
            <div className={`block sm:hidden w-8 h-6 bg-bwp-light-green bg-opacity-50 px-2.5 py-1.5 ${i === 0 ? "rounded-l-full w-10 pl-3" : i === (items.length -1 ) ? "rounded-r-full w-10 pr-3" : "" }`}>
                <span className="block w-3 m-auto h-3 bg-bwp-white rounded-full"></span>
            </div>
        </div>
    )
  };
  return(<div className="bwp-slider mx-3 sm:mx-2">
      <Slider {...settings}>
          {
              items.map((item:ItemProps,i:number) => {
                return (<div key={`i${i}`}>
                    <div className="rounded-base bg-cover bg-no-repeat bg-center aspect-w-16 aspect-h-9" style={{backgroundImage: `url(${item.image})`}}>
                    </div>
                  </div>)
              })
          }
    </Slider>
  </div>)
}

export default BWPBannerSlider;