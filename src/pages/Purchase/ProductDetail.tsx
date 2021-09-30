import React, { useState } from 'react';
import Slider from "react-slick";
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation, Trans } from 'react-i18next';
import { BWPInput, BWPImgInput, BWPTags, BWPCollapse, BWPButton } from "../../components/common";
import { Link } from 'react-router-dom';
import { IcoRightGrey, IcoLikeGrey, IcoLikeGreen, IcoFavWhite, IcoFavPink, IcoFavFilled,IcoClose, IcoHomeWhite, IcoShare, IcoChatWhite, IcoCartWhite, IcoCarrotGrey, IcoCarrotFilled } from "../../components/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import BWPMerchant from "../../components/merchants";
import Recommend from '../../sections/Recommend';

// Demo only
import Dog from "../../styles/assets/demo/random5-5.jpg";
import Cat from "../../styles/assets/demo/FRS100927.jpg";
import Bird from "../../styles/assets/demo/1820487.jpg";

const demo = [
    {img: Dog, youtube:null },
    {img: Cat, youtube:null },
    {img: Bird, youtube:null },
    {img: null, youtube:"https://www.youtube.com/embed/wtH-hdOF1uA" },
]
const ProductDetailPage = () => {
    const { t } = useTranslation();

    const [number, setNumber] = useState<number>(1);
    const [open, setOpen] = useState<boolean>(false);
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots bwp-img-slick-dots",
        customPaging: ((i:number) => {
            const { img, youtube } = demo[i];
            return (
                <div className="w-10 h-10 relative bg-cover bg-center bg-no-repeat"
                    style={img ? { backgroundImage: `url('${img}')`}:{}}
                >
                    { youtube && <FontAwesomeIcon icon={faYoutube} size="2x" className="absolute top-1 left-0.5" /> }
                </div>
            )
        }),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    dotsClass: "slick-dots bwp-green-slick-dots",
                    customPaging: (i:number) => (
                        <div>
                            <div className={`hidden sm:block w-10 h-8 bg-bwp-light-green bg-opacity-50 px-3 py-2 ${i === 0 ? "rounded-l-full w-12 pl-5" : i === (demo.length -1 ) ? "rounded-r-full w-12 pr-5" : "" }`}>
                                <span className="block w-4 h-4 m-auto bg-bwp-white rounded-full"></span>
                            </div>
                            <div className={`block sm:hidden w-8 h-6 bg-bwp-light-green bg-opacity-50 px-2.5 py-1.5 ${i === 0 ? "rounded-l-full w-10 pl-3" : i === (demo.length -1 ) ? "rounded-r-full w-10 pr-3" : "" }`}>
                                <span className="block w-3 m-auto h-3 bg-bwp-white rounded-full"></span>
                            </div>
                        </div>
                    )
                }
            }
        ]
    };
    return(<>
        <Helmet>
            <title>{ t('lb_services')} | Better We Pet</title>
        </Helmet>
        <div className=" my-4 leading-6 lg:flex hidden">
            <Link to="/">{t("lb_home")}</Link>
            <img src={IcoRightGrey} className="w-4 h-4 my-1 mx-2" />
            <Link to="/">{t("lb_products")}</Link>
        </div>
        <div className="flex md:mt-6 lg:flex-row flex-col w-full">
            <div className="lg:flex-initial flex-auto lg:w-1/3 w-full">
                <div className="bwp-slider relative">
                    <Slider {...settings}>
                    {
                        demo.map((item:any,i:number) => {
                            return (<div key={`i${i}`}>
                                <div className="bg-cover bg-no-repeat bg-center lg:aspect-w-9 aspect-w-16 aspect-h-9" style={item.img && {backgroundImage: `url(${item.img})`}}>
                                    {
                                        item.youtube && <iframe width="560" height="315" src={item.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    }
                                </div>
                            </div>)
                        })
                    }
                    </Slider>
                </div>
                <div className="md:flex hidden mt-2 justify-center w-full bg-bwp-white border-t border-b border-solid border-bwp-grey">
                    <div className="flex-auto px-4 text-center border-r border-solid border-bwp-grey my-1">
                        <Link to="#" className="flex justify-center">
                            <img className="h-6" src={IcoLikeGrey} />
                            <span className="font-family-noto">
                                <Trans i18nKey="lb_liked_count_with_user" values={{num:"5"}}></Trans>
                            </span>
                        </Link>
                    </div>
                    <div className="flex-auto px-4 text-center my-1">
                        <Link to="#" className="flex justify-center">
                            <img className="h-6" src={IcoShare} />
                            <span className="font-family-noto">{t("lb_share")}</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex-auto justify-start md:px-4 lg:bg-transparent bg-bwp-white">
                <div className="grid md:grid-cols-2 grid-cols-1 min-h-0 gap-2">
                    <h1 className="md:text-3xl md:text-left h-10 min-h-0 leading-10 text-center text-xl text-bwp-blue font-family-noto font-semibold">Product name here</h1>
                    <div className="flex h-10 min-h-0 justify-center md:justify-end">
                        <span className="block text-base line-through text-bwp-grey self-center px-2">HKD: $800.00</span>
                        <span className="md:text-xl text-sm font-semibold self-center px-2 text-bwp-light-green">HKD: $400.00</span>
                    </div>
                    <BWPMerchant 
                        icon={Cat}
                        name="貓貓小店"
                        size="xs"
                        link="#"
                        className="md:row-start-auto row-start-1 md:justify-start justify-center"
                    />
                    <div className="flex">
                        <img src={IcoCarrotFilled} className="w-6 flex-initial"/>
                        <img src={IcoCarrotFilled} className="w-6 flex-initial" />
                        <img src={IcoCarrotFilled} className="w-6 flex-initial" />
                        <img src={IcoCarrotGrey} className="w-6 flex-initial" />
                        <img src={IcoCarrotGrey} className="w-6 flex-initial" />
                    </div>
                    
                    <div className="md:hidden flex mt-2 justify-center w-full bg-bwp-white border-t border-b border-solid border-bwp-grey">
                        <div className="flex-auto px-4 text-center border-r border-solid border-bwp-grey my-1">
                            <Link to="#" className="flex justify-center">
                                <img className="h-6" src={IcoLikeGrey} />
                                <span className="font-family-noto">
                                    <Trans i18nKey="lb_liked_count_with_user" values={{num:"5"}}></Trans>
                                </span>
                            </Link>
                        </div>
                        <div className="flex-auto px-4 text-center my-1">
                            <Link to="#" className="flex justify-center">
                                <img className="h-6" src={IcoShare} />
                                <span className="font-family-noto">{t("lb_share")}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 md:col-start-1 md:col-span-2 border-t border-bwp-grey border-solid p-2">
                        <label className="text-xl font-family-noto text-bwp-blue font-semibold">{t("lb_detail")}</label>
                        <p>
                            讓你的寶寶很開心： 這款產品由專家開發，我們的手工布書在每一頁都有可愛的圖案，可以刺激感官。 鮮艷的顏色可以長久地吸引你的寶寶的注意力。 探索新事物是一場冒險之旅。 柔軟的頁面包括多種遊戲功能，例如藏貓貓、鏡子、各種聲音和材質觸感。 非常適合嬰幼兒。 它為你的孩子或孫子帶來無窮的樂趣！
                            <BWPTags className="my-4">
                                <BWPTags.Tag>狗</BWPTags.Tag>
                                <BWPTags.Tag>小型</BWPTags.Tag>
                                <BWPTags.Tag>散步</BWPTags.Tag>
                            </BWPTags>
                        </p>
                       
                    </div>
                    <BWPCollapse
                        title={<label className="font-family-noto font-semibold">{t("lb_delivery")} / {t("lb_return")}</label>}
                        className="w-full border-t px-2 border-bwp-grey border-solid md:col-span-2"
                    >
                        <p className="">
                            Testing<br />
                            Testing<br />
                            Testing<br />
                            Testing<br />
                            Testing<br />
                            Testing<br />
                            Testing<br />
                            Testing<br />
                            Testing<br />
                            Testing<br />
                        </p>
                    </BWPCollapse>
                    <div className="md:relative z-20 fixed left-0 md:bottom-0 bottom-14 md:row-start-3 md:col-span-2">
                        <div className={`rounded-t-4 md:shadow-none shadow md:bg-transparent bg-bwp-white pb-4 md:px-0 px-4 relative md:pt-0 pt-10 ${open ? "block" : "hidden md:block"}`}>
                            <img src={IcoClose} className="w-6 h-6 md:hidden absolute top-2 right-2 cursor-pointer" onClick={()=>{setOpen(false)}}/>
                            <div className="flex">
                                <BWPImgInput imgSize="lg" shape="square" className="mr-4 inline-block flex-initial self-center md:hidden" image={Cat} imgClassName=""/>
                                <div className="flex-auto">
                                    <label className="font-semibold md:hidden font-family-noto block text-bwp-blue">貓貓版吞拿魚罐頭</label>
                                    <div className="grid  md:gap-3"
                                        style={{
                                            gridTemplateColumns: "4rem auto"
                                        }}
                                    >
                                        <span className="font-family-noto font-semibold">{t("lb_stock")}</span>
                                        <span className="font-family-noto">12</span>
                                        <span className="font-family-noto font-semibold">{t("lb_pet_size")}</span><span className="font-family-noto">30cm x 20cm</span>
                                        <span className="font-family-noto font-semibold">{t("lb_made_in")}</span><span className="font-family-noto">Hong Kong</span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:gap-3 pt-3"
                                style={{
                                    gridTemplateColumns: "4rem auto"
                                }}
                            >
                                <span className="font-family-noto font-semibold">{t("lb_number")}</span>
                                <BWPInput type="number" className="md:w-24" textAlign="center" defaultValue={number} allowClear={false} min={0}/>
                            </div>
                        </div>
                        <button
                            className={`btn-bwp-blue text-center rounded-none py-3 text-bwp-white w-full ${open ? "md:hidden block" : "hidden"}`}
                        >
                            <span>{t("lb_add_cart")}</span>
                            <img src={IcoCartWhite} className="w-8 h-8 inline-block"/>
                        </button>
                        <div className={`flex md:bg-transparent bg-bwp-blue py-2 md:justify-start justify-center md:w-auto w-screen ${open ? "md:block hidden": "block"}`}>
                            <BWPButton color="dark-blue" className="mr-1 shadow">
                                <img src={IcoHomeWhite} className="w-6 h-6 inline-block -mt-1" />
                                <span className="text-bwp-white md:text-base text-sm">{t("lb_browser_shop")}</span>
                            </BWPButton>
                            <BWPButton color="dark-blue" className="px-1 mx-1 shadow">
                                <img src={IcoChatWhite} className="w-8 h-8"/>
                            </BWPButton>
                            <BWPButton color="dark-blue" className="px-1 mx-1 shadow">
                                <img src={IcoFavPink} className="w-8 h-8"/>
                            </BWPButton>
                            <BWPButton color="green" className="mr-1 px-4 shadow hidden md:block">
                                <span className="text-bwp-white md:text-base text-sm">{t("lb_add_cart")}</span>
                            </BWPButton>
                            <BWPButton color="green" className="mr-1 px-4 flex-initial shadow md:hidden" onClick={() => { setOpen(!open)}}>
                                <span className="text-bwp-white md:text-base text-sm">{t("lb_purchase")}</span>
                            </BWPButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Recommend
            title={t("lb_you_may_like")}
            color="red"
            className="mt-6"
            icon={IcoFavWhite}
            link="/"
        >
        </Recommend>
    </>)
}
export default withRouter(ProductDetailPage);