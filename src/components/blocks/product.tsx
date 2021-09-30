import React from "react";
import { BWPContainer, BWPImgInput } from "../common";
import { IcoFavPink, IcoFavFilled, IcoLikeGrey, IcoLikeGreen } from "../icons";
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

interface MyProps {
    cover: any,
    isFavourite?: boolean,
    onFavourite?: (e:any) => void,
    isLiked?: boolean,
    onLike?: (e:any) => void,
    likedCount?: number,
    itemName: string,
    itemLink: string,
    prevPrice?: string,
    price: string,
    discount?:string,
    merchantName: string,
    merchantLink: string,
    merchantImg: any
}

const BWPProductBlock:React.FC<MyProps> = ({
    cover,
    isFavourite = false,
    onFavourite = () => void(0),
    onLike = () => void(0),
    isLiked = false,
    likedCount = null,
    itemName = "",
    itemLink,
    prevPrice = null,
    price,
    discount = null,
    merchantName,
    merchantLink,
    merchantImg,
    ...props
}) => {
    const { t } = useTranslation();

    return (<>
    <BWPContainer className="bwp-container rounded-base bg-bwp-white mx-3 sm:mx-2">
        <BWPContainer.Head background={cover}>
            <div className="absolute right-3 top-3" >
                <div className={`bg-bwp-white cursor-pointer rounded-full w-7 h-7 relative`}
                    onClick={onFavourite}
                >
                    <div>
                        <img className="w-7 h-7 pt-px pl-px" src={isFavourite ? IcoFavFilled : IcoFavPink} />
                    </div>
                </div>
            </div>
        </BWPContainer.Head>
        <BWPContainer.Body className="h-24">
            <div className="truncate">
                <Link to={itemLink}>
                    <span className="text-lg font-semibold font-family-noto">{ itemName }</span>
                </Link>
            </div>
            <div className="text-right pt-2">
                { prevPrice && <span className="text-sm line-through text-bwp-grey font-family-noto">HKD${prevPrice}</span> }
            </div>
            <div className="text-right">
                <span className="text-xl text-bwp-green font-semibold font-family-noto">HKD${price}</span>
            </div>
        </BWPContainer.Body>
        <BWPContainer.Foot>
            <div className="flex-auto">
                <Link to={merchantLink} className="flex">
                    <span className="rounded-full w-7 h-7 mt-0.5 bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${merchantImg})`}}>
                    </span>
                    <span className="truncate text-base leading-8 font-semibold px-2 font-family-noto">{merchantName}</span>
                </Link>
            </div>
            <div className="flex-auto justify-self-end">
                <div className={`bg-bwp-white flex flex-row-reverse relative cursor-pointer`}
                    onClick={onLike}
                >
                    <div className="px-1">
                        <span className="text-base leading-8 font-family-noto">{ likedCount ? likedCount : ""}</span>
                    </div>
                    <div className="flex-initial">
                        <img className="h-8" src={isLiked ? IcoLikeGreen : IcoLikeGrey} />
                    </div>
                </div>
            </div>
        </BWPContainer.Foot>
    </BWPContainer>
    </>);
}

export default BWPProductBlock;