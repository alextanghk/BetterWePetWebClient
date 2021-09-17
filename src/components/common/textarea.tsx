import React, { useRef, useState } from 'react';
import { IcoClose } from "../icons";

interface BWPInputProps extends React.HTMLProps<HTMLTextAreaElement> {
    icon?: any,
    color?: string,
    large?: boolean,
    textAlign?: "left" | "center" | "right",
    onIconClick?: (e:any) => void
} 

const BWPTextArea:React.FC<BWPInputProps> = (props) => {
    
    const { icon, className ="", color = "bg-bwp-grey", 
        large = false,
        textAlign = "left",
        onIconClick = null, 
        onChange=(e:any)=>void(0),
        ...rest} = props;
    const ref = useRef<HTMLTextAreaElement>(null);
    const [value,setValue] = useState<any>(rest.value ? rest.value:"");
    const handleOnChange = (e:any) => {
        setValue(e.target.value);
        onChange(e);
    }
    const handleOnClear = () => {
        
        if (ref !== null && ref.current !== null) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value");
            if (nativeInputValueSetter !== undefined) {
                nativeInputValueSetter?.set?.call(ref.current, '');
            }
            const customEvent = new Event('input', {bubbles: true});
            ref.current.dispatchEvent(customEvent);
            setValue("");
        }
    }
    const inputClass = large ? `text-2xl ${icon ? "pl-12" : "pl-4"} py-2 rounded-5` : `text-xs rounded-base py-2 ${icon ? "pl-8" : "pl-2"}`
    const defIconClass = "";

    return (<>
        <div className={` ${className}`}>
            <div className={`relative`}>
                { icon && <img src={icon} 
                    className={`absolute left-0 top-0 w-auto h-full p-1.5 ${onIconClick === null ? "" : "cursor-pointer"}`} onClick={onIconClick === null ? (e:any) => void(0) : onIconClick} 
                /> }
                <textarea
                    ref={ref } 
                    className={
                        `w-auto max-w-full ${value.toString() != "" ? (large? "pr-12" : "pr-8"):"pr-2"} w-full font-family-noto ${color} ${inputClass} text-${textAlign}`
                    } 
                    onChange={handleOnChange}
                    {...rest} 
                >
                    {value}
                </textarea>
                { value.toString() != "" && <img src={IcoClose} 
                    className="cursor-pointer absolute right-0 top-0 w-auto h-12 p-2" onClick={handleOnClear} 
                /> }
            </div>
        </div>
    </>)
}
export default BWPTextArea;