import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import TopImg from "../../styles/assets/images/login/bg_login_top.png"
import MiddleImg from "../../styles/assets/images/login/bg_login_middle.png"
import BottomImg from "../../styles/assets/images/login/bg_login_bottom.png"
import { BWPInput } from "../common";

import { IcoUserGreen, IcoUserWhite, IcoKeyGreen, IcoLoginWhite, IcoFacebook, IcoGmail, IcoInstagram, IcoMailGreen } from "../icons";

interface SignInProps {
    onClose?: (e:any)=> void
}
const SignInBox:React.FC<SignInProps> = ({
    onClose = (e:any)=>void(0)
}) => {
    
    const { t } = useTranslation();

    const [tab, setTab] = useState<number>(1);

    return(<>
        <div className="grid grid-cols-1 bwp-bg-white max-h-screen max-w-screen w-screen xs:w-96 bwp-rounded-base overflow-hidden shadow">
            <img src={TopImg} className="w-full"/>
            <div className="bwp-bg-khaki">
                <div className="grid grid-cols-1 mx-4">
                    <div className="bwp-bg-white">
                        <ul className="w-full grid grid-cols-2 mt-3 mb-1">
                            <li className="cursor-pointer text-right pl-2 pr-8 leading-10" onClick={()=>{ setTab(1)}}>
                                <span className={`cursor-pointer ${tab === 1 ? "text-3xl bwp-text-light-green" : "text-xl"}`}>{t("lb_sign_in")}</span>
                            </li>
                            <li className="cursor-pointer text-left pr-2 pl-8 leading-10" onClick={()=>{ setTab(2)}}>
                                <span className={`cursor-pointer ${tab === 2 ? "text-3xl bwp-text-light-green" : "text-xl"}`}>{t("lb_sign_up")}</span>
                            </li>
                        </ul>
                        <div className={`relative ${tab=== 1 ? `se:h-96 h-80` : `se:h-96 xs:h-110 h-80` } overflow-y-auto`}>
                            <div className={`${tab === 1 ? "":"transform"} transition-transform absolute top-0 left-0 bwp-bg-white -translate-x-140 w-full px-4 mt-2 mb-4 grid grid-cols-1 gap-y-2`}>
                                <BWPInput
                                    icon={IcoUserGreen}
                                    large={true} textAlign="center"
                                    placeholder={ `${t("lb_account")} / ${t("lb_email")}`}
                                />
                                <div className="px-2"><span className="bwp-text-red text-base"></span></div>
                                <BWPInput
                                    icon={IcoKeyGreen}
                                    large={true} textAlign="center"
                                    type="password"
                                    placeholder={ `${t("lb_password")}`}
                                />
                                <div className="px-2"><span className="bwp-text-red text-base"></span></div>
                                <div className="px-2 text-center">
                                    <Link to="/"><span className="text-base">{t("lb_forgot_password")}</span></Link>
                                </div>
                                <button className="bwp-btn-green bwp-text-white text-2xl px-12 py-2 bwp-rounded-5 w-full mx-auto leading-9">
                                    <img src={IcoLoginWhite} className="inline-block h-9 mr-2"/>
                                    <span>{t("lb_sign_in")}</span>
                                </button>
                                <div className="mt-5 bwp-bg-grey bwp-rounded-base py-2 w-full">
                                    <div className="flex px-3 py-2">
                                        <div className="text-base leading-10 pr-2">
                                            <span className="whitespace-nowrap">{t("lb_other_login_type")}</span>
                                        </div>
                                        <button className="px-3"><img src={IcoFacebook} className="w-10 h-auto" /></button>
                                        <button className="px-3"><img src={IcoGmail} className="w-10 h-auto" /></button>
                                        <button className="px-3"><img src={IcoInstagram} className="w-10 h-auto" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className={`${tab === 2 ? "":"transform"} transition-transform absolute top-0 left-0 bwp-bg-white -translate-x-140 w-full px-4 mt-2 mb-4 grid grid-cols-1 gap-y-2`}>
                                <BWPInput
                                    icon={IcoUserGreen}
                                    large={true} textAlign="center"
                                    placeholder={ `${t("lb_account")}`}
                                />
                                <div className="px-2"><span className="bwp-text-red text-base"></span></div>
                                <BWPInput
                                    icon={IcoMailGreen}
                                    large={true} textAlign="center"
                                    type="email"
                                    placeholder={ `${t("lb_email")}`}
                                />
                                <div className="px-2"><span className="bwp-text-red text-base"></span></div>
                                <BWPInput
                                    icon={IcoKeyGreen}
                                    large={true} textAlign="center"
                                    type="password"
                                    placeholder={ `${t("lb_password")}`}
                                />
                                <div className="px-2"><span className="bwp-text-red text-base"></span></div>
                                <BWPInput
                                    icon={IcoKeyGreen}
                                    large={true} textAlign="center"
                                    type="password"
                                    placeholder={ `${t("lb_confirm_password")}`}
                                />
                                <div className="px-2"><span className="bwp-text-red text-base"></span></div>
                                <button className="bwp-btn-green bwp-text-white text-2xl px-12 py-2 bwp-rounded-5 w-full mx-auto leading-9">
                                    <img src={IcoUserWhite} className="inline-block h-9 mr-2"/>
                                    <span>{t("lb_create_account")}</span>
                                </button>
                                <div className="mt-5 bwp-bg-grey bwp-rounded-base py-2 w-full">
                                    <div className="flex px-3 py-2">
                                        <div className="text-base leading-10 pr-2">
                                            <span className="whitespace-nowrap">{t("lb_other_sign_up_type")}</span>
                                        </div>
                                        <button className="px-3"><img src={IcoFacebook} className="w-10 h-auto" /></button>
                                        <button className="px-3"><img src={IcoGmail} className="w-10 h-auto" /></button>
                                        <button className="px-3"><img src={IcoInstagram} className="w-10 h-auto" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={MiddleImg} className="w-full -mt-px" />
                </div>
            </div>
            <img src={BottomImg}  className="w-full"/>
        </div>
    </>)
}
export default SignInBox;