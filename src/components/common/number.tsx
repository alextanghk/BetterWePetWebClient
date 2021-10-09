import React, { useRef, useState } from 'react';
import { IcoPlus, IcoMinus } from "../icons";
import { BWPTypeSize } from "../../Types";


interface BWPNumberProps extends React.HTMLProps<HTMLInputElement> {
    inputSize?: BWPTypeSize,
    vertical?: boolean,
    textAlign?: "left" | "center" | "right",
}

const BWPNumber:React.FC<BWPNumberProps> = (props) => {
    const { className, inputSize = "md", vertical = false, textAlign = "left", ...rest } = props
    const ref = useRef<HTMLInputElement>(null);

    const handleOnIncrease = () => {
        if (ref !== null && ref.current !== null) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value");
            const value = isNaN(parseFloat(ref.current.value)) ? 0 : parseFloat(ref.current.value)
            if (nativeInputValueSetter !== undefined) {
                if (rest.max !== undefined)
                    nativeInputValueSetter?.set?.call(ref.current, value === rest.max ? rest.max : value + 1);
                else
                    nativeInputValueSetter?.set?.call(ref.current, value + 1);
            }
            const customEvent = new Event('input', {bubbles: true});
            ref.current.dispatchEvent(customEvent);
        }
    }

    const handleOnDecrease = () => {
        if (ref !== null && ref.current !== null) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value");
            const value = isNaN(parseFloat(ref.current.value)) ? 0 : parseFloat(ref.current.value)
            if (nativeInputValueSetter !== undefined) {
                if (rest.min !== undefined)
                    nativeInputValueSetter?.set?.call(ref.current, value === rest.min ? rest.min : value - 1);
                else
                    nativeInputValueSetter?.set?.call(ref.current, value - 1);
            }
            const customEvent = new Event('input', {bubbles: true});
            ref.current.dispatchEvent(customEvent);
        }
    }

    const sizeConfig = vertical ? {
        xs : { container:`w-4 rounded-4`, input:`text-xs` },
        sm : { container:`w-4 rounded-4`, input:`text-sm` },
        md : { container:`w-6 rounded-6`, input:`text-base` },
        lg : { container:`w-8 rounded-8`, input:`text-lg` },
        xl : { container:`w-10 rounded-10`, input:`text-xl` },
    } : {
        xs : { container:`h-4 rounded-4`, input:`text-xs` },
        sm : { container:`h-4 rounded-4`, input:`text-sm` },
        md : { container:`h-6 rounded-6`, input:`text-base` },
        lg : { container:`h-8 rounded-8`, input:`text-lg` },
        xl : { container:`h-10 rounded-10`, input:`text-xl` },
    }

    return vertical ? (<div className={ `${className}` }>
        <div className={` relative flex flex-col p-0.5 box-content bg-bwp-grey ${sizeConfig[inputSize].container}`}>
            <img src={IcoPlus} className={`w-full cursor-pointer`} onClick={handleOnIncrease}/>
            <input ref={ref} type="number" className={`bg-bwp-grey text-${textAlign} w-full ${sizeConfig[inputSize].input}`} {...rest}/>
            <img src={IcoMinus} className={`w-full cursor-pointer`} onClick={handleOnDecrease}/>
        </div>
    </div>) : (<div className={ `${className}` }>
        <div className={` relative flex p-0.5 box-content w-full bg-bwp-grey ${sizeConfig[inputSize].container}`}>
            <img src={IcoPlus} className={`h-full cursor-pointer flex-initial`} onClick={handleOnIncrease}/>
            <input ref={ref} type="number" className={`bg-bwp-grey w-full text-${textAlign} ${sizeConfig[inputSize].input}`} {...rest}/>
            <img src={IcoMinus} className={`h-full cursor-pointer flex-initial`} onClick={handleOnDecrease}/>
        </div>
    </div>)
}

export default BWPNumber