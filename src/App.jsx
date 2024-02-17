import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Bluebar } from "./components/Bluebar";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";

function App() {
  return (
    <>
      <Bluebar />
      <Navbar />
      <Body />
    </>
  );
}

export default App;
