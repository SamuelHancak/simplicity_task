import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { Outlet } from "react-router-dom";
import { StoreProvider } from "./Store.tsx";

const App = () => (
  <StoreProvider>
    <div className="page">
      <Sidebar />
      <div className="content" id="page-content">
        <Outlet />
      </div>
    </div>
  </StoreProvider>
);

export default App;
