import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import UserContext from "./utils/UserContext";

const Layout = () => {
  const [userName, setUserName] = useState("Rashid Imran");
  return (
    <UserContext.Provider value={{ name: userName, setUserName }}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
