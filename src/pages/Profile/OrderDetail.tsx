import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { Trans, useTranslation } from 'react-i18next';
import Profile from "../../sections/Profile";
import { BWPImgInput } from "../../components/common";
import { IcoProductGreen, IcoBellGreen, IcoRightGrey, IcoLocationBlue } from "../../components/icons";

// Demo only
import Dog from "../../styles/assets/demo/random5-5.jpg";
import Cat from "../../styles/assets/demo/FRS100927.jpg";

const OrderDetailPage = () => {
    const { t } = useTranslation();

    return (<>
        <Helmet>
            <title>{ t('lb_order_histories') } | Better We Pet</title>
        </Helmet>
        <Profile>
            <Profile.Menus className="md:block hidden">
                <div className="grid grid-cols-2">
                    <span>{t("lb_order_number")}：</span>
                    <span>ORD210903001</span>
                    <span>{t("lb_order_status")}：</span>
                    <span>交易成功</span>
                    <span>{t("lb_transaction_status")}：</span>
                    <span>交易成功</span>
                    <span>{t("lb_order_date")}：</span>
                    <span>2021.09.03 14:53</span>
                </div>
            </Profile.Menus>
            <Profile.Menus className="md:mt-4 md:block hidden">
                <div className="flex">
                    <img src={IcoLocationBlue} className={`w-7 h-auto flex-initial self-start mr-2 mt-1`} />
                    <div className="grid grid-cols-2">
                        <span className="text-bwp-blue font-semibold">Kitty Tan</span>
                        <span>+852 5555 4444</span>
                        <p className="col-span-2">
                            Room 1904, Tai Mong Building, <br />
                            Mongkok, Kownloon
                        </p>
                    </div>
                </div>
            </Profile.Menus>
            <Profile.Menus className="md:mt-4">
                <Link to="/my-profile/update-profile" className="flex">
                    <img src={IcoProductGreen} className={`w-7 h-auto flex-initial`} />
                    <span className="flex-auto px-2">{t("lb_order_qr")}</span>
                    <img src={IcoRightGrey} className={`w-7 h-auto flex-initial`} />
                </Link>
            </Profile.Menus>
            <Profile.Menus className="">
                <Link to="/my-profile/update-profile" className="flex">
                    <img src={IcoBellGreen} className={`w-7 h-auto flex-initial`} />
                    <span className="flex-auto px-2">{t("lb_order_refund")}</span>
                    <img src={IcoRightGrey} className={`w-7 h-auto flex-initial`} />
                </Link>
            </Profile.Menus>
            
            <Profile.Body>
                <div className="grid grid-cols-2 bg-bwp-white p-4 mb-4 md:hidden">
                    <span>{t("lb_order_number")}：</span>
                    <span>ORD210903001</span>
                    <span>{t("lb_order_status")}：</span>
                    <span>交易成功</span>
                    <span>{t("lb_transaction_status")}：</span>
                    <span>交易成功</span>
                    <span>{t("lb_order_date")}：</span>
                    <span>2021.09.03 14:53</span>
                </div>
                <div className="flex bg-bwp-white p-4 mb-4 md:hidden">
                    <img src={IcoLocationBlue} className={`w-7 h-auto flex-initial self-start mr-2 mt-1`} />
                    <div className="grid grid-cols-2">
                        <span className="text-bwp-blue font-semibold">Kitty Tan</span>
                        <span>+852 5555 4444</span>
                        <p className="col-span-2">
                            Room 1904, Tai Mong Building, <br />
                            Mongkok, Kownloon
                        </p>
                    </div>
                </div>
                <div className="w-full bg-bwp-white p-4 mb-4">
                    <div className="grid grid-cols-1 gap-2">
                        <div>
                            <div className="flex mb-2 border-b border-bwp-light-grey border-solid">
                                <div className="flex-initial">
                                    <BWPImgInput imgSize="xs" className="mx-2 inline-block" image={Cat}/>
                                </div>
                                <span>貓貓小店</span>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <div className="flex">
                                <BWPImgInput imgSize="md" shape="square" className="mr-4 inline-block flex-initial self-center" image={Cat} imgClassName=" border-bwp-blue border-2 border-solid"/>
                                <div className="flex-auto">
                                    <label className="font-semibold font-family-noto block text-bwp-blue">貓貓版吞拿魚罐頭</label>
                                    <span>尺寸：大</span><br />
                                    <span>數量：1</span>
                                </div>
                            </div>
                            <div className="text-right md:col-span-1">
                                <span className="block text-xs line-through	text-bwp-grey">HKD: $800.00</span>
                                <span className="md:text-base text-sm font-semibold">HKD: $400.00</span>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <div className="flex">
                                <BWPImgInput imgSize="md" shape="square" className="mr-4 inline-block flex-initial self-center" image={Cat} imgClassName=" border-bwp-blue border-2 border-solid"/>
                                <div className="flex-auto">
                                    <label className="font-semibold font-family-noto block text-bwp-blue">貓貓版吞拿魚罐頭</label>
                                    <span>尺寸：大</span><br />
                                    <span>數量：1</span>
                                </div>
                            </div>
                            <div className="text-right md:col-span-1">
                                <span className="block text-xs line-through	text-bwp-grey">HKD: $800.00</span>
                                <span className="md:text-base text-sm font-semibold">HKD: $400.00</span>
                            </div>
                        </div>
                        <div className="flex justify-end items-end pt-1 border-t border-bwp-light-grey border-solid">
                            <div className="flex-initial font-semibold mx-1 font-family-noto">
                                {t("lb_delivery_fee")}
                            </div>
                            <div className="flex-initial text-bwp-light-green font-semibold  font-family-noto">
                                免運費
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-bwp-white p-4 mb-4">
                    <div className="grid grid-cols-1 gap-2">
                        <div>
                            <div className="flex mb-2 border-b border-bwp-light-grey border-solid">
                                <div className="flex-initial">
                                    <BWPImgInput imgSize="xs" className="mx-2 inline-block" image={Cat}/>
                                </div>
                                <span>狗狗小店</span>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <div className="flex">
                                <BWPImgInput imgSize="md" shape="square" className="mr-4 inline-block flex-initial self-center"
                                imgClassName=" border-bwp-blue border-2 border-solid"
                                 image={Cat}/>
                                <div className="flex-auto">
                                    <label className="font-semibold font-family-noto block text-bwp-blue">貓貓版吞拿魚罐頭</label>
                                    <span>尺寸：大</span><br />
                                    <span>數量：1</span>
                                </div>
                            </div>
                            <div className="text-right md:col-span-1">
                                <span className="block text-xs line-through	text-bwp-grey">HKD: $800.00</span>
                                <span className="md:text-base text-sm font-semibold">HKD: $400.00</span>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <div className="flex">
                                <BWPImgInput imgSize="md" shape="square" className="mr-4 inline-block flex-initial self-center"
                                imgClassName=" border-bwp-red border-2 border-solid"
                                 image={Dog} />
                                <div className="flex-auto">
                                    <label className="font-semibold font-family-noto block text-bwp-red">狗狗訓練課程</label>
                                    <span>使用日期：2021.10.15</span><br />
                                    <span>時間：10:00</span>
                                </div>
                            </div>
                            <div className="text-right md:col-span-1">
                                <span className="block text-xs line-through	text-bwp-grey">HKD: $800.00</span>
                                <span className="md:text-base text-sm font-semibold">HKD: $400.00</span>
                            </div>
                        </div>
                        <div className="flex justify-end items-end pt-1 border-t border-bwp-light-grey border-solid">
                            <div className="flex-initial font-semibold mx-1 font-family-noto">
                                {t("lb_delivery_fee")}
                            </div>
                            <div className="flex-initial text-bwp-light-green font-semibold  font-family-noto">
                                免運費
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-bwp-white p-4">
                    <div className="text-right w-full mt-2 pt-2 flex justify-end items-end border-t-2 border-solid border-bwp-light-green">
                        <div className="flex-initial pr-1">
                            <span className="text-xs font-family-noto">
                                <Trans i18nKey="lb_total_number" values={{num:"5"}}></Trans>
                            </span>
                        </div>
                        <div className="flex-initial font-family-noto font-semibold text-2xl mx-1">
                            {t("lb_total_amount")}
                        </div>
                        <div className="flex-initial font-family-noto text-bwp-light-green font-semibold text-xl">
                            HKD: $800.00
                        </div>
                    </div>
                </div>
            </Profile.Body>
        </Profile>
    </>);
}

export default withRouter(OrderDetailPage);