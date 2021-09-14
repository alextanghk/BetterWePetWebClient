import React, { useState, useRef } from 'react';
import { Link, NavLink, BrowserRouter } from 'react-router-dom';

// Import BWP Components
import { MinMessager } from "./components/messager";
import { BWPInput, SignInBox } from './components/common';
import Modal from "./components/modal";

// Import Images / Icons
import Logo from './styles/assets/images/img_openning.png';
import {
  IcoFacebook, IcoInstagram, IcoUserWhite, 
  IcoSearchGrey, IcoUserGrey, IcoFavGrey, IcoHome2Green, IcoCartGrey,
  IcoSearchGreen, IcoUserGreen, IcoFavGreen, IcoHome2Grey, IcoCartGreen
} from "./components/icons";

// Import Images / Icons for mobile footer menu

// Import Functions
import { useTranslation } from 'react-i18next';
import { clickOutsideAlerter } from "./helpers";

function Header() {
  const { t } = useTranslation();
  
  return (<header className="bwp-bg-light-green shadow flex flex-row w-full h-14 sm:px-0 px-3 z-40">
        <div className="flex-initial hidden md:block p-2">
          <Link to="/"><img src={Logo} className="h-full" alt="fireSpot"/></Link>
        </div>
        <div className="py-3 sm:px-2 px-0 sm:flex-initial flex-auto">
          <BWPInput icon={IcoSearchGrey} 
            color="bwp-bg-white" onIconClick={(e:any)=>void(0)}
            className="bwp-rounded-base bwp-bg-white text-base"
            placeholder={t("ph_search_all")}
          />
        </div>
        <div className="flex-auto hidden md:block h-full">
          <nav className="h-full flex text-xl leading-10 font-extrabold">
              <NavLink activeClassName="actived" to="/clinics" className="px-4 py-2 hover:bunny">
                <span className="bwp-text-white font-family-seto">{ t("lb_clinics") }</span>
              </NavLink>
              <NavLink activeClassName="actived" to="/merchants" className="px-4 py-2 hover:bunny">
                <span className="bwp-text-white font-family-seto">{ t("lb_merchants") }</span>
              </NavLink>
              <NavLink activeClassName="actived" to="/services" className="px-4 py-2 hover:bunny">
                <span className="bwp-text-white font-family-seto">{ t("lb_services") }</span>
              </NavLink>
          </nav>
        </div>
        <div className="flex-initial">
          <MinMessager />
        </div>
        <div className="flex-initial sm:block hidden">
          <UserMenu />
        </div>
      </header>)
}

interface UserMenuProps {
  auth?: boolean
}
const UserMenu:React.FC<UserMenuProps> = (props) => {

  const { auth = false } = props;
  const { t } = useTranslation();

  const wrapperRef = useRef(null);
  clickOutsideAlerter(wrapperRef, ()=> {
    setOpen(false);
  });

  const [open, setOpen] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  return (<div className="ml-1.5 my-1.5 sm:m-1.5 relative" ref={wrapperRef}>
    <button className="rounded-full p-1 bwp-btn-green" onClick={() => { setOpen(!open)}}>
      <img src={IcoUserWhite} alt="user" className="w-9 h-9"/>
    </button>
    <div className={`absolute top-14 right-0 w-64 z-10 bwp-bg-white transition-all overflow-hidden -mt-1.5 -mr-1 ${open ? "max-h-screen":"max-h-0"}`}>
      <nav className="flex flex-col z-20">
        <Link to="/clinics" className="px-4 py-2 border-solid border-t bwp-border-grey block sm:hidden">
          <span className="font-family-noto">{ t("lb_clinics") }</span>
        </Link>
        <Link to="/merchants" className="px-4 py-2 border-solid border-t bwp-border-grey block sm:hidden">
          <span className="font-family-noto">{ t("lb_merchants") }</span>
        </Link>
        <Link to="/services" className="px-4 py-2 border-solid border-t bwp-border-grey block sm:hidden">
          <span className="font-family-noto">{ t("lb_services") }</span>
        </Link>
        { 
          auth && <Link to="/" className="px-4 py-2 border-solid border-t bwp-border-grey">
            <span className="font-family-noto">{ t("lb_my_profile") }</span>
          </Link>
        }
        { 
          auth && <Link to="/" className="px-4 py-2 border-solid border-t bwp-border-grey">
            <span className="font-family-noto">{ t("lb_sign_out") }</span>
          </Link>
        }
        { 
          !auth && <a href="#" onClick={(e:any)=>{
              setOpen(false)
              setLogin(true)
            }} className="px-4 py-2 border-solid border-t bwp-border-grey">
            <span className="font-family-noto">{ t("lb_sign_up") } / { t("lb_sign_in") }</span>
          </a>
        }
      </nav>
    </div>
    <Modal closeButton open={login} onClose={()=>{ setLogin(false) }}>
        <SignInBox />
    </Modal>
  </div>)
}

