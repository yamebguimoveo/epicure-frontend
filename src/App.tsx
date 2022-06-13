import React from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ScrollToTop } from "./components/reusable/ScrollToTop";

function App() {
  return (
    <div className='app'>
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
