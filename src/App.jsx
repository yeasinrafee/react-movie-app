import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main grid grid-cols-1 md:grid-cols-4 gap-10 md:mx-64 text-center">
        <div className="home-container md:col-span-3">
          <Home />
        </div>
        <div className="sidebar-container md:col-span-1 bg-red-500">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
