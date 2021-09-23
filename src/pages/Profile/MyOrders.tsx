import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import Profile from "../../components/profile";
import { BWPContainer, BWPImgInput, BWPSwiper } from "../../components/common";
import { IcoFemale, IcoMale } from "../../components/icons";

// Demo only
import Dog from "../../styles/assets/demo/random5-5.jpg";
import Cat from "../../styles/assets/demo/FRS100927.jpg";
import Bird from "../../styles/assets/demo/1820487.jpg";

const MyOrdersPage = () => {
    const { t } = useTranslation();
    const [tab, setTab] = useState<number>(0);
    return(<>
        <Helmet>
            <title>{ t('lb_my_pets')} | Better We Pet</title>
        </Helmet>
        <Profile>
            <div className={`py-2 lg:px-4 px-0`}>
                <ul className="w-full grid grid-cols-2 mt-3 mb-1">
                    <li className="cursor-pointer text-center pl-2 pr-8 leading-10" onClick={()=>{ setTab(0)}}>
                        <span className={`cursor-pointer text-xl ${tab === 0 ? "text-bwp-light-green" : ""}`}>{t("lb_sign_in")}</span>
                    </li>
                    <li className="cursor-pointer text-center pl-2 pr-8 leading-10" onClick={()=>{ setTab(1)}}>
                        <span className={`cursor-pointer text-xl ${tab === 1 ? "text-bwp-light-green" : ""}`}>{t("lb_sign_out")}</span>
                    </li>
                </ul>
                <BWPSwiper index={tab} allowSwipe={true} afterSwipe={setTab} className="w-full">
                    <BWPSwiper.Tab>
                        tab 1
                    </BWPSwiper.Tab>
                    <BWPSwiper.Tab>
                        tab 2
                    </BWPSwiper.Tab>
                </BWPSwiper>
            </div>
        </Profile>
    </>)
}
export default withRouter(MyOrdersPage);