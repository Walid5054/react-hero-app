import Navbar from "../../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;