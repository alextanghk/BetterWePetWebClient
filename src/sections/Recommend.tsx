import React from "react"
import { useTranslation } from 'react-i18next';
import { BWPFlag } from "../components/common";
import Slider from "react-slick";
import { IcoRightGreen } from "../components/icons";
import { Link } from 'react-router-dom';

interface RecommendItemsProps extends React.HTMLProps<HTMLDivElement> {
    title: string,
    icon: any,
    link: string,
    color: string
}

const SliderSetting = {
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
const Recommend:React.FC<RecommendItemsProps> = ({
    title, color, children = null, link, icon, className
  }) => {
    const { t } = useTranslation();
    return (<>
      <div className={`grid grid-cols-2 ${className}`}>
        <div className=" z-0">
          <BWPFlag color={color} icon={icon}>{title}</BWPFlag>
        </div>
        <div className="text-rightz-0">
          <Link to={link} className="float-right">
            <div className={`w-auto sm:h-12 h-10 relative flex sm:p-2 p-1 ml-auto`}>
                <span className="sm:text-xl text-base leading-8 z-10">{t("lb_show_all")}</span>
                <img src={IcoRightGreen} className="h-8 z-10 mt-0 sm:-mt-0.5"/>
            </div>
          </Link>
        </div>
      </div>
      <div className="p-1"></div>
      <Slider {...SliderSetting}>
        {children}
      </Slider>
    </>)
  }
export default Recommend;