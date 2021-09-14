import React from 'react';
import { Link } from 'react-router-dom';
import { PostBlockProps } from "./types";

// Import Styles
import "./styles.scss";

const PostBlock:React.FC<PostBlockProps> = (props) => {
    return(<div className="bwp-item-block bwp-bg-white bwp-rounded-base flex flex-col mx-3 sm:mx-2 overflow-hidden ">
        <div className="w-full relative">
            <div className="aspect-w-16 aspect-h-9 bg-no-repeat bg-center bg-cover " style={{backgroundImage: `url(${props.image})`}}></div>
        </div>
        <div className="px-3 py-2 w-full grid grid-cols-1 h-36 w-full bwp-border-light-grey border-t border-solid relative">
            <div className="">
                <Link to={props.link}><span className="font-family-noto">{ props.title }</span></Link>
            </div>
            <div className="overflow-hidden px-2 my-3"><p className="text-xs leading-5 font-family-noto">{props.desc}</p></div>
        </div>
    </div>)
}




export default PostBlock;