import React, { useEffect, useRef, useState } from 'react';
import { IcoClose } from "../icons";
import { BWPTypeSize } from "../../Types";

interface BWPInputProps extends React.HTMLProps<HTMLInputElement> {
    icon?: any,
    color?: string,
    allowClear?: boolean,
    inputSize?: BWPTypeSize,
    textAlign?: "left" | "center" | "right",
    onIconClick?: (e:any) => void
} 

const BWPInput:React.FC<BWPInputProps> = ({
    icon, className ="", color = "bg-bwp-grey", 
    inputSize = "md",
    allowClear = true,
    textAlign = "left",
    onIconClick = null, 
    onChange=(e:any)=>void(0),
    ...props
}) => {
    
    const ref = useRef<HTMLInputElement>(null);
    const [value,setValue] = useState<any>(props.defaultValue || props.value || "");
    const handleOnChange = (e:any) => {
        setValue(e.target.value);
        onChange(e);
    }

    useEffect(()=>{
        if (props.value !== value) {
            setValue(props.value);
        }
    },[props.value])

    const handleOnClear = () => {
        
        if (ref !== null && ref.current !== null) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value");
            if (nativeInputValueSetter !== undefined) {
                nativeInputValueSetter?.set?.call(ref.current, '');
            }
            const customEvent = new Event('input', {bubbles: true});
            ref.current.dispatchEvent(customEvent);
            setValue("");
        }
    }

    const sizeConfig = {
        xs: {
            input: `text-xs rounded-base py-2 ${icon ? "pl-8" : "pl-2"}`,
            value: `pr-8`
        },
        sm: {
            input: `text-xs rounded-base py-2 ${icon ? "pl-8" : "pl-2"}`,
            value: `pr-8`
        },
        md: {
            input: `text-xs rounded-base py-2 ${icon ? "pl-8" : "pl-2"}`,
            value: `pr-8`
        },
        lg: {
            input: `text-2xl ${icon ? "pl-12" : "pl-4"} py-2 rounded-5`,
            value: `pr-12`
        }
    }

    return (<>
        <div className={` ${className}`}>
            <div className={`relative`}>
                { icon && <img src={icon} 
                    className={`absolute left-0 top-0 w-auto h-full p-1.5 ${onIconClick === null ? "" : "cursor-pointer"}`} onClick={onIconClick === null ? (e:any) => void(0) : onIconClick} 
                /> }
                <input ref={ref } 
                    className={
                        `w-auto max-w-full ${value && allowClear ? sizeConfig[inputSize].value:"pr-2"} w-full font-family-noto ${color} ${sizeConfig[inputSize].input} text-${textAlign}`
                    } 
                    onChange={handleOnChange}
                    {...props} 
                />
                { (value && allowClear) && <img src={IcoClose} 
                    className="cursor-pointer absolute right-0 top-0 w-auto h-full p-2" onClick={handleOnClear} 
                /> }
            </div>
        </div>
    </>)
}
export default BWPInput;