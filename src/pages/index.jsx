import React, { useEffect } from "react";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import PageNFound from "../components/PageNFound";
import UserSide from "../layout/UserSide";
import { Admin } from "../pages/Admin";
import { Login } from "../pages/Auth";
import { issetToken } from "../helpers/tokenStorage";
import { CreateMentor, Mentor, UpdateMentor } from "../pages/Admin/Mentor";
const Pages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    } else if (window.location.pathname === "/login" && issetToken()) {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="*" element={<PageNFound />} />
      <Route path="/login" index={true} element={<Login />} />

      {/* --------------client side route-------------- */}
      <Route
        element={
          <UserSide>
            <Outlet />
          </UserSide>
        }
      >
        <Route path="/">
          <Route index={true} element={<Admin />} />

          {/* mentor */}
          <Route index={false} path="/mentor">
            <Route index={true} element={<Mentor />} />
            <Route index={false} path="create">
              <Route index={true} element={<CreateMentor />} />
            </Route>
            <Route index={false} path="update">
              <Route index={true} element={<UpdateMentor />} />
            </Route>
          </Route>
        </Route>
      </Route>
      {/* --------------client side route-------------- */}
    </Routes>
  );
};
export default Pages;
