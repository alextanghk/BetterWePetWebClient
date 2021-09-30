import React from 'react';
import { IcoTagBlue, IcoTagRed } from "../icons";


const Tag:React.FC<React.HTMLProps<HTMLSpanElement>> = ({
    children,
    ...props
}) => {
    return (<span className={`bg-bwp-grey px-3 py-1.5 mt-2 mx-1 cursor-pointer rounded-4 text-sm hover:text-bwp-white hover:bg-bwp-light-green`} {...props}>
        {children}
        </span>)
}

interface MyProps extends React.HTMLProps<HTMLDivElement> {
    color?: string
}

interface MySubComponents {
    Tag: React.FC<React.HTMLProps<HTMLSpanElement>>
}

const BWPTags:React.FC<MyProps> & MySubComponents = ({
    color = "blue",
    children = null,
    className = "",
    ...props
}) => {
    return (<div className={`flex ${className}`} {...props}>
        <img src={color ==="blue" ? IcoTagBlue : IcoTagRed} className="w-6 h-6 mr-2 flex-initial mt-2"/>
        <div className="flex flex-wrap ">{children}</div>
    </div>)
}

BWPTags.Tag = Tag;

export default BWPTags;