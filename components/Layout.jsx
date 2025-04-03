import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <footer className="footer">
        <p>© 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;