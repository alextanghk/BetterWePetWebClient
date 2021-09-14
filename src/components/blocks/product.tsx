import React from 'react';
import { Link } from 'react-router-dom';
import { ProductBlockProps } from "./types";

// Import Components
import { FavButton, LikeButton } from "../button";

// Import Styles
import "./styles.scss";

const ProductBlock:React.FC<ProductBlockProps> = (props) => {
    const { favorite = true, liked = true, likedCount = 0 , price, discount = 0, currency = "HKD$" } = props;
    return(<div className="bwp-item-block bwp-bg-white bwp-rounded-base flex flex-col mx-3 sm:mx-2 overflow-hidden">
        <div className="w-full relative" >
            <div className="aspect-w-16 aspect-h-9 bg-no-repeat bg-center bg-cover " style={{backgroundImage: `url(${props.itemImage})`}}></div>
            <div className="absolute right-3 top-3" ><FavButton actived={favorite} onClick={props.onClickFavorite}/></div>
        </div>
        <div className="px-3 py-2 h-24 w-full relative">
            <div className="truncate">
                <Link to={props.itemLink}>
                    <span className="text-lg font-semibold font-family-noto">{ props.itemName }</span>
                </Link>
            </div>
            {
                discount > 0 && <div className="text-right pt-2">
                    <span className="text-sm line-through bwp-text-grey font-family-noto">{currency}{ price }</span>
                </div>
            }
            <div className="text-right">
                <span className="text-xl bwp-text-green font-semibold font-family-noto">{currency}{ discount === 0 ? price : discount }</span>
            </div>
        </div>
        <div className="px-3 pt-2 pb-1 flex h-12 w-full bwp-border-light-grey border-t border-solid relative ">
            <div className="flex-auto">
                <Link to={props.providerLink} className="flex">
                    <span className="rounded-full w-7 h-7 mt-0.5 bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${props.providerIcon})`}}>
                    </span>
                    <span className="truncate text-base leading-8 font-semibold px-2 font-family-noto">{props.providerName}</span>
                </Link>
            </div>
            <div className="flex-auto justify-self-end">
                <LikeButton count={likedCount} actived={liked} onClick={props.onClickLike}/>
            </div>
        </div>
    </div>)
}


export default ProductBlock;