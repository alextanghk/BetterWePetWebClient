import React, { useRef, useState } from "react"
import { useTranslation } from 'react-i18next';
import { IcoUserWhite, IcoEditRed } from "../icons";
import { BWPTypeSize } from "../../Types";

interface MyProps extends React.HTMLProps<HTMLInputElement> {
    image?: any,
    allowEdit?: boolean,
    shape?: "circle" | "square",
    imgSize?: BWPTypeSize,
    imgPlaceholder?: any,
    imgClassName?: string
}

const BWPImgInput:React.FC<MyProps> = (props) => {

    const { image = null, className="", imgPlaceholder=IcoUserWhite, imgClassName= "", allowEdit = false, shape = "circle", onChange = (e:any)=>void(0), imgSize = "md", ...reset } = props;

    const sizeConfig = {
        xs: { 
            imageSize : `w-6 h-6 ${shape === "circle" ? "rounded-6": "rounded-1"}`,
            btnSize: `rounded-2 py-0.5 pl-0.5 pr-0.5`,
            btnImgSize: `w-2 h-2`,
            btnTextSize: `text-xs`
        },
        sm: { 
            imageSize : `w-10 h-10 ${shape === "circle" ? "rounded-10": "rounded-2"}`,
            btnSize: `rounded-2 py-0.5 pl-0.5 pr-0.5`,
            btnImgSize: `w-2 h-2`,
            btnTextSize: `text-sm`
        },
        md: { 
            imageSize : `w-14 h-14 ${shape === "circle" ? "rounded-14": "rounded-2"}`,
            btnSize: `rounded-2 py-0.5 pl-0.5 pr-1`,
            btnImgSize: `w-4 h-4`,
            btnTextSize: `text-sm`
        },
        lg: {
            imageSize : `w-28 h-28  ${shape === "circle" ? "rounded-28": "rounded-4"}`,
            btnSize: `rounded-4 py-1 pl-1 pr-2`,
            btnImgSize: `w-6 h-6`,
            btnTextSize: `text-based`
        }
    }
    const { imageSize, btnSize, btnImgSize, btnTextSize } = sizeConfig[imgSize];


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
            <div className={`relative ${imageSize} bg-no-repeat ${ !value ? "bg-bwp-grey" : "" } bg-cover bg-center ${imgClassName}`} style={{backgroundImage: `url('${value || imgPlaceholder}')`}}>
                { allowEdit && <div className={`absolute -right-2 -bottom-1 text-bwp-red shadow flex ${btnSize}  btn-bwp-white cursor-pointer`} onClick={handleOnTrigger}>
                    <img src={IcoEditRed} className={`${btnImgSize}`} />
                    <span className={`${btnTextSize}`}>{t("lb_edit")}</span>
                </div> }
            </div>
            <input ref={ref} className="hidden" type="file" onChange={handleOnFileSelect} accept="image/png,image/jpg" disabled={!allowEdit}/>
        </div>
    </>)
}

export default BWPImgInput;