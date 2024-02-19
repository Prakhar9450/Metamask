import "./App.css";
import { Bluebar } from "./components/Bluebar";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { CookiePreferences } from "./components/CookiePreferences";
import { MetamaskVideo } from "./components/MetamaskVideo";
import { Applications } from "./components/Applications";
import { Developers } from "./components/Developers";

function App() {
  return (
    <>
      <Bluebar />
      <Navbar />
      <Body />
      <MetamaskVideo />
      <Applications />
      <Developers />
      <CookiePreferences />
    </>
  );
}

export default App;
