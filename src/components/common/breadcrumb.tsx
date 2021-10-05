import React from "react"
import { Link } from 'react-router-dom';
import { IcoRightGrey } from '../icons'
import { useTranslation } from 'react-i18next';
const BWPBreadCrumb:React.FC<React.HTMLProps<HTMLDivElement>> = ({
    children = null,
    className=""
}) => {
    const childs = children ? React.Children.toArray(children) : []
    const { t } = useTranslation();

    return (<div className={`${className}`}>
        <div className="leading-6 flex my-4">
            <Link to="/">{t("lb_home")}</Link>
            <img src={IcoRightGrey} className="w-4 h-4 my-1 mx-2" />
            {
                childs.map((child, i:number)=>{
                    return (<>
                    {child}
                    {i < (childs.length-1) && <img src={IcoRightGrey} className="w-4 h-4 my-1 mx-2" />} 
                    </>);
                })
            }
        </div>
    </div>);
}

export default BWPBreadCrumb