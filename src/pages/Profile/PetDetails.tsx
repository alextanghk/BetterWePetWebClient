import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import Profile from "../../components/profile";
import { BWPSelect, BWPImgInput, BWPInput, BWPTextArea } from "../../components/common";
import { IcoFemale, IcoBinRed, IcoFootprintFullWhite } from "../../components/icons";

// Demo only
import Dog from "../../styles/assets/demo/random5-5.jpg";
import Cat from "../../styles/assets/demo/FRS100927.jpg";
import Bird from "../../styles/assets/demo/1820487.jpg";

type QuizParams = {
    id: string;
};

const PetEditPage = () => {
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

    const handleOnSave = (e:any) => {
        console.log(value);
    }

    return(<>
        <Helmet>
            <title>{ t('lb_my_pets')} | Better We Pet</title>
        </Helmet>
        <Profile>
        <div className={`px-0`}>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:bg-bwp-white md:px-4 py-2">
                    <label className="text-bwp-green text-xl font-family-noto lg:justify-end justify-start items-center px-2 lg:border-r lg:flex hidden border-solid border-bwp-grey">
                        {t("lb_pet_picture")}
                    </label>
                    <div className="p-2 mb-4 md:mb-0 md:col-span-2">
                        <BWPImgInput large={true} className="mx-auto w-min" allowEdit
                            imgPlaceholder={IcoFootprintFullWhite}
                            onChange={(e:any)=>{ setValue({ ...value, profile: e.target.files[0] }) }}
                        />
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_pet_name")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPInput
                            large={true}
                            onChange={(e:any)=>{ setValue({ ...value, name: e.target.value }) }}
                            type="text" className="my-2"
                            placeholder={ `${t("lb_pet_name")}`}
                        />
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_pet_gender")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPSelect
                            large={true}
                            onChange={(e:any)=>{ setValue({ ...value, email: e.target.value }) }}
                            className="my-2"
                        >
                            <option value="M">{t("lb_male")}</option>
                            <option value="F">{t("lb_female")}</option>
                        </BWPSelect>
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_pet_birth")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPInput
                            large={true}
                            onChange={(e:any)=>{ setValue({ ...value, name: e.target.value }) }}
                            type="date" className="my-2"
                            placeholder={ `${t("lb_pet_birth")}`}
                        />
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_pet_species")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPInput
                            large={true}
                            onChange={(e:any)=>{ setValue({ ...value, name: e.target.value }) }}
                            type="text" className="my-2"
                            placeholder={ `${t("lb_pet_species")}`}
                        />
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_pet_size")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPInput
                            large={true}
                            onChange={(e:any)=>{ setValue({ ...value, name: e.target.value }) }}
                            type="text" className="my-2"
                            placeholder={ `${t("lb_pet_size")}`}
                        />
                    </div>
                    <label className="text-bwp-green text-xl font-family-noto flex lg:justify-end justify-start items-center px-2 pt-2 lg:pb-2 lg:border-r border-solid border-bwp-grey bg-bwp-white">
                        {t("lb_other_info")}
                    </label>
                    <div className="p-2 md:col-span-2 bg-bwp-white">
                        <BWPTextArea
                            large={true} rows={5}
                            onChange={(e:any)=>{ setValue({ ...value, name: e.target.value }) }}
                            type="date" className="my-2"
                            placeholder={ `${t("lb_other_info")}`}
                        />
                    </div>
                </div>
                <button
                    className="bg-bwp-white w-full text-base h-10 px-3 py-0 mt-4 my-2 leading-7 text-bwp-green active:bg-bwp-light-green active:text-bwp-white col-span-3"
                    onClick={handleOnSave}
                >
                    {t("lb_save")}
                </button>
                {
                    id != "" &&<button
                    className="bg-bwp-white w-full text-base h-10 px-3 py-0 my-2 leading-7 text-bwp-red active:bg-bwp-pink active:text-bwp-white col-span-3"
                    onClick={handleOnSave}
                >
                    <img src={IcoBinRed} className="w-6 h-6 inline-block" />{t("lb_delete")}
                </button>
                }
            </div>
        </Profile>
    </>)
}
export default withRouter(PetEditPage);