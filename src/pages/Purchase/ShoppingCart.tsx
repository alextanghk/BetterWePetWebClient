import React from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import BWPMerchant from '../../components/merchants';
import { BWPBreadCrumb, BWPCheckbox, BWPImgInput } from '../../components/common';
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
                <div className={`grid gap-2`}
                    style={{
                        gridTemplateColumns: "4rem auto 4rem"
                    }}
                >
                    <div className={`col-span-3`}>
                        <BWPMerchant
                            name="貓貓小店"
                            icon={Cat}
                            link={"#"}
                            size="xs"
                        />
                    </div>
                    <BWPCheckbox className="m-auto my-2 inline-block self-center"/>
                    <div className="flex">
                        <BWPImgInput imgSize="lg" shape="square" className="m-4 inline-block flex-initial self-center" image={Cat} imgClassName=""/>
                        <div className="flex-auto">
                            <div className="grid gap-1"
                                style={{
                                    gridTemplateColumns: "4rem auto"
                                }}
                            >
                                <label className="font-semibold col-span-2 font-family-noto block text-bwp-blue">貓貓版吞拿魚罐頭</label>
                                <span className="font-family-noto col-span-2 text-bwp-green">HKD$11.00</span>
                                <span className="font-family-noto font-semibold">{t("lb_pet_size")}</span><span className="font-family-noto">30cm x 20cm</span>
                                <span className="font-family-noto font-semibold">{t("lb_made_in")}</span><span className="font-family-noto">Hong Kong</span>
                            </div>
                        </div>
                    </div>
                    <div>Control</div>
                </div>
            </div>
            <div className={`md:w-1/3`}>

            </div>
        </div>
    </>)
}
export default withRouter(ShoppingCartPage);