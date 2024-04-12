import "./Sidebar.css";
import { BellRing, Square } from "lucide-react";
import { SidebarItemType } from "./Sidebar.types.ts";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside>
    <div className="top">
      <Square size={40} />
      <h4>Test city</h4>
    </div>
    <nav>
      <ul>
        <SidebarItem icon={<BellRing size={20} />} text="Announcements" />
      </ul>
    </nav>
  </aside>
);

// @internal
const SidebarItem = ({ icon, text }: SidebarItemType) => (
  <li>
    <Link className="item" to="/">
      {icon} {text}
    </Link>
  </li>
);

export default Sidebar;
