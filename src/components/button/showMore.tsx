import React from 'react';
import { IcoRightGreen } from "../icons"

interface Props {
    className?: string
}

const ShowMore:React.FC<Props> = (props) => {
    const { className = "" } = props;
    return(<>
        <div className={`w-auto sm:h-12 h-10 relative flex sm:p-2 p-1 ${className}`}>
            <span className="sm:text-xl text-base leading-8 z-10">{props.children && props.children}</span>
            <img src={IcoRightGreen} className="h-8 z-10 mt-0 sm:-mt-0.5"/>
        </div>
    </>)
}
export default ShowMore;