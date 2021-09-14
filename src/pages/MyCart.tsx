import React from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';


const MyCartPage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('lb_shopping_cart')} | Better We Pet</title>
        </Helmet>
        Home
    </>)
}
export default withRouter(MyCartPage);