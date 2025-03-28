import { Outlet } from "react-router-dom";

const Layout = () => {
  // navigation bar
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
