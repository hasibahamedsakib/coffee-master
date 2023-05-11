import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="content-details">
        <Outlet />
      </div>
      <h1>Footer</h1>
    </div>
  );
};

export default Root;
