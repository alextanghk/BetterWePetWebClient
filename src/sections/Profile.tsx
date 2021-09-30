import React,{ useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IcoUserGreen, IcoPasswordLockedGreen, IcoFootprintFullGreen, IcoCarGreen, IcoProductGreen, IcoBellGreen, IcoLogoutWhite, IcoRightGrey, IcoFavFilledGreen } from "../components/icons";
import { useTranslation } from 'react-i18next';
import { BWPSwitch, BWPImgInput, BWPButton } from "../components/common"; 
import { BWPContext } from '../Context';

// Demo
import Dog from "../styles/assets/demo/random5-5.jpg";
import Cat from "../styles/assets/demo/FRS100927.jpg";
import Bird from "../styles/assets/demo/1820487.jpg";
import Slider from "react-slick";

interface ProfileMenuProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode,
    __TYPE?: string
}

const ProfileMenu:React.FC<ProfileMenuProps> = (props) => {
    const { className = "", children, ...rest} = props;
    return (<div className={`bg-bwp-white w-full text-based leading-8 py-2 px-4 ${className}`} {...rest}>
        {children}
    </div>);
}

ProfileMenu.defaultProps = {
    __TYPE: "PROFILE_MENU_ITEMS"
}

const ProfileBody:React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const { className = "", children, ...rest} = props;
    return (<div className={`col-span-2 col-start-1 md:col-start-2 md:row-start-2 row-start-1 mb-4 ${className}`} {...rest}>
        {children}
    </div>);
}

interface MyProps {
    children?: React.ReactNode,
}

interface MyComponents {
    Menus: React.FC<ProfileMenuProps>;
    Body: React.FC<React.HTMLProps<HTMLDivElement>>;
}