function Footer() {
  const { t } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);

  return (<footer className="bwp-border-light-grey border-t bwp-bg-white border-solid grid lg:grid-cols-2 grid-cols-1 mb-14 sm:mb-0 p-2 mt-3 h-19 px-3">
    <div className="md:text-base text-xs lg:text-left text-center">
      <span className="leading-10">&copy; { new Date().getFullYear() } Better We Pet. All rights reserved.</span>
    </div>
    <div>
      <nav className="w-full flex lg:flex-row-reverse flex-col-reverse">
        <nav className="p-0 flex flex-row-reverse self-center">
          <Link to="/clinics" className="px-2 sm:py-1.5 py-3">
            <img src={IcoInstagram} className="sm:w-8 w-10 h-auto sm:mx-0 mx-4" alt="Better We Pet Instagram"/>
          </Link>
          <Link to="/clinics" className="px-2 sm:py-1.5 py-3">
            <img src={IcoFacebook} className="sm:w-8 w-10 h-auto sm:mx-0 mx-4" alt="Better We Pet Facebook"/>
          </Link>
        </nav>
        <Link to="/" className="px-2 py-1.5 self-center sm:text-base text-xl">{ t("lb_contact_us") }</Link>
        <Link to="/" className="px-2 py-1.5 self-center sm:text-base text-xl">{ t("lb_privacy") }</Link>
        <Link to="/" className="px-2 py-1.5 self-center sm:text-base text-xl">{ t("lb_policy") }</Link>
        <Link to="/about-us" className="px-2 py-1.5 self-center sm:text-base text-xl">{ t("lb_about_us") }</Link>
      </nav>
    </div>
    <div className="h-14 bwp-bg-white w-full box-content bwp-border-light-grey border-t md:hidden grid grid-cols-5 fixed sm:relative bottom-0 left-0 z-10">
        <NavLink className="relative" to="/search" activeClassName="actived">
          <span className="absolute top-1/2 left-1/2 -mt-4 -ml-4">
            <img className="h-8 w-8 actived:hidden" src={IcoSearchGrey} />
            <img className="h-8 w-8 actived:block" src={IcoSearchGreen} />
          </span>
        </NavLink>
        <NavLink className="relative" to="/my-favorite" activeClassName="actived">
          <span className="absolute top-1/2 left-1/2 -mt-4 -ml-4">
            <img className="h-8 w-8 actived:hidden" src={IcoFavGrey} />
            <img className="h-8 w-8 actived:block" src={IcoFavGreen} />
          </span>
        </NavLink>
        <NavLink className="relative" to="/" exact={true} activeClassName="actived">
          <span className="absolute top-1/2 left-1/2 -mt-6 -ml-6">
            <img className="h-12 w-12 actived:hidden" src={IcoHome2Grey} />
            <img className="h-12 w-12 actived:block" src={IcoHome2Green} />
          </span>
        </NavLink>
        <NavLink className="relative" to="/my-cart" activeClassName="actived">
          <span className="absolute top-1/2 left-1/2 -mt-4 -ml-4">
            <img className="h-8 w-8 actived:hidden" src={IcoCartGrey} />
            <img className="h-8 w-8 actived:block" src={IcoCartGreen} />
          </span>
        </NavLink>
        <NavLink className="relative" to="/my-profile" activeClassName="actived">
          <span className="absolute top-1/2 left-1/2 -mt-4 -ml-4">
            <img className="h-8 w-8 actived:hidden" src={IcoUserGrey} />
            <img className="h-8 w-8 actived:block" src={IcoUserGreen} />
          </span>
        </NavLink>
    </div>
  </footer>)
}

interface LayoutProps {
    children?: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="App bwp-bg-light-grey bwp-text-dark-grey">
        <Header />
        <div className="bwp-body max-w-screen-xl mx-auto my-0 py-6">
            {children}
        </div>
        <Footer />
    </div>
  );
}

export default Layout;
