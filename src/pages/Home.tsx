import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Import Image
import { IcoHot, IcoFavWhite, IcoLatest, IcoDocWhite, IcoFavPink, IcoFavFilled, IcoLikeGrey, IcoLikeGreen } from "../components/icons";

// Import BWP Components
import { ShowMoreButton } from "../components/button";
import { BWPFlag, BWPContainer } from "../components/common";
import { BWPBannerSlider } from "../components/slider";
import Slider from "react-slick";

// Demo only
import Dog from "../styles/assets/demo/random5-5.jpg";
import Cat from "../styles/assets/demo/FRS100927.jpg";
import Bird from "../styles/assets/demo/1820487.jpg";

const DemoClick = (fav:boolean) => {
  console.log("fav: ",fav);
}

const SliderSetting = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  swipeToSlide: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        infinite: true
      }
    }
  ]
};

const DemoBlocks =[
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Dog, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Cat, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Bird, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Cat, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Dog, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Bird, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Dog, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Cat, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Bird, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Dog, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10, itemLink: "/", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Cat, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" }
]

const DemoBlogItems = [
  { title: "新手養狗５大注意事項", link: "/", image: Dog, desc:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", image: Cat, desc:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", image: Bird, desc:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", image: Dog, desc:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", image: Bird, desc:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", image: Dog, desc:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", image: Cat, desc:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", image: Dog, desc:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", image: Cat, desc:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" }
]

// End of Demo


const HomePage = () => {
    const { t } = useTranslation();
    
    return(<>
        <Helmet>
            <title>{ t('lb_home')} | Better We Pet</title>
        </Helmet>
        <div className="grid grid-cols-1 my-6">
            <BWPBannerSlider items={[
              { image: Dog },
              { image: Cat },
              { image: Bird }
            ]}/>
            <div className="py-4">
              <div className="grid grid-cols-2">
                <div className=" mx-3 sm:mx-2 z-0">
                  <BWPFlag color="red" icon={IcoHot}>{t("lb_hot_products")}</BWPFlag>
                </div>
                <div className="text-right mx-3 sm:mx-2 z-0">
                  <Link to="/" className="float-right"><ShowMoreButton className="ml-auto">{t("lb_show_all")}</ShowMoreButton></Link>
                </div>
              </div>
              <div className="p-1"></div>
              <Slider {...SliderSetting}>
                {
                  DemoBlocks.map((item, i) => (<div key={`key${i}`}>
                    <BWPContainer className="bwp-container rounded-base bg-bwp-white mx-3 sm:mx-2">
                      <BWPContainer.Head background={item.itemImage}>
                        <div className="absolute right-3 top-3" >
                          <div className={`bg-bwp-white cursor-pointer rounded-full w-7 h-7 relative`}>
                              <div>
                                  <img className="w-7 h-7 pt-px pl-px" src={IcoFavFilled} />
                              </div>
                          </div>
                        </div>
                      </BWPContainer.Head>
                      <BWPContainer.Body className="h-24">
                        <div className="truncate">
                          <Link to={item.itemLink}>
                              <span className="text-lg font-semibold font-family-noto">{ item.itemName }</span>
                          </Link>
                        </div>
                        <div className="text-right pt-2">
                          <span className="text-sm line-through text-bwp-grey font-family-noto">HKD$200</span>
                        </div>
                        <div className="text-right">
                            <span className="text-xl text-bwp-green font-semibold font-family-noto">HKD$20</span>
                        </div>
                      </BWPContainer.Body>
                      <BWPContainer.Foot>
                        <div className="flex-auto">
                          <Link to={item.providerLink} className="flex">
                              <span className="rounded-full w-7 h-7 mt-0.5 bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${item.providerIcon})`}}>
                              </span>
                              <span className="truncate text-base leading-8 font-semibold px-2 font-family-noto">{item.providerName}</span>
                          </Link>
                        </div>
                        <div className="flex-auto justify-self-end">
                          <div className={`bg-bwp-white flex flex-row-reverse relative cursor-pointer`}>
                            <div className="px-1">
                                <span className="text-base leading-8 font-family-noto">100</span>
                            </div>
                            <div className="flex-initial">
                              <img className="h-8" src={IcoLikeGrey} />
                            </div>
                          </div>
                        </div>
                      </BWPContainer.Foot>
                    </BWPContainer>
                  </div>))
                }
              </Slider>
            </div>
            <div className="py-4">
              <div className="grid grid-cols-2">
                <div className=" mx-3 sm:mx-2 z-0">
                  <BWPFlag color="blue" icon={IcoLatest}>{t("lb_latest_products")}</BWPFlag>
                </div>
                <div className="text-right mx-3 sm:mx-2 z-0">
                  <Link to="/" className="float-right"><ShowMoreButton className="ml-auto">{t("lb_show_all")}</ShowMoreButton></Link>
                </div>
              </div>
              <div className="p-1"></div>
              <Slider {...SliderSetting}>
              {
                  DemoBlocks.map((item, i) => (<div key={`key${i}`}>
                    <BWPContainer className="bwp-container rounded-base bg-bwp-white mx-3 sm:mx-2">
                      <BWPContainer.Head background={item.itemImage}>
                        <div className="absolute right-3 top-3" >
                          <div className={`bg-bwp-white cursor-pointer rounded-full w-7 h-7 relative`}>
                              <div>
                                <img className="w-7 h-7 pt-px pl-px" src={IcoFavFilled} />
                              </div>
                          </div>
                        </div>
                      </BWPContainer.Head>
                      <BWPContainer.Body className="h-24">
                        <div className="truncate">
                          <Link to={item.itemLink}>
                              <span className="text-lg font-semibold font-family-noto">{ item.itemName }</span>
                          </Link>
                        </div>
                        <div className="text-right pt-2">
                          <span className="text-sm line-through text-bwp-grey font-family-noto">HKD$200</span>
                        </div>
                        <div className="text-right">
                            <span className="text-xl text-bwp-green font-semibold font-family-noto">HKD$20</span>
                        </div>
                      </BWPContainer.Body>
                      <BWPContainer.Foot>
                        <div className="flex-auto">
                          <Link to={item.providerLink} className="flex">
                              <span className="rounded-full w-7 h-7 mt-0.5 bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${item.providerIcon})`}}>
                              </span>
                              <span className="truncate text-base leading-8 font-semibold px-2 font-family-noto">{item.providerName}</span>
                          </Link>
                        </div>
                        <div className="flex-auto justify-self-end">
                          <div className={`bg-bwp-white flex flex-row-reverse relative cursor-pointer`}>
                            <div className="px-1">
                                <span className="text-base leading-8 font-family-noto">100</span>
                            </div>
                            <div className="flex-initial">
                              <img className="h-8" src={IcoLikeGrey} />
                            </div>
                          </div>
                        </div>
                      </BWPContainer.Foot>
                    </BWPContainer>
                  </div>))
                }
              </Slider>
            </div>
            <div className="py-4">
              <div className="grid grid-cols-2">
                <div className=" mx-3 sm:mx-2 z-0">
                <BWPFlag color="light-green" icon={IcoDocWhite}>{t("lb_hot_blog_post")}</BWPFlag>
                </div>
                <div className="text-right mx-3 sm:mx-2 z-0">
                  <Link to="/" className="float-right"><ShowMoreButton className="ml-auto">{t("lb_show_all")}</ShowMoreButton></Link>
                </div>
              </div>
              <div className="p-1"></div>
              <Slider {...SliderSetting}>
                {
                  DemoBlogItems.map((item, i) => (<div key={`key${i}`}>
                    <BWPContainer className="bwp-container rounded-base bg-bwp-white mx-3 sm:mx-2">
                      <BWPContainer.Head background={item.image} />
                      <BWPContainer.Body className="grid grid-cols-1 border-bwp-light-grey border-t border-solid">
                        <div className="">
                            <Link to={item.link}><span className="font-family-noto">{ item.title }</span></Link>
                        </div>
                        <div className="overflow-hidden h-20 px-2 my-3"><p className="text-xs leading-5 font-family-noto">{item.desc}</p></div>
                      </BWPContainer.Body>
                    </BWPContainer>
                  </div>))
                }
              </Slider>
              
            </div>
            <div className="py-4">
              <div className="grid grid-cols-2">
                <div className="mx-3 sm:mx-2 z-0">
                <BWPFlag color="pink" icon={IcoFavWhite}>{t("lb_you_may_like")}</BWPFlag>
                </div>
                <div className="text-right mx-3 sm:mx-2 z-0">
                  <Link to="/" className="float-right"><ShowMoreButton className="ml-auto">{t("lb_show_all")}</ShowMoreButton></Link>
                </div>
              </div>
              <div className="p-1"></div>
              <Slider {...SliderSetting}>
                {
                  DemoBlocks.map((item, i) => (<div key={`key${i}`}>
                    <BWPContainer className="bwp-container rounded-base bg-bwp-white mx-3 sm:mx-2">
                      <BWPContainer.Head background={item.itemImage}>
                        <div className="absolute right-3 top-3" >
                          <div className={`bg-bwp-white cursor-pointer rounded-full w-7 h-7 relative`}>
                              <div>
                                <img className="w-7 h-7 pt-px pl-px" src={IcoFavFilled} />
                              </div>
                          </div>
                        </div>
                      </BWPContainer.Head>
                      <BWPContainer.Body className="h-24">
                        <div className="truncate">
                          <Link to={item.itemLink}>
                              <span className="text-lg font-semibold font-family-noto">{ item.itemName }</span>
                          </Link>
                        </div>
                        <div className="text-right pt-2">
                          <span className="text-sm line-through text-bwp-grey font-family-noto">HKD$200</span>
                        </div>
                        <div className="text-right">
                            <span className="text-xl text-bwp-green font-semibold font-family-noto">HKD$20</span>
                        </div>
                      </BWPContainer.Body>
                      <BWPContainer.Foot>
                        <div className="flex-auto">
                          <Link to={item.providerLink} className="flex">
                              <span className="rounded-full w-7 h-7 mt-0.5 bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${item.providerIcon})`}}>
                              </span>
                              <span className="truncate text-base leading-8 font-semibold px-2 font-family-noto">{item.providerName}</span>
                          </Link>
                        </div>
                        <div className="flex-auto justify-self-end">
                          <div className={`bg-bwp-white flex flex-row-reverse relative cursor-pointer`}>
                            <div className="px-1">
                                <span className="text-base leading-8 font-family-noto">100</span>
                            </div>
                            <div className="flex-initial">
                              <img className="h-8" src={IcoLikeGrey} />
                            </div>
                          </div>
                        </div>
                      </BWPContainer.Foot>
                    </BWPContainer>
                  </div>))
                }
              </Slider>
            </div>
        </div>
    </>)
}
export default withRouter(HomePage);