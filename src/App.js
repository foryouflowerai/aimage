import React, { useEffect, useState } from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Generate from "./pages/Generate";
import Explore from "./pages/Explore";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON?.parse(localStorage?.getItem("aimageuser"));
    user && setUser(user);
    console.log(user);
  }, []);
  return (
    <div>
      <div className="">
        <div className="fixed top-0 w-full z-10">
          <Header />
        </div>
        <div className="pt-8 md:pt-10">
          <Routes>
            <Route exact path="/" element={<Home user={user } />} />
            <Route path="/generate" element={<Generate user={user} />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login setLogin={setUser} />} />
          </Routes>
        </div>
        <div className="">
          <Footer />
        </div>{" "}
      </div>
    </div>
  );
}

export default App;
