import React from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';


const SearchPage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('ph_search_all')} | Better We Pet</title>
        </Helmet>
        Home
    </>)
}
export default withRouter(SearchPage);