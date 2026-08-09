const heading = React.createElement(
  "h1",
  {
    id: "my-simple-heading",
    style: { color: "var(--heading-clr)", fontFamily: "sans-serif" },
  },
  "Welcome to react Sajed"
);

const paragraph = React.createElement(
  "p",
  {
    style: { color: "var(--heading-clr)", maxWidth: 400, opacity: 0.8 },
  },
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, odititaque quasi animi quos tempore minima placeat similique assumenda, laboriosamsit voluptatum harum unde tenetur provident pariatur iure velit fugit."
);

const button = React.createElement(
  "button",
  { onClick: changeHeadingColor },
  "Click me for a surprize"
);

function changeHeadingColor() {
  document.querySelector("#my-simple-heading").style.color = "#f23c6f";
}

const header = React.createElement(
  "header",
  {
    style: {
      padding: 16,
    },
  },
  [heading, paragraph, button]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(header);

// this is crazy, react didn't throw error for the random custom tag name, just as i guessed, it's operating on XML principles not HTML
const newElement = React.createElement(
  "customtagname",
  { customAttr: 34 },
  "whooaa"
);

// also the cursomAttr is stored inside the newElement.props which will come in handy later on for passing data to child components
