import React,{ useRef } from 'react';
import { clickOutsideAlerter } from "../../helpers";
import { IcoClose } from "../icons";
import PopLine from "../../styles/assets/images/popup/popup_line@3x.png";

interface MyProps {
    children?: React.ReactNode,
    onClose?: ()=> void,
    open?: boolean,
    allowClose?: boolean,
    hideBackdrop?: boolean,
    allowBackdropClose?: boolean
}

interface ModalComponents {
    Head: React.FC<React.HTMLProps<HTMLDivElement>>;
    Body: React.FC<React.HTMLProps<HTMLDivElement>>;
}

const Head:React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const { className = "", children, ...rest} = props;
    return (<div className={`w-full relative rounded-t-2 mb-9 bg-white px-4 pt-4 pb-2`}>
        <div className={` ${className}`} {...rest}>{children}</div>
        <img src={PopLine} className={`absolute w-full h-9 left-0 -bottom-9`} />
    </div>);
}

const Body:React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const { className = "", children, ...rest} = props;
    return (<div className={`w-full rounded-b-2 bg-white p-4`}>
        <div className={` ${className}`} {...rest}>{children}</div>
    </div>);
}

const Modal:React.FC<MyProps> & ModalComponents = ({
    onClose = ()=>void(0),
    open = false,
    children = null,
    allowClose = true,
    hideBackdrop = false,
    allowBackdropClose = true
}) => {

    const wrapperRef = useRef(null);
    clickOutsideAlerter(wrapperRef, ()=> {
        if (allowBackdropClose) {
            onClose();
        }
    });

    return open ? (<>
    <div className="z-40 fixed top-0 left-0 h-screen w-screen">
        { !hideBackdrop && <div className="h-screen absolute top-0 left-0 w-screen bg-bwp-dark-grey opacity-30"></div> }
        <div className="z-40 absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4" ref={wrapperRef}>
            <div className="relative">
                { children && children }
                { 
                    allowClose && <div className={`absolute top-2 right-2 cursor-pointer`} onClick={()=> { onClose() }}><img src={IcoClose} /></div> 
                }
            </div>
        </div>
    </div>
    </>) : null
}

Modal.Head = Head
Modal.Body = Body

export default Modal;