import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Auth0ProviderWithRedirectUri from "./components/Auth0Provider/auth0Provider"; 
// export const frontURL= `https://from-zero-to-dev.vercel.app`;
export const frontURL2= `https://from-zero-to-dev-emma.vercel.app`;

/* export const frontURL= `http://localhost:3000` */

/* export const backURL= `http://localhost:3001` */
export const backURL= `https://fromzerotodev-production.up.railway.app`
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
          <Auth0ProviderWithRedirectUri 
          domain='dev-cyj52dwqtai2mmx3.us.auth0.com'
          clientId='rCtw55ViM9pc4dfyA9cukNwX9aZJGLSB'
          redirectUri={frontURL2}>
            <App />
          </Auth0ProviderWithRedirectUri>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
