import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider} from "@auth0/auth0-react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "../src/routes/blog"


// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Auth0Provider domain= "dev-uix3nm4q.us.auth0.com"
  clientId= "IO84jvVXnfkDzOAvc4RneYHyN6wdPYNV"
  redirectUri="https://amazing-meninsky-6ee140.netlify.app/">
  
    <App />
  </Auth0Provider>} />
  <Route path="/blog" element={<Blog />} />
  
  </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
