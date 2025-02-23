import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Store/Store";

const Layout = () => {
  const [userName, setUserName] = useState("Rashid Imran");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: userName, setUserName }}>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default Layout;
