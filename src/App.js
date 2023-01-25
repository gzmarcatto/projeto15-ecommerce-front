import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";

export default function App() {

  const [user, setUser] = React.useState(undefined);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}
