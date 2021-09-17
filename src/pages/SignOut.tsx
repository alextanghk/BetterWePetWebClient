import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';

const SignOutPage = () => {
    const { t } = useTranslation();

    useEffect(()=>{
        // signOut().then((value:boolean)=>{

        // })
    },[])
    return(<>
        <Helmet>
            <title>{ t('lb_sign_out')} | Better We Pet</title>
        </Helmet>
    </>)
}
export default withRouter(SignOutPage);