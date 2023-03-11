import React from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Generate from "./pages/Generate";
import Explore from "./pages/Explore";

function App() {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header />
      </div>
      <div className="pt-16">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
