import { Link, Outlet } from "react-router-dom";
import "./index.scss";

export default () => {
  return (
    <div className="layoutContainer">
      <header>
        <Link className="link" to="/">
          <h3>Home</h3>
        </Link>
        <Link className="link" to="/event">
          <h3>Logs</h3>
        </Link>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};
