import React from 'react'
import { BWPTypeColor, BWPTypeSize } from "../../Types";

interface MyProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?: BWPTypeColor,
    txtColor?: string,
    size?: BWPTypeSize
}

const BWPButton:React.FC<MyProps> = ({
    color = "green",
    size = "md",
    children, 
    className="",
    ...props
}) => {
    const classNames = className.split(" ");
    const sizeConfig = {
        xs: `${!classNames.find(x => x.startsWith("px-")) && "px-0.5" } py-0.5 rounded-3`,
        sm: `${!classNames.find(x => x.startsWith("h-")) && "h-10" } ${!classNames.find(x => x.startsWith("px-")) && "px-3" } rounded-5`,
        md: `${!classNames.find(x => x.startsWith("h-")) && "h-10" } ${!classNames.find(x => x.startsWith("px-")) && "px-3" } rounded-5`,
        lg: `${!classNames.find(x => x.startsWith("h-")) && "h-12" } ${!classNames.find(x => x.startsWith("px-")) && "px-12" } rounded-12`,
    }

    return (<button
        className={`${sizeConfig[size]} btn-bwp-${color} ${className}`}
        {...props}
    >
        {children}
    </button>);
}

export default BWPButton;