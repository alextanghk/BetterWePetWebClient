import React from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';


const MerchantsPage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('lb_merchants')} | Better We Pet</title>
        </Helmet>
        Home
    </>)
}
export default withRouter(MerchantsPage);