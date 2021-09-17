import React from 'react';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import { SignInBox } from '../components/common';

const SignInPage = () => {
    const { t } = useTranslation();
    const history = useHistory();

    return(<>
        <Helmet>
            <title>{ t('lb_sign_in')} | Better We Pet</title>
        </Helmet>
        <div>
            <div className="xs:absolute xs:top-1/2 xs:left-1/2 xs:transform xs:-translate-x-2/4 xs:-translate-y-2/4 m-auto">
                <SignInBox afterLogin={()=>{
                    history.push("/");
                }}/>
            </div>
        </div>
    </>)
}
export default withRouter(SignInPage);