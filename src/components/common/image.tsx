import React, { useRef, useState } from "react"
import { useTranslation } from 'react-i18next';
import { isPropertySignature } from "typescript";
import { IcoUserWhite, IcoEditRed } from "../icons";

interface MyProps extends React.HTMLProps<HTMLInputElement> {
    image?: any,
    allowEdit?: boolean,
    large?: boolean
    imgPlaceholder?: any
}

const BWPImgInput:React.FC<MyProps> = (props) => {

    const { image = null, className="", imgPlaceholder=IcoUserWhite, allowEdit = false, large = false, onChange = (e:any)=>void(0), ...reset } = props;
    const imageSize = large ? "w-28 h-28 rounded-28" : "w-14 h-14 rounded-14"
    const btnSize = large ? " rounded-3 py-1 pl-1 pr-2" : " rounded-2 py-0.5 pl-0.5 pr-1"
    const btnImgSize = large ? "w-6 h-6" : "w-4 h-4"
    const btnTextSize = large ? "text-based" : "text-xs"

    const [value, setValue] = useState<any>(image);
    const ref = useRef<HTMLInputElement>(null);
    const { t } = useTranslation();

    const handleOnTrigger = () => {
        if (ref !== null && ref.current !== undefined) {
            ref?.current?.click();
        }
    }

    const handleOnFileSelect = (e:any) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            setValue(URL.createObjectURL(file));
        }
        onChange(e)
    }

    return (<>
        <div className={`${className}`}>
            <div className={`relative ${imageSize} mx-auto bg-no-repeat bg-bwp-grey bg-cover bg-center`} style={{backgroundImage: `url('${value || imgPlaceholder}')`}}>
                { allowEdit && <div className={`absolute -right-2 -bottom-1 text-bwp-red shadow flex ${btnSize}  bwp-btn-white cursor-pointer`} onClick={handleOnTrigger}>
                    <img src={IcoEditRed} className={`${btnImgSize}`} />
                    <span className={`${btnTextSize}`}>{t("lb_edit")}</span>
                </div> }
            </div>
            <input ref={ref} className="hidden" type="file" onChange={handleOnFileSelect} accept="image/png,image/jpg" disabled={!allowEdit}/>
        </div>
    </>)
}

export default BWPImgInput;