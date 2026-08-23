import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

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
