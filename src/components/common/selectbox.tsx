import React, { useRef, useState } from 'react';
import { IcoClose } from "../icons";

interface BWPInputProps extends React.HTMLProps<HTMLSelectElement> {
    icon?: any,
    color?: string,
    large?: boolean,
    textAlign?: "left" | "center" | "right",
    onIconClick?: (e:any) => void
} 

const BWPSelect:React.FC<BWPInputProps> = (props) => {
    
    const { icon, className ="", color = "bg-bwp-grey", 
        large = false,
        textAlign = "left",
        onIconClick = null, 
        onChange=(e:any)=>void(0),
        children = null,
        ...rest} = props;
    const ref = useRef<HTMLSelectElement>(null);
    
    const inputClass = large ? `text-2xl ${icon ? "px-12" : "pl-4 pr-12"} py-2 rounded-5` : `text-xs rounded-base py-2 ${icon ? "px-8" : "pl-2 pr-8"}`
    const defIconClass = "";

    return (<>
        <div className={` ${className}`}>
            <div className={`relative`}>
                { icon && <img src={icon} 
                    className={`absolute left-0 top-0 w-auto h-full p-1.5 ${onIconClick === null ? "" : "cursor-pointer"}`} onClick={onIconClick === null ? (e:any) => void(0) : onIconClick} 
                /> }
                <select ref={ref } 
                    className={
                        `w-auto appearance-none bwp-select max-w-full w-full font-family-noto ${color} ${inputClass} text-${textAlign}`
                    } 
                    {...rest} 
                >
                    {children}
                </select>
                {/* { value.toString() != "" && <img src={IcoClose} 
                    className="cursor-pointer absolute right-0 top-0 w-auto h-full p-2" onClick={handleOnClear} 
                /> } */}
            </div>
        </div>
    </>)
}
export default BWPSelect;