import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import Profile from "../../sections/Profile";
import { BWPSwitch, BWPInput, BWPTextArea } from "../../components/common";
import { IcoBinRed, IcoUserGreen, IcoPhoneGreen, IcoLocationGreen, IcoFlag } from "../../components/icons";

type QuizParams = {
    id: string;
};

const EditAddressPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<QuizParams>();
    
    const [value, setValue] = useState<any>({
        image: null,
        name: "",
        desc: "",
        size: "",
        age: 0,
        species: ""
    });

    const handleOnSave = () => {
        console.log(value);
    }

    return(<>
        <Helmet>
            <title>{ t('lb_my_pets')} | Better We Pet</title>
        </Helmet>
        <Profile>
            <Profile.Body>
            <div className={`px-0`}>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:bg-bwp-white lg:px-4 py-2">
                    <label className="text-bwp-green text-xl font-family-noto lg:flex hidden justify-end items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_receiver")}
                    </label>
                    <div className="p-2 lg:col-span-2 bg-bwp-white lg:row-start-auto row-start-1">
                        <div className="flex">
                            <img src={IcoUserGreen} className="h-10 flex-initial mt-3 mx-2 lg:hidden block"/>
                            <BWPInput
                                inputSize="lg"
                                onChange={(e:any)=>{ setValue({ ...value, name: e.target.value }) }}
                                type="text" className="my-2"
                                placeholder={ `${t("lb_receiver")}`}
                            />
                        </div>
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto lg:flex hidden justify-end items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_phone")}
                    </label>
                    <div className="p-2 lg:col-span-2 bg-bwp-white lg:row-start-auto row-start-2">
                        <div className="flex">
                            <img src={IcoPhoneGreen} className="h-10 flex-initial mt-3 mx-2 lg:hidden block"/>
                            <BWPInput
                                inputSize="lg"
                                onChange={(e:any)=>{ setValue({ ...value, name: e.target.value }) }}
                                type="text" className="my-2"
                                placeholder={ `${t("lb_phone")}`}
                            />
                        </div>
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto lg:flex hidden justify-end items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_address")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <div className="flex">
                            <img src={IcoLocationGreen} className="h-10 flex-initial mt-3 mx-2 lg:hidden block"/>
                            <BWPTextArea
                                inputSize="lg" rows={5}
                                onChange={(e:any)=>{ setValue({ ...value, name: e.target.value }) }}
                                type="date" className="my-2"
                                placeholder={ `${t("lb_address")}`}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className="bg-bwp-white w-full text-base h-10 px-3 py-0 mt-2 my-2 leading-7 text-bwp-green flex">
                    <label className="leading-10 flex-auto">
                        <img src={IcoFlag} className="h-6 -mt-1 inline-block" />
                        { t("lb_default_address")}
                    </label>
                    <div className="flex justify-end items-center">
                        <BWPSwitch color="light-green" className="" defaultChecked />
                    </div>
                </div>
                <button
                    className="bg-bwp-white w-full text-base h-10 px-3 py-0 mt-4 my-2 leading-7 text-bwp-green active:bg-bwp-light-green active:text-bwp-white"
                    onClick={handleOnSave}
                >
                    {t("lb_save")}
                </button>
                {
                    id != "" &&<button
                    className="bg-bwp-white w-full text-base h-10 px-3 py-0 my-2 leading-7 text-bwp-red active:bg-bwp-pink active:text-bwp-white"
                    onClick={handleOnSave}
                >
                    <img src={IcoBinRed} className="w-6 h-6 inline-block" />{t("lb_delete")}
                </button>
                }
            </div>
            </Profile.Body>
        </Profile>
    </>)
}
export default withRouter(EditAddressPage);