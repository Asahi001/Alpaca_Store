import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Login from "./pages/login";

export default function Journey() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Find a Dealer" element={<Dashboard />}></Route>
          <Route path="/Blog" element={<Dashboard />}></Route>
          <Route path="/Videos" element={<Dashboard />}></Route>
          <Route path="/signin" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
