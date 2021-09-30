import React from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';


const MyFavPage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('lb_my_favorite')} | Better We Pet</title>
        </Helmet>
        Home
    </>)
}
export default withRouter(MyFavPage);