import React, { useRef, useState } from 'react'
interface BWPInputProps extends React.HTMLProps<HTMLInputElement> {
    color?: string,
    // defaultChecked?: boolean,
    type?: 'checkbox' | 'radio'
} 

const BWPSwitch:React.FC<BWPInputProps> = (props) => {

    const { className="", color="light-green", type="radio", defaultChecked=false, onChange, ...rest } = props;
    const ref = useRef<HTMLInputElement>(null);

    const [checked, setChecked] = useState<boolean>(defaultChecked)
    const circleClass = "p-2 rounded-4 w-4 ";
    const blockClass = "rounded-6 h-6 w-10 p-1";

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

    const handleOnChange = (e:any)=> {
        setChecked(e.target.checked)
        if (onChange) onChange(e);
    }

    return (<>
        <div className={`${className}`}>
            <div className={`relative transition-colors cursor-pointer transition bg-bwp-${checked ? color : "grey"} ${blockClass}`} onClick={handleOnClick}>
                <div className={`bg-bwp-white transition translate-x-4 ${circleClass} ${checked && "transform"}`}/>
            </div>
            <input type={type} ref={ref} className={`hidden`} defaultChecked {...rest} onChange={handleOnChange}/>
        </div>
    </>)
}

export default BWPSwitch;