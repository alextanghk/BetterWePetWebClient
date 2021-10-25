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

    const styleConfig = vertical ? {
        container: "flex-col", image: "w-full"
    } : {
        container: "w-full", image: "h-full flex-initial"
    }
    return (
        <div className={ `${className}` }>
            <div data-testid="bwp-number" className={` relative flex ${styleConfig.container} p-0.5 box-content bg-bwp-grey ${sizeConfig[inputSize].container}`}>
                <img src={IcoPlus} data-testid="bwp-number-increase" className={`${styleConfig.image} cursor-pointer`} onClick={handleOnIncrease}/>
                <input ref={ref} data-testid="bwp-number-input" type="number" className={`bg-bwp-grey text-${textAlign} w-full ${sizeConfig[inputSize].input}`} {...rest}/>
                <img src={IcoMinus} data-testid="bwp-number-decrease" className={`${styleConfig} cursor-pointer`} onClick={handleOnDecrease}/>
            </div>
        </div>
    )
}

export default BWPNumber