import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import Profile from "../../components/profile";
import { BWPContainer, BWPImgInput } from "../../components/common";
import { IcoFemale, IcoMale } from "../../components/icons";

// Demo only
import Dog from "../../styles/assets/demo/random5-5.jpg";
import Cat from "../../styles/assets/demo/FRS100927.jpg";
import Bird from "../../styles/assets/demo/1820487.jpg";

const MyPetsPage = () => {
    const { t } = useTranslation();

    return(<>
        <Helmet>
            <title>{ t('lb_my_pets')} | Better We Pet</title>
        </Helmet>
        <Profile>
            <div className={`py-2 grid lg:grid-cols-2 grid-cols-1 lg:px-4 px-0`}>
                <Link to={"/my-profile/pets/1"} className="mb-4">
                    <BWPContainer className="bg-bwp-white lg:mx-2 lg:rounded-base">
                        <BWPContainer.Head>
                            <div className="grid grid-cols-3 my-4 pr-4">
                                <div className="row-span-2 justify-center items-center pt-3">
                                    <BWPImgInput className="text-center mx-2" image={Cat}/>
                                </div>
                                <div className="col-span-2">  
                                    <span className="text-bwp-red font-semibold font-family-noto  leading-8">Haha</span>
                                    <img src={IcoFemale} className="w-6 inline-block -mt-2" />
                                </div>
                                <div className="col-span-2 grid grid-cols-4">
                                    <div className="text-sm font-semibold">{t("lb_pet_species")}</div>
                                    <div className="text-sm">{"貓"}</div>
                                    <div className="text-sm font-semibold">{t("lb_pet_size")}</div>
                                    <div className="text-sm">{t("lb_size_small_middle")}</div>
                                    <div className="text-sm font-semibold">{t("lb_pet_age")}</div>
                                    <div className="text-sm">{`3 ${t("lb_pet_age_unit")}`}</div>
                                </div>
                            </div>
                        </BWPContainer.Head>
                        <BWPContainer.Body className="grid grid-cols-1 px-2 border-bwp-light-grey border-t border-solid">
                            <div className="">
                                <span className="font-family-noto">{ t("lb_other_info") }</span>
                            </div>
                            <div className="overflow-hidden h-20 px-2 my-3"><p className="text-xs leading-5 font-family-noto">{"養了十年的寵物"}</p></div>
                        </BWPContainer.Body>
                    </BWPContainer>
                </Link>
                <Link to={"#"} className="mb-4">
                    <BWPContainer className="bg-bwp-white md:mx-2 md:rounded-base">
                        <BWPContainer.Head>
                            <div className="grid grid-cols-3 my-4 pr-4">
                                <div className="row-span-2 justify-center items-center pt-3">
                                    <BWPImgInput className="text-center mx-2" image={Dog}/>
                                </div>
                                <div className="col-span-2">  
                                    <span className="text-bwp-blue font-semibold font-family-noto  leading-8">Boy</span>
                                    <img src={IcoMale} className="w-6 inline-block " />
                                </div>
                                <div className="col-span-2 grid grid-cols-4">
                                    <div className="text-sm font-semibold">{t("lb_pet_species")}</div>
                                    <div className="text-sm">{"貓"}</div>
                                    <div className="text-sm font-semibold">{t("lb_pet_size")}</div>
                                    <div className="text-sm">{t("lb_size_small_middle")}</div>
                                    <div className="text-sm font-semibold">{t("lb_pet_age")}</div>
                                    <div className="text-sm">{`3 ${t("lb_pet_age_unit")}`}</div>
                                </div>
                            </div>
                        </BWPContainer.Head>
                        <BWPContainer.Body className="grid grid-cols-1 px-2 border-bwp-light-grey border-t border-solid">
                            <div className="">
                                <span className="font-family-noto">{ t("lb_other_info") }</span>
                            </div>
                            <div className="overflow-hidden h-20 px-2 my-3"><p className="text-xs leading-5 font-family-noto">{"養了十年的寵物"}</p></div>
                        </BWPContainer.Body>
                    </BWPContainer>
                </Link>
            </div>
        </Profile>
    </>)
}
export default withRouter(MyPetsPage);