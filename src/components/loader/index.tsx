import React from 'react';
import { useTranslation } from 'react-i18next';

import "./loader.scss";
import icon from "./icon.png";

const Loader = () => {
    
    const { t } = useTranslation();

    return(<div className="z-50 fixed top-0 left-0 h-screen w-screen">
        <div className="h-screen absolute top-0 left-0 w-screen bg-bwp-dark-grey opacity-30"></div>
        <div className="z-50 absolute bg-bwp-white w-40 h-40 p-5 rounded-full shadow inset-1/2 -mt-20 -ml-20">
            <img src={icon} className="w-20 h-auto mx-auto opacity-70"/>
            <div className="flex justify-center align-middle mx-auto -mt-12">
                { t("lb_loading").split("").map((s, i)=> {
                    return (<div className={`font-semibold text-2xl animate-bounce px-1 ${ i%2 === 0 ? "animate-delay-100" : ""}`} key={`loader-${i}`}>{s}</div>);
                })}
            </div>
        </div>
    </div>)
}
export default Loader;