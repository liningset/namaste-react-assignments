import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1", {}, "Hello again Sajed.");

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element);
