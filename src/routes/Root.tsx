import { Outlet } from "react-router-dom";

const Root = () => (
  <>
        <header>
          <h1>Studio Ghibli Movies!</h1>
      </header>
    <Outlet />
  </>
);

export default Root;