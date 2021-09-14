import React from 'react';

import { IcoLikeGrey, IcoLikeGreen } from "../icons";

interface Props {
    className?: string,
    count: number,
    large?: boolean,
    actived: boolean,
    onClick(value: boolean): void,
}

const LikeButton:React.FC<Props> = (props) => {
    const { className = "", actived, large= false, count } = props;
    return(<div className={`bwp-bg-white flex flex-row-reverse relative ${className}`}>
        <div className="px-1">
            <span className="text-base leading-8 font-family-noto">{count}</span>
        </div>
        <div className="flex-initial">
            { actived && <img className="h-8" src={IcoLikeGrey} />}
            { !actived && <img className="h-8" src={IcoLikeGreen} />}
        </div>
        
    </div>)
}
export default LikeButton;