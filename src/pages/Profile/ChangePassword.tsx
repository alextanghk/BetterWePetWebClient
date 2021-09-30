import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import Profile from "../../sections/Profile";
import { BWPInput } from "../../components/common"; 

const ChangePasswordPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState<any>({
        oldPassword:"",
        newPassword:"",
        confirm:""
    })

    const handleOnSave = () => {
        console.log(value);
    }

    return(<>
        <Helmet>
            <title>{ t('lb_change_password')} | Better We Pet</title>
        </Helmet>
        <Profile>
            <Profile.Body>
        <div className={`px-0`}>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:bg-bwp-white lg:px-4 py-2">
                    
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_old_password")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPInput
                            inputSize="lg"
                            onChange={(e:any)=>{ setValue({ ...value, oldPassword: e.target.value }) }}
                            type="password" className="my-2"
                            placeholder={ `${t("lb_old_password")}`}
                        />
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_new_password")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPInput
                            inputSize="lg"
                            onChange={(e:any)=>{ setValue({ ...value, newPassword: e.target.value }) }}
                            type="password" className="my-2"
                            placeholder={ `${t("lb_new_password")}`}
                        />
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_confirm_password")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPInput
                            inputSize="lg"
                            onChange={(e:any)=>{ setValue({ ...value, confirm: e.target.value }) }}
                            type="password" className="my-2"
                            placeholder={ `${t("lb_confirm_password")}`}
                        />
                    </div>
                </div>
                <button
                    className="bg-bwp-white w-full text-base h-10 px-3 py-0 my-2 leading-7 text-bwp-green active:bg-bwp-green active:text-bwp-white"
                    onClick={handleOnSave}
                >
                    {t("lb_save")}
                </button>
            </div>
            </Profile.Body>
        </Profile>
    </>)
}
export default withRouter(ChangePasswordPage);