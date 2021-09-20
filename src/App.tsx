import React, { useReducer, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider  } from "react-helmet-async";
import { SignInBox } from './components/common';
import Modal from "./components/modal";

// Import Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/index.scss';
import './App.scss';

// Import Project Elements
import { BWPContext } from "./Context";
import MyRoute from './Route';
import Layout from "./Layout";
import Loader from "./components/loader";

// Import Functions
// import { useTranslation } from 'react-i18next';
const reducer = (state: any, action: any)=>{
  switch(action.type) {
    case "LOADING": return { ...state, loading: action.payload.loading }; break;
    case "ON_LOGIN": return { ...state, onLogin: action.payload.onLogin  }; break;
    case "LOGIN_SUCCCESS":
      localStorage.setItem("isAuthenticated","true")
      return {
        ...state,
        accessToken: action.payload.accessToken,
        onLogin: false,
        loading: false,
        isAuthenticated: true,
        user: null
      }
      break;
    case "LOGOUT":
      localStorage.removeItem("isAuthenticated")
      return {
        ...state,
        accessToken: "",
        onLogin: false,
        loading: false,
        isAuthenticated: false,
        user: null
      }
      break;
    default: return state; break;
  }
}
function App() {

  const [state, dispatch] = React.useReducer(reducer, {
    isAuthenticated: false, token: "", user: null, loading: false, onLogin: false
  });

  useEffect(()=>{
    if (
      localStorage.getItem("isAuthenticated") === "true"
    ) {
      // Get access token by refresh token here
      dispatch({type: "LOADING", payload: { loading: true }});
      // Handle login function here
      setTimeout(()=>{
          dispatch({type: "LOGIN_SUCCCESS", payload: { accessToken: "1234596" }});
      }, 1000)
    }
  },[])

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="Better We Pet 全港最大型網上寵物平台" />
      </Helmet>
      <BrowserRouter>
        <BWPContext.Provider value={{state, dispatch}}>
          <Layout>
            <MyRoute />
            <Modal 
              allowClose={true} 
              allowBackdropClose={false} open={state.onLogin} onClose={()=>{ dispatch({type:"ON_LOGIN", payload: { onLogin: false}}) }}
            >
              <div className="max-h-screen">
                <SignInBox />
              </div>
            </Modal>
            { state.loading && <Loader /> }
          </Layout>
        </BWPContext.Provider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
