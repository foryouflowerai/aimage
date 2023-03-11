import React, { useEffect, useState } from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Generate from "./pages/Generate";
import Explore from "./pages/Explore";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const saved = JSON?.parse(localStorage?.getItem("saved"));
    const user = saved && JSON?.parse(localStorage?.getItem("user"));
    user && setUser(user);
  }, []);
  return (
    <div>
      {user ? (
        <div className="">
          <div className="fixed top-0 w-full z-10">
            <Header />
          </div>
          <div className="pt-16">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/generate" element={<Generate />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <div className="">
            <Footer />
          </div>{" "}
        </div>
      ) : (
        <Login setLogin={setUser} />
      )}
    </div>
  );
}

export default App;
