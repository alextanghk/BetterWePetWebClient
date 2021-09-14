import React from 'react';

import { IcoFavPink, IcoFavFilled } from "../icons";

interface Props {
    className?: string,
    actived: boolean,
    onClick(value: boolean): void,
}

const FavButton:React.FC<Props> = (props) => {
    const { className = "", actived } = props;
    return(<div className={`bwp-bg-white cursor-pointer rounded-full w-7 h-7 relative ${className}`}>
        <div>
            { actived && <img className="w-7 h-7 pt-px pl-px" src={IcoFavFilled} />}
            { !actived && <img className="w-6 h-6 pt-1 mb-1 pl-1" src={IcoFavPink} />}
        </div>
    </div>)
}
export default FavButton;