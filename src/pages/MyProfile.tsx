import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';

import { IcoUserGreen, IcoPasswordLockedGreen, IcoFootprintFullGreen, IcoCarGreen, IcoProductGreen, IcoBellGreen, IcoLogoutWhite, IcoRightGrey } from "../components/icons";
import Profile from "../components/profile";

import Dog from "../styles/assets/demo/random5-5.jpg";
import Cat from "../styles/assets/demo/FRS100927.jpg";
import Bird from "../styles/assets/demo/1820487.jpg";

const MyProfilePage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('lb_my_profile')} | Better We Pet</title>
        </Helmet>
        <Profile>
            <div className={`bg-bwp-white px-4 p-2`}>
                <div className="grid grid-cols-1">
                    <div className="flex">
                        <div className="flex-auto"><span className="text-lg text-bwp-green">{t("lb_handling")}{t("lb_order")}</span></div>
                        <Link to="/" className="flex-initial"><img src={IcoRightGrey} className={`w-7 h-auto`} /></Link>
                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </Profile>
    </>)
}
export default withRouter(MyProfilePage);