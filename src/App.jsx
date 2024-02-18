import "./App.css";
import { Bluebar } from "./components/Bluebar";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { CookiePreferences } from "./components/CookiePreferences";
import { MetamaskVideo } from "./components/MetamaskVideo";
import { Applications } from "./components/Applications";

function App() {
  return (
    <>
      <Bluebar />
      <Navbar />
      <Body />
      <MetamaskVideo />
      <Applications />
      <CookiePreferences />
    </>
  );
}

export default App;
