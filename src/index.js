import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD1SoE8E8rUlN265NCQBXLLkwhCXzrRViI",
  authDomain: "ecommerce-beverina.firebaseapp.com",
  projectId: "ecommerce-beverina",
  storageBucket: "ecommerce-beverina.appspot.com",
  messagingSenderId: "61227136607",
  appId: "1:61227136607:web:f4af79bde79ccbe8e24dea"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
