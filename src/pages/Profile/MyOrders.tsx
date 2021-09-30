import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import Profile from "../../sections/Profile";
import { BWPContainer, BWPImgInput, BWPSwiper, BWPSwitchTabs } from "../../components/common";
import { IcoDocGreen, IcoTickPink, IcoProductBlue, IcoProductWhite, IcoDocWhite, IcoServiceRed, IcoServiceWhite, IcoMoreGrey } from "../../components/icons";
import { Trans } from 'react-i18next'

// Demo only
import Dog from "../../styles/assets/demo/random5-5.jpg";
import Cat from "../../styles/assets/demo/FRS100927.jpg";

const MyOrdersPage = () => {
    const { t } = useTranslation();
    const [tab, setTab] = useState<number>(0);
    const [hTab, setHTab] = useState<number>(0);
    const [dTab, setDTab] = useState<number>(0);
    return(<>
        <Helmet>
            <title>{ t('lb_my_pets')} | Better We Pet</title>
        </Helmet>
        <Profile>
            <Profile.Body>
            <div className={``}>
                <ul className="w-full grid grid-cols-2 bg-bwp-white">
                <li className={`cursor-pointer text-center pl-2 pr-8 py-2 sm:leading-10 leading-8 border-bwp-light-green text-bwp-light-green ${tab === 0 ? "border-b-4" : ""}`} 
                    style={{
                        borderRight: "1px solid #E8E4D6"
                    }}
                    onClick={()=>{ setTab(0)}}>
                        <img src={IcoDocGreen} className="sm:w-8 w-6 sm:-mt-2 -mt-1 inline-block" />
                        <span className={`cursor-pointer font-family-noto sm:text-xl text-base`}>{t("lb_handled")}</span>
                    </li>
                    <li className={`cursor-pointer text-center pl-2 pr-8 py-2 leading-10 border-bwp-pink text-bwp-pink ${tab === 1 ? "border-b-4" : ""}`} onClick={()=>{ setTab(1)}}>
                        <img src={IcoTickPink} className="sm:w-8 w-6 sm:-mt-2 -mt-1 inline-block" />
                        <span className={`cursor-pointer font-family-noto sm:text-xl text-base`}>{t("lb_handling")}</span>
                    </li>
                </ul>
                <div className="p-2">
                    <BWPSwiper index={tab} allowSwipe={false} dynamicHeight={false} className="w-full h-96">
                        <BWPSwiper.Tab>
                            <BWPSwitchTabs index={hTab} className="bg-bwp-white my-2">
                                <BWPSwitchTabs.Tab onClick={()=> {setHTab(0)}}>
                                    <img src={hTab === 0 ? IcoDocWhite : IcoDocGreen} className={`sm:w-8 w-6 sm:-mt-2 -mt-1 inline-block`} />
                                    <span className="font-family-noto">{t("lb_all")}</span>
                                </BWPSwitchTabs.Tab>
                                <BWPSwitchTabs.Tab color="blue" onClick={()=> {setHTab(1)}}>
                                    <img src={hTab === 1 ? IcoProductWhite : IcoProductBlue} className={`sm:w-8 w-6 sm:-mt-2 -mt-1 inline-block`} />
                                    <span className="font-family-noto">{t("lb_products")}</span>
                                </BWPSwitchTabs.Tab>
                                <BWPSwitchTabs.Tab color="red" onClick={()=> {setHTab(2)}}>
                                    <img src={hTab === 2 ? IcoServiceWhite : IcoServiceRed} className={`sm:w-8 w-6 sm:-mt-2 -mt-1 inline-block`} />
                                    <span className="font-family-noto">{t("lb_services")}</span>
                                </BWPSwitchTabs.Tab>
                            </BWPSwitchTabs>
                            <BWPSwiper index={hTab} allowSwipe={true} dynamicHeight={false} afterSwipe={setHTab} className="w-full">
                                <BWPSwiper.Tab className="grid lg:grid-cols-2 gap-2 grid-cols-1">
                                    <Link to={"/my-profile/my-orders/detail/1"} className="mb-4">
                                        <BWPContainer className="bg-bwp-white lg:rounded-base">
                                            <BWPContainer.Head>
                                                <div className="flex mb-1 mt-2 pr-4 pl-3">
                                                    <div className="flex-initial">
                                                        <BWPImgInput imgSize="xs" className="mx-2 inline-block" image={Cat}/>
                                                    </div>
                                                    <span className="">貓貓小店</span>
                                                    <div className="ml-auto">  
                                                        <div className="">
                                                        <img src={IcoDocGreen} className={`w-6 -mt-1 inline-block`} />
                                                        <span className="font-family-noto text-bwp-light-green">{t("lb_handling")}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </BWPContainer.Head>
                                            <BWPContainer.Body className="border-bwp-light-grey border-t border-solid">
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={IcoMoreGrey}/>
                                            </BWPContainer.Body>
                                            <BWPContainer.Foot className="border-t-2 border-bwp-blue">
                                                <div className="flex w-full">
                                                    <div className=" flex-grow"><span>2021.09.03</span></div>
                                                    <div className="flex-initial pr-1">
                                                        <span className="text-xs">
                                                            <Trans i18nKey="lb_total_number" values={{num:"5"}}></Trans>
                                                        </span>
                                                    </div>
                                                    <div className="flex-initial">
                                                        {t("lb_total_amount")}HKD: $800.00
                                                    </div>
                                                </div>
                                            </BWPContainer.Foot>
                                        </BWPContainer>
                                    </Link>
                                    <Link to={"#"} className="mb-4">
                                    <BWPContainer className="bg-bwp-white lg:rounded-base">
                                            <BWPContainer.Head>
                                                <div className="flex mb-1 mt-2 pr-4 pl-3">
                                                    <div className="flex-initial">
                                                        <BWPImgInput imgSize="xs" className="mx-2 inline-block" image={Dog}/>
                                                    </div>
                                                    <span className="">犬隻訓練學堂</span>
                                                    <div className="ml-auto">  
                                                        <div className="">
                                                        <img src={IcoDocGreen} className={`w-6 -mt-1 inline-block`} />
                                                        <span className="font-family-noto text-bwp-light-green">{t("lb_handling")}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </BWPContainer.Head>
                                            <BWPContainer.Body className="border-bwp-light-grey border-t border-solid">
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={IcoMoreGrey}/>
                                            </BWPContainer.Body>
                                            <BWPContainer.Foot className="border-t-2 border-bwp-red">
                                                <div className="flex w-full">
                                                    <div className=" flex-grow"><span>2021.09.03</span></div>
                                                    <div className="flex-initial">
                                                        {t("lb_total_amount")}HKD: $800.00
                                                    </div>
                                                </div>
                                            </BWPContainer.Foot>
                                        </BWPContainer>
                                    </Link>
                                </BWPSwiper.Tab>
                                <BWPSwiper.Tab className="grid lg:grid-cols-2 gap-2 grid-cols-1">
                                    {/* <Link to={"/my-profile/pets/1"} className="mb-4"> */}
                                    <BWPContainer className="bg-bwp-white lg:rounded-base">
                                            <BWPContainer.Head>
                                                <div className="flex mb-1 mt-2 pr-4 pl-3">
                                                    <div className="flex-initial">
                                                        <BWPImgInput imgSize="xs" className="mx-2 inline-block" image={Cat}/>
                                                    </div>
                                                    <span className="">貓貓小店</span>
                                                    <div className="ml-auto">  
                                                        <div className="">
                                                        <img src={IcoDocGreen} className={`w-6 -mt-1 inline-block`} />
                                                        <span className="font-family-noto text-bwp-light-green">{t("lb_handling")}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </BWPContainer.Head>
                                            <BWPContainer.Body className="border-bwp-light-grey border-t border-solid">
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={IcoMoreGrey}/>
                                            </BWPContainer.Body>
                                            <BWPContainer.Foot className="border-t-2 border-bwp-blue">
                                                <div className="flex w-full">
                                                    <div className=" flex-grow"><span>2021.09.03</span></div>
                                                    <div className="flex-initial pr-1">
                                                        <span className="text-xs">
                                                            <Trans i18nKey="lb_total_number" values={{num:"5"}}></Trans>
                                                        </span>
                                                    </div>
                                                    <div className="flex-initial">
                                                        {t("lb_total_amount")}HKD: $800.00
                                                    </div>
                                                </div>
                                            </BWPContainer.Foot>
                                        </BWPContainer>
                                    {/* </Link> */}
                                </BWPSwiper.Tab>
                                <BWPSwiper.Tab className="grid lg:grid-cols-2 gap-2 grid-cols-1">
                                    {/* <Link to={"/my-profile/pets/1"} className="mb-4"> */}
                                    <BWPContainer className="bg-bwp-white lg:rounded-base">
                                            <BWPContainer.Head>
                                                <div className="flex mb-1 mt-2 pr-4 pl-3">
                                                    <div className="flex-initial">
                                                        <BWPImgInput imgSize="xs" className="mx-2 inline-block" image={Dog}/>
                                                    </div>
                                                    <span className="">犬隻訓練學堂</span>
                                                    <div className="ml-auto">  
                                                        <div className="">
                                                        <img src={IcoDocGreen} className={`w-6 -mt-1 inline-block`} />
                                                        <span className="font-family-noto text-bwp-light-green">{t("lb_handling")}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </BWPContainer.Head>
                                            <BWPContainer.Body className="border-bwp-light-grey border-t border-solid">
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={Cat}/>
                                                <BWPImgInput imgSize="sm" shape="square" className="mx-2 inline-block" image={IcoMoreGrey}/>
                                            </BWPContainer.Body>
                                            <BWPContainer.Foot className="border-t-2 border-bwp-red">
                                                <div className="flex w-full">
                                                    <div className=" flex-grow"><span>2021.09.03</span></div>
                                                    <div className="flex-initial">
                                                        {t("lb_total_amount")}HKD: $800.00
                                                    </div>
                                                </div>
                                            </BWPContainer.Foot>
                                        </BWPContainer>
                                    {/* </Link> */}
                                </BWPSwiper.Tab>
                            </BWPSwiper>
                        </BWPSwiper.Tab>
                        <BWPSwiper.Tab>
                            <BWPSwitchTabs index={dTab} className="bg-bwp-white my-2">
                                <BWPSwitchTabs.Tab onClick={()=> {setDTab(0)}}>
                                    <img src={dTab === 0 ? IcoDocWhite : IcoDocGreen} className={`sm:w-8 w-6 sm:-mt-2 -mt-1 inline-block`} />
                                    <span className="font-family-noto">{t("lb_all")}</span>
                                </BWPSwitchTabs.Tab>
                                <BWPSwitchTabs.Tab color="blue" onClick={()=> {setDTab(1)}}>
                                    <img src={dTab === 1 ? IcoProductWhite : IcoProductBlue} className={`sm:w-8 w-6 sm:-mt-2 -mt-1 inline-block`} />
                                    <span className="font-family-noto">{t("lb_products")}</span>
                                </BWPSwitchTabs.Tab>
                                <BWPSwitchTabs.Tab color="red" onClick={()=> {setDTab(2)}}>
                                    <img src={dTab === 2 ? IcoServiceWhite : IcoServiceRed} className={`sm:w-8 w-6 sm:-mt-2 -mt-1 inline-block`} />
                                    <span className="font-family-noto">{t("lb_services")}</span>
                                </BWPSwitchTabs.Tab>
                            </BWPSwitchTabs>
                            <BWPSwiper index={dTab} allowSwipe={true} dynamicHeight={false} afterSwipe={setDTab} className="w-full">
                                <BWPSwiper.Tab></BWPSwiper.Tab>
                                <BWPSwiper.Tab></BWPSwiper.Tab>
                                <BWPSwiper.Tab></BWPSwiper.Tab>
                            </BWPSwiper>
                        </BWPSwiper.Tab>
                    </BWPSwiper>
                </div>
            </div>
            </Profile.Body>
        </Profile>
    </>)
}
export default withRouter(MyOrdersPage);