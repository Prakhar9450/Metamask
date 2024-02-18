import "./App.css";
import { Bluebar } from "./components/Bluebar";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { CookiePreferences } from "./components/CookiePreferences";
import { MetamaskVideo } from "./components/MetamaskVideo";

function App() {
  return (
    <>
      <Bluebar />
      <Navbar />
      <Body />
      <MetamaskVideo />
      <CookiePreferences />
    </>
  );
}

export default App;
