import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Header /> {/* Self-closing tag */}
      <Home />   {/* Added Home component */}
      <Footer /> {/* Self-closing tag */}
    </div>
  );
};

export default App;