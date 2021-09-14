import React, { useRef, useState } from 'react';
import { IcoClose } from "../icons";

interface BWPInputProps extends React.HTMLProps<HTMLInputElement> {
    icon?: any,
    color?: string,
    large?: boolean,
    textAlign?: "left" | "center" | "right",
    onIconClick?: (e:any) => void
} 

const BWPInput:React.FC<BWPInputProps> = (props) => {
    
    const { icon, className ="", color = "bwp-bg-grey", 
        large = false, onChange = (e:any) => void(0), 
        textAlign = "left",
        onIconClick = null, ...rest} = props;
    const ref = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>("");
    const handleOnChange = (e:any) => {
        setValue(e.target.value);
        if (onChange !== null && onChange !== undefined) {
            onChange(e);
        }
    }
    const handleOnClear = () => {
        if (ref !== null && ref.current !== null) {
            ref.current.value = "";
        }
        setValue("")
    }
    const defInputClass = "w-auto max-w-full w-full font-family-noto";
    const defIconClass = "";

    return (<>
        <div className={` ${className}`}>
            <div className={`relative`}>
                { icon && <img src={icon} 
                    className={`absolute left-0 top-0 w-auto h-full p-1.5 ${onIconClick === null ? "" : "cursor-pointer"}`} onClick={onIconClick === null ? (e:any) => void(0) : onIconClick} 
                /> }
                <input ref={ref} 
                    className={
                        large ? 
                        `${defInputClass} ${color} text-2xl px-12 py-2 bwp-rounded-5 text-${textAlign}` :
                        `${defInputClass} ${color} text-xs bwp-rounded-base py-2 px-8 text-${textAlign}`
                    } 
                    onChange={ handleOnChange } {...rest} 
                />
                { value && <img src={IcoClose} 
                    className="cursor-pointer absolute right-0 top-0 w-auto h-full p-2" onClick={handleOnClear} 
                /> }
            </div>
        </div>
    </>)
}
export default BWPInput;