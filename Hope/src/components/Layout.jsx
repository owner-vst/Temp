import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  //useNavigate();
  //temp
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
