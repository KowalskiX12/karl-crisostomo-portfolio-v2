import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

RootLayout.displayName = "RootLayout";

export default RootLayout;
