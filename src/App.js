import "./App.css";
import Nav from "./components/NavBars/MainNav";
import Sidebar from "./components/SideBars/MinSidebar";
import SearchNav from "./components/NavBars/SearchNav";

function App() {
  return (
    <>
      <Nav />
      <SearchNav />
      <Sidebar />
    </>
  );
}

export default App;