const Profile:React.FC<MyProps> & MyComponents = (props) => {
    const { t } = useTranslation();
    const {children = null} = props;
    console.log(children)
    const { dispatch } = useContext(BWPContext);

    const history = useHistory();
    const handleOnLogout = () =>{
        dispatch({type: "LOGOUT"});
        history.push("/");
    }
    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        variableWidth: true
      };

    const myMenu = children && React.Children.toArray(children).filter((child)=> {
        return React.isValidElement(child) && ((child as React.ReactElement<any>).props.__TYPE !== undefined && (child as React.ReactElement<any>).props.__TYPE === "PROFILE_MENU_ITEMS")
    }).map((child)=>{
        return child;
    })
    
    return (<>
        <div className="grid md:grid-cols-3 md:gap-4 grid-cols-2 mx-auto xl:w-3/4 w-full md:mt-6 mt-0 mb-6">
            <div className="md:col-span-3 col-span-2 grid grid-cols-2 md:row-start-1 row-start-3 mt-4 md:mt-0">
                <div className="flex my-3 ">
                    <BWPImgInput className="flex-initial md:mx-4 mx-2 " image={Cat}/>
                    <div className="flex-auto grid grid-rows-2">
                        <span className="text-bwp-green text-xl font-family-noto">Name here</span>
                        <span className="font-family-noto">email@email.com</span>
                    </div>
                </div>
                <div className="justify-self-end my-3">
                    <BWPButton 
                        className="mr-2 w-30 my-2"
                        onClick={handleOnLogout}
                    >
                        <img src={IcoLogoutWhite} className="inline-block h-6 mr-2"/>
                        <span className="text-bwp-white">{t("lb_sign_out")}</span>
                    </BWPButton>
                </div>
            </div>
            <div className="col-span-2 md:col-span-1">
                {
                    myMenu && myMenu.length > 0 && <div className="grid grid-cols-1 mb-4">{myMenu}</div>
                }
                <div className="grid grid-cols-1">
                    <div className="bg-bwp-white w-full text-based leading-8 py-2 px-4">
                        <Link to="/my-profile/update-profile" className="flex">
                            <img src={IcoUserGreen} className={`w-7 h-auto flex-initial`} />
                            <span className="flex-auto px-2">{t("lb_update_profile")}</span>
                            <img src={IcoRightGrey} className={`w-7 h-auto flex-initial`} />
                        </Link>
                    </div>
                    <div className="bg-bwp-white w-full text-based leading-8 py-2 px-4">
                        <Link to="/my-profile/change-password" className="flex">
                            <img src={IcoPasswordLockedGreen} className={`w-7 h-auto flex-initial`} />
                            <span className="flex-auto px-2">{t("lb_change_password")}</span>
                            <img src={IcoRightGrey} className={`w-7 h-auto flex-initial`} />
                        </Link>
                    </div>
                    <div className="bg-bwp-white w-full text-based leading-8 py-2 px-4 mt-4">
                        <Link to="/my-profile/my-fav" className="flex">
                            <img src={IcoFavFilledGreen} className={`w-7 h-auto flex-initial`} />
                            <span className="flex-auto px-2">{t("lb_my_favorite")}</span>
                            <img src={IcoRightGrey} className={`w-7 h-auto flex-initial`} />
                        </Link>
                    </div>
                    <div className="bg-bwp-white w-full text-based leading-8 py-2 px-4">
                        <Link to="/my-profile/pets" className="flex">
                            <img src={IcoFootprintFullGreen} className={`w-7 h-auto flex-initial`} />
                            <span className="flex-auto px-2">{t("lb_my_pets")}</span>
                            <img src={IcoRightGrey} className={`w-7 h-auto flex-initial`} />
                        </Link>
                        <div className="mt-2">
                            <Slider {...settings}>
                                <div>
                                <Link to="/">
                                    <BWPImgInput className="md:mx-4 mx-2 " image={Bird}/>
                                        <div className="text-center"><span>Haha</span></div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                    <BWPImgInput className="md:mx-4 mx-2 " image={Dog}/>
                                    <div className="w-full text-center"><span>Haha</span></div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                    <BWPImgInput className="md:mx-4 mx-2 " image={Bird}/>
                                    <div className="w-full text-center"><span>Haha</span></div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                    <BWPImgInput className="md:mx-4 mx-2 " image={Cat}/>
                                    <div className="w-full text-center"><span>Haha</span></div>
                                    </Link>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="bg-bwp-white w-full text-based leading-8 py-2 px-4 mt-4">
                        <Link to="/my-profile/my-orders" className="flex">
                            <img src={IcoProductGreen} className={`w-7 h-auto flex-initial`} />
                            <span className="flex-auto px-2">{t("lb_order_histories")}</span>
                            <img src={IcoRightGrey} className={`w-7 h-auto flex-initial`} />
                        </Link>
                    </div>
                    <div className="bg-bwp-white w-full text-based leading-8 py-2 px-4">
                        <Link to="/my-profile/delivery-addresses" className="flex">
                            <img src={IcoCarGreen} className={`w-7 h-auto flex-initial`} />
                            <span className="flex-auto px-2">{t("lb_delivery_address")}</span>
                            <img src={IcoRightGrey} className={`w-7 h-auto flex-initial`} />
                        </Link>
                    </div>
                    <div className="bg-bwp-white w-full text-based leading-8 py-2 px-4">
                        <div className="flex">
                            <img src={IcoBellGreen} className={`w-7 h-auto flex-initial`} />
                            <span className="flex-auto px-2">{t("lb_notification")}</span>
                            <BWPSwitch color="light-green" className="mt-1" defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
            {
                children && React.Children.toArray(children).filter((child)=> {
                    return React.isValidElement(child) && ((child as React.ReactElement<any>).props.__TYPE === undefined || (child as React.ReactElement<any>).props.__TYPE !== "PROFILE_MENU_ITEMS")
                }).map((child)=>{
                    return child;
                })
            }
        </div>
        
    </>);
}

Profile.Menus = ProfileMenu;
Profile.Body = ProfileBody;

export default Profile;