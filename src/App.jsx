import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [watchTime, setWatchTime] = useState("");

  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));

    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="main grid grid-cols-1 md:grid-cols-4 gap-10 md:mx-64 text-center">
        <div className="home-container md:col-span-3">
          <Home handleWatchTime={handleWatchTime} />
        </div>
        <div className="sidebar-container md:col-span-1">
          <Sidebar watchTime={watchTime} />
        </div>
      </div>
    </div>
  );
}

export default App;
