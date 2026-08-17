import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  const [filterByString, setFilterByString] = useState("");

  return (
    <>
      <Header setFilterByString={setFilterByString} />
      <Main filterByString={filterByString} />
      <Footer />
    </>
  );
};

export default App;
