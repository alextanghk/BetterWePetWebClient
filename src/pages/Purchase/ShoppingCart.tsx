import React, { useRef } from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import BWPMerchant from '../../components/merchants';
import { BWPBreadCrumb, BWPCheckbox, BWPImgInput, BWPNumber } from '../../components/common';
import { Link } from 'react-router-dom';

// Demo Only
import Cat from '../../styles/assets/demo/FRS100927.jpg'

const ShoppingCartPage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('lb_shopping_cart')} | Better We Pet</title>
        </Helmet>
        <BWPBreadCrumb className="md:block hidden">
            <Link to="/">{t("lb_products")}</Link>
        </BWPBreadCrumb>
        <div className={`flex md:flex-row flex-col`}>
            <div className={`md:bg-bwp-white flex-auto`}>
                
                <div className={`grid gap-2 grid-cols-1`}
                >
                    <div className={``}>
                        <BWPMerchant
                            name="貓貓小店"
                            icon={Cat}
                            link={"#"}
                            size="xs"
                        />
                    </div>
                    <div className={`flex mb-2`}>
                        <BWPCheckbox className="m-auto my-2 px-4 self-center flex-initial"/>
                        <div className="flex flex-auto">
                            <BWPImgInput imgSize="lg" shape="square" className="m-2 inline-block flex-initial self-center" image={Cat} imgClassName=""/>
                            <div className="flex-auto">
                                <label className="font-semibold font-family-noto block text-bwp-blue">貓貓版吞拿魚罐頭</label>
                                <span className="font-family-noto text-bwp-green">HKD$11.00</span>
                            </div>
                        </div>
                        <div className={`px-4 self-center flex-initial`}><BWPNumber textAlign="center" vertical inputSize="md"/></div>
                    </div>
                    
                </div>
            </div>
            <div className={`md:w-1/3`}>

            </div>
        </div>
    </>)
}
export default withRouter(ShoppingCartPage);