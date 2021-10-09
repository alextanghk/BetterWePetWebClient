import React, { useRef, useState, useEffect } from "react";
import { IcoPureTickWhite, IcoPureTickGrey } from '../icons'
import { BWPTypeSize, BWPTypeColor } from "../../Types";

interface BWPInputProps extends React.HTMLProps<HTMLInputElement> {
    color?: BWPTypeColor,
    eleSize?: BWPTypeSize,
    // defaultChecked?: boolean
} 
const BWPCheckbox:React.FC<BWPInputProps> = ({
    className="",
    color="light-green",
    eleSize="md",
    defaultChecked = false,
    onChange,
    ...props
}) => {
    const ref = useRef<HTMLInputElement>(null);
    const [checked, setChecked] = useState<boolean>(defaultChecked)

    const handleOnClick = () => {
        if (ref !== null && ref.current !== null) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked");
            if (nativeInputValueSetter !== undefined) {
                nativeInputValueSetter?.set?.call(ref.current, !checked);
            }
            const customEvent = new Event('click', {bubbles: true});
            ref.current.dispatchEvent(customEvent);
            setChecked(!checked);
        }
    }

    useEffect(()=>{
        if (defaultChecked !== checked) setChecked(defaultChecked)
    },[defaultChecked])

    const handleOnChange = (e:any)=> {
        setChecked(e.target.checked)
        if (onChange) onChange(e);
    }

    const sizeConfig = {
        xs: "w-4 h-4 rounded-4",
        sm: "w-6 h-6 rounded-6",
        md: "w-8 h-8 rounded-8",
        lg: "w-10 h-10 rounded-10",
        xl: "w-10 h-10 rounded-10"
    }

    return (<div className={`${className}`}>
        <div className={`relative transition-colors duration-75 ease-in-out bg-no-repeat bg-cover bg-center cursor-pointer transition ${checked && "bg-bwp-"+color} ${checked ? "border-bwp-"+color : "border-bwp-grey"} border-2 border-solid  ${sizeConfig[eleSize]}`} onClick={handleOnClick}
             style={{backgroundImage: `url('${checked ? IcoPureTickWhite:IcoPureTickGrey}')`}}
        >

        </div>
        <input type="checkbox" ref={ref} className="hidden" onChange={handleOnChange} {...props} />
    </div>);
}

export default BWPCheckbox