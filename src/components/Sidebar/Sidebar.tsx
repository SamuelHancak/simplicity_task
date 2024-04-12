import "./Sidebar.css";
import { BellRing, Square } from "lucide-react";

const Sidebar = () => {
  return (
    <aside>
      <div className="top">
        <Square size={40} />
        <h4>Test city</h4>
      </div>
      <nav>
        <ul>
          <li>
            <BellRing size={15} />
            <a href="#">Announcements</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
