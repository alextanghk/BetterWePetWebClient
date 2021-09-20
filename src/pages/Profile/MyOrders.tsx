import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import Profile from "../../components/profile";
import { BWPContainer, BWPImgInput } from "../../components/common";
import { IcoFemale, IcoMale } from "../../components/icons";

// Demo only
import Dog from "../../styles/assets/demo/random5-5.jpg";
import Cat from "../../styles/assets/demo/FRS100927.jpg";
import Bird from "../../styles/assets/demo/1820487.jpg";

const MyOrdersPage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('lb_my_pets')} | Better We Pet</title>
        </Helmet>
        <Profile>
            <div className={`py-2 grid lg:grid-cols-2 grid-cols-1 lg:px-4 px-0`}>
                
            </div>
        </Profile>
    </>)
}
export default withRouter(MyOrdersPage);