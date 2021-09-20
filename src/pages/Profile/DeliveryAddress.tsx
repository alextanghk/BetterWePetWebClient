import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import Profile from "../../components/profile";
import { BWPContainer, BWPImgInput } from "../../components/common";
import { IcoFlagWhite, IcoMale } from "../../components/icons";

// Demo only
import Dog from "../../styles/assets/demo/random5-5.jpg";
import Cat from "../../styles/assets/demo/FRS100927.jpg";
import Bird from "../../styles/assets/demo/1820487.jpg";

const DeliveryAddressPage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('lb_my_pets')} | Better We Pet</title>
        </Helmet>
        <Profile>
            <div className={`py-2 grid lg:grid-cols-2 grid-cols-1 lg:px-4 px-0`}>
                <Link to={"/my-profile/delivery-addresses/1"} className="mb-4">
                    <BWPContainer className="border-8 border-solid border-bwp-white bg-bwp-white default-delivery lg:mx-2 lg:rounded-base">
                        <BWPContainer.Body className="grid grid-cols-1 px-2 border-bwp-light-grey border-t border-solid">
                            <label className="absolute top-2 right-2 rounded-6 py-1 px-2 bg-bwp-light-green text-bwp-white w-max text-sm"><img src={IcoFlagWhite} className="w-4 h-4 inline-block"/>{t("lb_default_address")}</label>
                            <span className="font-family-noto font-semibold text-base text-bwp-blue">Kitty Tan</span>
                            <span className="font-family-noto text-base">+852 9864 4386</span>
                            <p className="font-family-noto text-base">Flat A, 11/F Yue Building,<br />
                                224 Cat Street, Kowloon, Hong Kong
                            </p>
                        </BWPContainer.Body>
                    </BWPContainer>
                </Link>
                <Link to={"/my-profile/delivery-addresses/1"} className="mb-4">
                    <BWPContainer className="border-8 border-solid border-bwp-white bg-bwp-white lg:mx-2 lg:rounded-base">
                        <BWPContainer.Body className="grid grid-cols-1 px-2 border-bwp-light-grey border-t border-solid">
                            <span className="font-family-noto font-semibold text-base text-bwp-blue">Kitty Tan</span>
                            <span className="font-family-noto text-base">+852 9864 4386</span>
                            <p className="font-family-noto text-base">Flat A, 11/F Yue Building,<br />
                                224 Cat Street, Kowloon, Hong Kong
                            </p>
                        </BWPContainer.Body>
                    </BWPContainer>
                </Link>
            </div>
        </Profile>
    </>)
}
export default withRouter(DeliveryAddressPage);