import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { Outlet } from "react-router-dom";

const App = () => (
  <div className="page">
    <Sidebar />
    <div className="content" id="page-content">
      <Outlet />
    </div>
  </div>
);

export default App;
