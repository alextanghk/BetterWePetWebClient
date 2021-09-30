import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from "react-google-recaptcha";

import TopImg from "../styles/assets/images/login/bg_login_top.png"
import MiddleImg from "../styles/assets/images/login/bg_login_middle.png"
import BottomImg from "../styles/assets/images/login/bg_login_bottom.png"
import { BWPInput, BWPSwiper, BWPButton } from "../components/common";
import { BWPContext } from '../Context';

import { IcoUserGreen, IcoUserWhite, IcoKeyGreen, IcoLoginWhite, IcoFacebook, IcoGmail, IcoInstagram, IcoMailGreen } from "../components/icons";

interface MyProps {
    className?: string,
    afterLogin?: () => void
}

interface BMPSignInProps {
    account: string,
    password: string,
    token: string,
    authType: "general" | "facebook" | "instagram" | "gmail"
}

const SignInBox:React.FC<MyProps> = ({ className = "", afterLogin=()=>void(0)}) => {

    const { t } = useTranslation();
    const [tab, setTab] = useState<number>(0);
    // const [ token, setToken] = useState<string>("");
    const { dispatch } = useContext(BWPContext);
    const [login,setLogin] = useState<BMPSignInProps>({
        account: "",
        password: "",
        token: "",
        authType: "general",
    })

    const handleOnLogin = () =>{
        dispatch({type: "LOADING", payload: { loading: true }});
        // Handle login function here
        console.log(login);
        setTimeout(()=>{
            dispatch({type: "LOGIN_SUCCCESS", payload: { accessToken: "1234596" }});
            afterLogin();
        }, 1000)
    }

    return(<>
        <div className={ `grid grid-cols-1 bg-bwp-white xs:max-h-screen max-w-screen w-screen xs:w-96 rounded-base overflow-hidden shadow ${className}` }>
            <img src={TopImg} className="w-full"/>
            <div className="bg-bwp-khaki">
                <div className="grid grid-cols-1 mx-4">
                    <div className="bg-bwp-white">
                        <div>
                            <ul className={`w-full grid grid-cols-2 mt-3 mb-1 ${tab === 2 ? "hidden":"block"}`}>
                                <li className="cursor-pointer text-right pl-2 pr-8 leading-10" onClick={()=>{ setTab(0)}}>
                                    <span className={`cursor-pointer ${tab === 0 ? "text-3xl text-bwp-light-green" : "text-xl"}`}>{t("lb_sign_in")}</span>
                                </li>
                                <li className="cursor-pointer text-left pr-2 pl-8 leading-10" onClick={()=>{ setTab(1)}}>
                                    <span className={`cursor-pointer ${tab === 1 ? "text-3xl text-bwp-light-green" : "text-xl"}`}>{t("lb_sign_up")}</span>
                                </li>
                            </ul>
                            <BWPSwiper index={tab} className="bg-bwp-white">
                                <BWPSwiper.Tab className={`bg-bwp-white px-4 pb-6`}>
                                    <BWPInput
                                        icon={IcoUserGreen} value={login.account} 
                                        inputSize="lg" textAlign="center"
                                        onChange={(e:any)=>{ setLogin({...login, account: e.target.value }) }}
                                        placeholder={ `${t("lb_account")} / ${t("lb_email")}`}
                                    />
                                    <div className="px-2">
                                        <span className="text-bwp-red text-base"></span>
                                    </div>
                                    <BWPInput
                                        icon={IcoKeyGreen}
                                        inputSize="lg" textAlign="center"
                                        type="password" value={login.password} 
                                        className="mt-4" onChange={(e:any)=>{ setLogin({...login, password: e.target.value }) }}
                                        placeholder={ `${t("lb_password")}`}
                                    />
                                    <div className="px-2">
                                        <span className="text-bwp-red text-base"></span>
                                    </div>
                                    <div className="px-2 text-center mt-4">
                                        <a href="#" onClick={()=>{ setTab(2);}}>
                                            <span className="text-base">{t("lb_forgot_password")}？</span>
                                        </a>
                                    </div>
                                    <BWPButton
                                        className="w-full mx-auto mt-4 "
                                        size="lg"
                                        onClick={handleOnLogin}
                                    >
                                        <img src={IcoLoginWhite} className="inline-block h-8 mr-2 -mt-2"/>
                                        <span className="text-bwp-white text-2xl ">{t("lb_sign_in")}</span>
                                    </BWPButton>
                                    <div className="mt-5 bg-bwp-grey rounded-base py-2 w-full">
                                        <div className="flex px-3 py-2">
                                            <div className="text-base leading-10 pr-2">
                                                <span className="whitespace-nowrap">{t("lb_other_login_type")}</span>
                                            </div>
                                            <button className="px-3"><img src={IcoFacebook} className="w-10 h-auto" /></button>
                                            <button className="px-3"><img src={IcoGmail} className="w-10 h-auto" /></button>
                                            <button className="px-3"><img src={IcoInstagram} className="w-10 h-auto" /></button>
                                        </div>
                                    </div>
                                </BWPSwiper.Tab>
                                <BWPSwiper.Tab className={`bg-bwp-white px-4 pb-6 overflow-x-hidden`}>
                                    <BWPInput
                                        icon={IcoUserGreen}
                                        inputSize="lg" textAlign="center"
                                        placeholder={ `${t("lb_account")}`}
                                    />
                                    <div className="px-2">
                                        <span className="text-bwp-red text-base"></span>
                                    </div>
                                    <BWPInput
                                        icon={IcoMailGreen}
                                        inputSize="lg" textAlign="center"
                                        type="email" className="mt-4"
                                        placeholder={ `${t("lb_email")}`}
                                    />
                                    <div className="px-2">
                                        <span className="text-bwp-red text-base"></span>
                                    </div>
                                    <BWPInput
                                        icon={IcoKeyGreen}
                                        inputSize="lg" textAlign="center"
                                        type="password" className="mt-4"
                                        placeholder={ `${t("lb_password")}`}
                                    />
                                    <div className="px-2">
                                        <span className="text-bwp-red text-base"></span>
                                    </div>
                                    <BWPInput
                                        icon={IcoKeyGreen}
                                        inputSize="lg" textAlign="center"
                                        type="password" className="mt-4"
                                        placeholder={ `${t("lb_confirm_password")}`}
                                    />
                                    <div className="text-center px-0 xs:px-2 pt-4">
                                        <ReCAPTCHA
                                            sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA || ""}
                                            onChange={(token)=>{
                                                console.log(token);
                                                // setToken("");
                                            }}
                                        />
                                    </div>
                                    <div className="px-2">
                                        <span className="text-bwp-red text-base"></span>
                                    </div>
                                    <BWPButton
                                        className="w-full mx-auto mt-4 "
                                        size="lg"
                                    >
                                        <img src={IcoUserWhite} className="inline-block h-8 mr-2 -mt-2"/>
                                        <span className="text-bwp-white text-2xl ">{t("lb_create_account")}</span>
                                    </BWPButton>
                                    <div className="mt-5 bg-bwp-grey rounded-base py-2 w-full">
                                        <div className="flex px-3 py-2">
                                            <div className="text-base leading-10 pr-2">
                                                <span className="whitespace-nowrap">{t("lb_other_sign_up_type")}</span>
                                            </div>
                                            <button className="px-3"><img src={IcoFacebook} className="w-10 h-auto" /></button>
                                            <button className="px-3"><img src={IcoGmail} className="w-10 h-auto" /></button>
                                            <button className="px-3"><img src={IcoInstagram} className="w-10 h-auto" /></button>
                                        </div>
                                    </div>
                                </BWPSwiper.Tab>
                                <BWPSwiper.Tab className={`bg-bwp-white px-4 pb-6 overflow-x-hidden`}>
                                    <div className="w-full text-center mt-3 mb-1 pl-2 pr-2 leading-10">
                                        <span className="text-3xl">{t("lb_forgot_password")}</span>
                                    </div>
                                    <BWPInput
                                        icon={IcoMailGreen} className={`mt-2 mb-4 `}
                                        inputSize="lg" textAlign="center"
                                        placeholder={ `${t("lb_email")}`}
                                    />
                                    <div className="px-2 w-full text-center ">
                                        <span className="text-base">{t("msg_reset_note")}</span>
                                    </div>
                                    <BWPButton
                                        className="w-full mx-auto mt-4 "
                                        size="lg"
                                    >
                                        <img src={IcoLoginWhite} className="inline-block h-8 mr-2 -mt-2"/>
                                        <span className="text-bwp-white text-2xl ">{t("lb_sign_in")}</span>
                                    </BWPButton>
                                    <BWPButton
                                        className="w-full mx-auto mt-4 "
                                        size="lg" color="grey"
                                        onClick={() => {setTab(0)}}
                                    >
                                        <span className="text-bwp-white text-2xl ">{t("lb_cancel")}</span>
                                    </BWPButton>
                                </BWPSwiper.Tab>
                            </BWPSwiper>
                            
                            
                            
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