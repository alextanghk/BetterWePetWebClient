import React from "react";
import { BWPContainer, BWPImgInput } from "../common";
import { IcoFavPink, IcoFavFilled, IcoLikeGrey, IcoLikeGreen } from "../icons";
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

interface MyProps {
    cover: any,
    link: string,
    title: string,
    description: string
}

const BWPBlogPostBlock:React.FC<MyProps> = ({
    cover,
    link,
    title,
    description
}) => {
    const { t } = useTranslation();
    return (<BWPContainer className="bwp-container rounded-base bg-bwp-white mx-3 sm:mx-2">
    <BWPContainer.Head background={cover} />
    <BWPContainer.Body className="grid grid-cols-1 border-bwp-light-grey border-t border-solid">
      <div className="">
          <Link to={link}><span className="font-family-noto">{ title }</span></Link>
      </div>
      <div className="overflow-hidden h-20 px-2 my-3"><p className="text-xs leading-5 font-family-noto">{description}</p></div>
    </BWPContainer.Body>
  </BWPContainer>);
}

export default BWPBlogPostBlock;