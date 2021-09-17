import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import Profile from "../../components/profile";
import { BWPImgInput, BWPInput } from "../../components/common"; 

const UpdateProfilePage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState<any>({
        name:"",
        email:"",
        profile:null
    })

    const handleOnSave = (e:any) => {
        console.log(value);
    }

    return(<>
        <Helmet>
            <title>{ t('lb_update_profile')} | Better We Pet</title>
        </Helmet>
        <Profile>
            <div className={`px-0`}>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:bg-bwp-white md:px-4 py-2">
                    <label className="text-bwp-green text-xl font-family-noto lg:justify-end justify-start items-center px-2 lg:border-r lg:flex hidden border-solid border-bwp-grey">
                        {t("lb_profile_pic")}
                    </label>
                    <div className="p-2 mb-4 md:mb-0 md:col-span-2">
                        <BWPImgInput large={true} className="mx-auto w-min" allowEdit
                            onChange={(e:any)=>{ setValue({ ...value, profile: e.target.files[0] }) }}
                        />
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_name")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPInput
                            large={true}
                            onChange={(e:any)=>{ setValue({ ...value, name: e.target.value }) }}
                            type="text" className="my-2"
                            placeholder={ `${t("lb_name")}`}
                        />
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_email")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPInput
                            large={true}
                            onChange={(e:any)=>{ setValue({ ...value, email: e.target.value }) }}
                            type="text" className="my-2"
                            placeholder={ `${t("lb_email")}`}
                        />
                    </div>
                </div>
                <button
                    className="bg-bwp-white w-full text-base h-10 px-3 py-0 my-2 leading-7 text-bwp-green active:bg-bwp-green active:text-bwp-white col-span-3"
                    onClick={handleOnSave}
                >
                    {t("lb_save")}
                </button>
            </div>
        </Profile>
    </>)
}
export default withRouter(UpdateProfilePage);