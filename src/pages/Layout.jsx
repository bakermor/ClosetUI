import { Outlet } from "react-router-dom";

const Layout = () => {
  // navigation bar
  return (
    <div className="flex-1">
      <div></div>
      <Outlet />
    </div>
  );
};

export default Layout;
