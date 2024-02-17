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
      <div className="grid place-items-center text-xs">
        LEARN MORE
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="4"
          stroke="currentColor"
          class="w-4 h-4 mt-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </>
  );
}

export default App;
