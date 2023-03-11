import React from 'react'
import { Header } from '../components'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';


function Root() {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <HashRouter>
        <Routes>
          <Route exact path="/" component={<Home />} />
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default Root