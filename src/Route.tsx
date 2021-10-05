import React, { useContext } from "react";
import {
    Route,
    Redirect,
    RouteProps,
    Switch
} from 'react-router-dom';

import { BWPContext } from './Context';

// Import Pages
import HomePage from "./pages/Home";
import MerchantsPage from "./pages/Merchants";
import ServicesPage from "./pages/Services";
import AboutUsPage from "./pages/AboutUs";
import SearchPage from "./pages/Search";

import SignInPage from "./pages/SignIn";

import ClinicsSearchPage from "./pages/ClinicsSearch";
import ClinicsDetailPage from "./pages/ClinicsDetail";

import MyProfilePage from "./pages/MyProfile";
import UpdateProfilePage from "./pages/Profile/UpdateProfile"
import ChangePasswordPage from "./pages/Profile/ChangePassword"
import MyPetsPage from "./pages/Profile/MyPets"
import PetEditPage from "./pages/Profile/PetDetails"
import DeliveryAddressPage from "./pages/Profile/DeliveryAddress"
import EditAddressPage from "./pages/Profile/EditAddress"
import MyOrdersPage from "./pages/Profile/MyOrders"
import OrderDetail from "./pages/Profile/OrderDetail";


// Purchase
import ProductDetailPage from "./pages/Purchase/ProductDetail";
import ShoppingCartPage from "./pages/Purchase/ShoppingCart"
import PreOrderPage from "./pages/Purchase/PreOrder";

import MyFavoritePage from "./pages/MyFavorite";
import MyCartPage from "./pages/MyCart";
import NotFound from "./pages/NotFound";

interface PrivateRouteProps extends RouteProps {
    component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props;
    const { state } = useContext(BWPContext);
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                state.isAuthenticated ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/sign-in",
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
};

function MyRoute() {
    return(<Switch>
        { /* Public Page */}
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about-us" component={AboutUsPage}/>
        <Route exact path="/clinics" component={ClinicsSearchPage}/>
        <Route exact path="/clinics/:id" component={ClinicsDetailPage}/>
        <Route exact path="/merchants" component={MerchantsPage}/>
        <Route exact path="/services" component={ServicesPage}/>
        <Route exact path="/sign-in" component={SignInPage}/>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/products/detail/:id" component={ProductDetailPage}/>
        
        
        { /* Users Page */}
        <Route exact path="/my-cart" component={MyCartPage}/>
        <Route exact path="/my-profile" component={MyProfilePage}/>
        <Route exact path="/my-profile/my-orders" component={MyOrdersPage}/>
        <Route exact path="/my-profile/update-profile" component={UpdateProfilePage}/>
        <Route exact path="/my-profile/change-password" component={ChangePasswordPage}/>
        <Route exact path="/my-profile/pets" component={MyPetsPage}/>
        <Route exact path="/my-profile/pets/add" component={PetEditPage}/>
        <Route exact path="/my-profile/pets/edit/:id" component={PetEditPage}/>
        <Route exact path="/my-profile/delivery-addresses" component={DeliveryAddressPage}/>
        <Route exact path="/my-profile/delivery-addresses/add" component={EditAddressPage}/>
        <Route exact path="/my-profile/delivery-addresses/edit/:id" component={EditAddressPage}/>
        <Route exact path="/my-profile/my-orders/detail/:id" component={OrderDetail}/>
        <Route exact path="/purchase/shopping-cart" component={ShoppingCartPage} />
        <Route exact path="/purchase/pre-order" component={PreOrderPage} />
        
        <Route exact path="/my-favorite" component={MyFavoritePage}/>
        
        { /* Error handling */}
        <Route exact path="*" component={NotFound}/>
      </Switch>)
}  

export default MyRoute;