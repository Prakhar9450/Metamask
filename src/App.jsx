import "./App.css";
import { Bluebar } from "./components/Bluebar";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { CookiePreferences } from "./components/CookiePreferences";

function App() {
  return (
    <>
      <Bluebar />
      <Navbar />
      <Body />
      <CookiePreferences />
    </>
  );
}

export default App;
