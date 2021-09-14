import React from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';

const SignInPage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('lb_sign_in')} | Better We Pet</title>
        </Helmet>
    </>)
}
export default withRouter(SignInPage);