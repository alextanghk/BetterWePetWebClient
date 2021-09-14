import React from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Import Image
import { IcoHot, IcoFavWhite, IcoLatest, IcoDocWhite } from "../components/icons";

// Import BWP Components
import { ShowMoreButton } from "../components/button";
import { ProductBlock, PostBlock, ProductBlockProps, PostBlockProps } from "../components/blocks";
import { BWPFlag } from "../components/common";
import { BWPBannerSlider, BWPBlockSlider } from "../components/slider";

// Demo only
import Dog from "../styles/assets/demo/random5-5.jpg";
import Cat from "../styles/assets/demo/FRS100927.jpg";
import Bird from "../styles/assets/demo/1820487.jpg";

const DemoClick = (fav:boolean) => {
  console.log("fav: ",fav);
}

const DemoBlocks:Array<ProductBlockProps> =[
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

const DemoBlogItems:Array<PostBlockProps> = [
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
        <div className="grid grid-cols-1">
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
              <BWPBlockSlider 
                items={ DemoBlocks.map((item:ProductBlockProps) => (<ProductBlock {...item}/>))}
              />
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
              <BWPBlockSlider 
                items={ DemoBlocks.map((item:ProductBlockProps) => (<ProductBlock {...item}/>))}
              />
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
              <BWPBlockSlider 
                items={ DemoBlogItems.map((item:PostBlockProps) => (<PostBlock {...item}/>))}
              />
              
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
              <BWPBlockSlider 
                items={ DemoBlocks.map((item:ProductBlockProps) => (<ProductBlock {...item}/>))}
              />
            </div>
        </div>
    </>)
}
export default withRouter(HomePage);