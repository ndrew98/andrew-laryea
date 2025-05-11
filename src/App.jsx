/**
 * @copyright (c) 2025 codewithandrew
 * @license  Apache-2.0
 */

import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default App;
