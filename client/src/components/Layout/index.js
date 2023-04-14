import { Outlet } from "react-router-dom";
import "./index.scss";

export default () => {
  return (
    <div className="layoutContainer">
      <header>
        <h3>Employee App</h3>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};
