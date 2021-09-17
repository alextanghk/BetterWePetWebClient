import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

interface Props {
    icon: any,
    color: string
}

interface SvgProps {
    className?: string,
    color: string
}

const FlagSvg:React.FC<SvgProps> = (props) => {
    const { className="", color } = props;

    return (<div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 33.101"><defs></defs><g transform="matrix(1,0,0,1,21.5,-158.9)"><path className={`fill-current text-bwp-${color}`} d="M -996.8 2102.1 h -7.5 C -1005.6 2102.1 -1006.8 2101.6 -1007.7 2100.7 C -1008.6 2099.8 -1009.1 2098.6 -1009.1 2097.3 v -23.5 C -1009.1 2072.5 -1008.6 2071.3 -1007.7 2070.4 C -1006.8 2069.5 -1005.6 2069 -1004.3 2069 H -996.8 C -995.4 2069 -994.1 2069.6 -993.2 2070.6 l 10.6 11.7 C -980.9 2084.1 -980.9 2087 -982.6 2088.8 l -10.6 11.7 C -994.1 2101.5 -995.4 2102.1 -996.8 2102.1 Z" transform="translate(983.6,-1910.1)"/></g></svg>
    </div>)
}

const BWPFlag:React.FC<Props> = (props) => {
    const { icon, color, children } = props;
    return (<div className="relative">
        <div className={`w-max sm:h-12 h-10 relative bg-bwp-${color} flex sm:p-2 p-1 rounded-lg`}>
            <img src={icon} className="h-7 sm:h-8 z-10 sm:-mt-0.5 mt-0.5"/>
            <span className="sm:text-xl leading-8 text-base z-10 text-bwp-white mr-1.5">{ children }</span>
            <FlagSvg className="h-10 sm:h-12 w-10 sm:w-12 absolute top-0 -right-7" color={color}/>
        </div>
    </div>)
}

export default BWPFlag;