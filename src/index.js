import React from "react"; //we are recreating this js file
import ReactDOM from "react-dom/client"; //remember these imports exactly as they are
import "./index.css"; //import this above the app component
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

//strict mode thst adds additional checks and warnings to our app component
