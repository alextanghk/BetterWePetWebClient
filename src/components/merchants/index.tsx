import React from "react"
import { Link } from "react-router-dom";
import { BWPTypeSize } from "../../Types"
import { BWPImgInput } from "../common";
interface MyProps {
    size: BWPTypeSize,
    link: string,
    icon: any,
    name: string,
    className?: string
}
const BWPMerchant:React.FC<MyProps> = ({
    size = "md",
    link = "#",
    icon = null,
    name = "",
    className= ""
}) => {
    const sizeConfig = {
        xs: "",
        sm: "",
        md: "",
        lg: "",
    }
    return (
        <Link to={link} className={`flex mb-1 mt-2 pr-4 ${className}`}>
            <div className="flex-initial">
                <BWPImgInput imgSize={size} className="mx-2 inline-block" image={icon}/>
            </div>
            <span className="">{name}</span>
        </Link>
    )
}

export default BWPMerchant