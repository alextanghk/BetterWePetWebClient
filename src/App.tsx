import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider  } from "react-helmet-async";

// Import Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss';

// Import Project Elements
import { BWPContext } from "./Context";
import MyRoute from './Route';
import Layout from "./Layout";
import Loader from "./components/loader";

// Import Functions
// import { useTranslation } from 'react-i18next';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const context = {
    loading: loading,
    setLoading: setLoading
  }

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="Better We Pet 全港最大型網上寵物平台" />
      </Helmet>
      <BrowserRouter>
        <BWPContext.Provider value={context}>
          <Layout>
            <MyRoute />
            { loading && <Loader /> }
          </Layout>
        </BWPContext.Provider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
