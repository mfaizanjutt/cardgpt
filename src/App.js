// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardList from "./ccomponents/CardList";
import CardDetail from "./ccomponents/CardDetail";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/card/:id" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
