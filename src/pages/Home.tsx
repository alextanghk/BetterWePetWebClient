import React from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Import Image
import { IcoHot, IcoFavWhite, IcoLatest, IcoDocWhite, IcoRightGreen } from "../components/icons";

// Import BWP Components
import { BWPFlag } from "../components/common";
import { BWPProductBlock, BWPBlogPostBlock } from '../components/blocks';
import Recommend from "../sections/Recommend"
import Slider from "react-slick";

// Demo only
import Dog from "../styles/assets/demo/random5-5.jpg";
import Cat from "../styles/assets/demo/FRS100927.jpg";
import Bird from "../styles/assets/demo/1820487.jpg";

const DemoClick = (fav:boolean) => {
  console.log("fav: ",fav);
}

const DemoBlocks =[
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Dog, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Cat, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Bird, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Cat, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Dog, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Bird, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Dog, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Cat, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Bird, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Dog, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" },
  { itemName: "手工制作狗狗圍巾", price: 60, discount: 30, likedCount: 10,  itemLink: "/products/detail/1", onClickFavorite: DemoClick, onClickLike: DemoClick, itemImage: Cat, providerName:"貓貓小店", providerIcon: Cat, providerLink: "/" }
]

const DemoBlogItems = [
  { title: "新手養狗５大注意事項", link: "/", cover: Dog, description:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", cover: Cat, description:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", cover: Bird, description:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", cover: Dog, description:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", cover: Bird, description:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", cover: Dog, description:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", cover: Cat, description:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", cover: Dog, description:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" },
  { title: "新手養狗５大注意事項", link: "/", cover: Cat, description:"勞工受《工作時間規例》的保障，容許每週最高工時 48 小時（包括超時工作），依政府所提供指引，若勞工為一名以上雇主工作，合併之總工時不應超過每週平均 48 小時之上限(17 週內平均)。而青少年則有每日 8 小時，每週 40 小時之限制規範。" }
]

// End of Demo


const Bannder = () => {

  const demoBanner = [
    { image: Dog },
    { image: Cat },
    { image: Bird }
  ];

  const bannerSetting = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots bwp-green-slick-dots",
    customPaging: (i:number) => (
        <div>
            <div className={`hidden sm:block w-10 h-8 bg-bwp-light-green bg-opacity-50 px-3 py-2 ${i === 0 ? "rounded-l-full w-12 pl-5" : i === (demoBanner.length -1 ) ? "rounded-r-full w-12 pr-5" : "" }`}>
                <span className="block w-4 h-4 m-auto bg-bwp-white rounded-full"></span>
            </div>
            <div className={`block sm:hidden w-8 h-6 bg-bwp-light-green bg-opacity-50 px-2.5 py-1.5 ${i === 0 ? "rounded-l-full w-10 pl-3" : i === (demoBanner.length -1 ) ? "rounded-r-full w-10 pr-3" : "" }`}>
                <span className="block w-3 m-auto h-3 bg-bwp-white rounded-full"></span>
            </div>
        </div>
    )
  }

    return (<div className="mx-3 sm:mx-2">
      <Slider {...bannerSetting}>
          {
              demoBanner.map((item:any,i:number) => {
                return (<div key={`i${i}`}>
                    <div className="rounded-base bg-cover bg-no-repeat bg-center aspect-w-16 aspect-h-9" style={{backgroundImage: `url(${item.image})`}}>
                    </div>
                  </div>)
              })
          }
      </Slider>
    </div>)
}

const HomePage = () => {
    const { t } = useTranslation();
    
    return(<>
        <Helmet>
            <title>{ t('lb_home')} | Better We Pet</title>
        </Helmet>
        <div className="grid grid-cols-1 my-6">
            <Bannder />
            <div className="py-4">
              <Recommend
                title={t("lb_hot_products")}
                color="red"
                className="mx-3 sm:mx-2"
                icon={IcoHot}
                link="/"
              >
                {
                  DemoBlocks.map((item, i) => (<div key={`key${i}`}>
                    <BWPProductBlock
                      
                        cover={item.itemImage}
                        itemLink={item.itemLink}
                        itemName={item.itemName}
                        prevPrice={(200).toFixed(2)}
                        price={(20).toFixed(2)}
                        merchantName={item.providerName}
                        merchantLink={item.providerLink}
                        merchantImg={item.providerIcon}
                    />
                    
                  </div>))
                }
              </Recommend>
            </div>
            <div className="py-4">
              <Recommend
                title={t("lb_latest_products")}
                color="blue"
                className="mx-3 sm:mx-2"
                icon={IcoLatest}
                link="/"
              >
                {
                  DemoBlocks.map((item, i) => (<div key={`key${i}`}>
                    <BWPProductBlock
                      
                        cover={item.itemImage}
                        itemLink={item.itemLink}
                        itemName={item.itemName}
                        prevPrice={(200).toFixed(2)}
                        price={(20).toFixed(2)}
                        merchantName={item.providerName}
                        merchantLink={item.providerLink}
                        merchantImg={item.providerIcon}
                    />
                    
                  </div>))
                }
              </Recommend>
            </div>
            <div className="py-4">
              <Recommend
                className="mx-3 sm:mx-2"
                title={t("lb_hot_blog_post")}
                color="light-green"
                icon={IcoDocWhite}
                link="/"
              >
                {
                  DemoBlogItems.map((item, i) => (<div key={`key${i}`}>
                    <BWPBlogPostBlock {...item}/>
                  </div>))
                }
              </Recommend>
            </div>
            <div className="py-4">
              <Recommend
                className="mx-3 sm:mx-2"
                title={t("lb_you_may_like")}
                color="pink"
                icon={IcoFavWhite}
                link="/"
              >
                {
                  DemoBlocks.map((item, i) => (<div key={`key${i}`}>
                    <BWPProductBlock
                      
                        cover={item.itemImage}
                        itemLink={item.itemLink}
                        itemName={item.itemName}
                        prevPrice={(200).toFixed(2)}
                        price={(20).toFixed(2)}
                        merchantName={item.providerName}
                        merchantLink={item.providerLink}
                        merchantImg={item.providerIcon}
                    />
                    
                  </div>))
                }
              </Recommend>
            </div>
        </div>
    </>)
}
export default withRouter(HomePage);