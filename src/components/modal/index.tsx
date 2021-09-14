import React,{ useRef } from 'react';
import { clickOutsideAlerter } from "../../helpers";
import { IcoClose } from "../icons";

interface MyProps {
    children?: React.ReactNode,
    onClose?: ()=> void,
    open?: boolean,
    closeButton?: boolean
}

const Modal:React.FC<MyProps> = ({
    onClose = ()=>void(0),
    open = false,
    children = null,
    closeButton = true
}) => {

    const wrapperRef = useRef(null);
    clickOutsideAlerter(wrapperRef, ()=> {
        onClose();
    });

    return open ? (<>
    <div className="z-40 fixed top-0 left-0 h-screen w-screen">
        <div className="h-screen absolute top-0 left-0 w-screen bwp-bg-dark-grey opacity-30"></div>
        <div className="z-40 absolute top-1/2 left-1/2 transform  -translate-x-2/4 -translate-y-2/4" ref={wrapperRef}>
            <div className="relative">
                { children && children }
                { 
                    closeButton && <div className={`absolute top-2 right-2 cursor-pointer`} onClick={()=> { onClose() }}><img src={IcoClose} /></div> 
                }
            </div>
        </div>
    </div>
    </>) : null
}
export default Modal;