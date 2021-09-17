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
        
        { /* Users Page */}
        <Route exact path="/my-cart" component={MyCartPage}/>
        <Route exact path="/my-profile" component={MyProfilePage}/>
        <Route exact path="/my-profile/update-profile" component={UpdateProfilePage}/>
        <Route exact path="/my-profile/change-password" component={ChangePasswordPage}/>
        <Route exact path="/my-profile/pets" component={MyPetsPage}/>
        <Route exact path="/my-profile/pets/add" component={PetEditPage}/>
        <Route exact path="/my-profile/pets/:id" component={PetEditPage}/>
        
        <Route exact path="/my-favorite" component={MyFavoritePage}/>
        
        { /* Error handling */}
        <Route exact path="*" component={NotFound}/>
      </Switch>)
}  

export default MyRoute;