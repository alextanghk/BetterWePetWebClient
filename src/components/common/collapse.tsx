import React, { useState, useEffect } from "react"
import { IcoDownGrey, IcoUpGrey  } from '../icons';

interface MyProps extends React.HTMLProps<HTMLDivElement> {
    expand?: boolean,
    title: any,
    onExpand?: () => void
}

const BWPCollapse:React.FC<MyProps> = ({
    expand = false,
    className = "",
    title = "",
    children = null,
    onExpand = (o:boolean) => void(0),
    ...props
}) => {
    const [open, setOpen] = useState<boolean>(expand);

    useEffect(()=>{
        if (expand !== open) setOpen(expand);
    },[expand])

    const handleOnOpen = () => {
        setOpen(!open);
        onExpand(!open);
    }
    return (<div className={`${className}`}>
        <div className={`w-full py-2 flex`} onClick={handleOnOpen}>
            <div className="text-base flex-auto">{title}</div>
            <img src={open ? IcoUpGrey: IcoDownGrey} className="w-6 h-6 justify-center flex-initial cursor-pointer"/>
        </div>
        <div className={`w-full overflow-hidden transition-max-height duration-300 ${open ? "max-h-full ease-in" : "max-h-0 ease-out"}`}
        >
            { children }
        </div>
    </div>)
}

export default BWPCollapse