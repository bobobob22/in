import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
