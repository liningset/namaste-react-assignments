import React from "react";
import ReactDOM from "react-dom/client";

function HeadingComponent() {
  return (
    <div id="header">
      <h1>Hello From inside the component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe
        amet ipsum cumque distinctio voluptates nostrum quidem quas impedit ab
        voluptatum possimus, hic vero? Quod hic iste similique ad ipsam.
      </p>
    </div>
  );
}

function SomethingInIt() {
  return <span>this is just a test to see where it lands</span>;
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeadingComponent>some text</HeadingComponent>);
