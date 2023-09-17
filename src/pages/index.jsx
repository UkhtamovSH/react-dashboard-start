import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import PageNFound from "../components/PageNFound";
import UserSide from "../layout/UserSide";
import { Admin, Login, Settings } from "../pages/Admin";
const Pages = () => (
  <Routes>
    <Route path="*" element={<PageNFound />} />
    <Route index={true} element={<Login />} />

    {/* --------------client side route-------------- */}
    <Route
      element={
        <UserSide>
          <Outlet />
        </UserSide>
      }
    >
      <Route path="/">
        <Route path="/admin">
          <Route index={true} element={<Admin />} />
        </Route>
        <Route path="/settings">
          <Route index={true} element={<Settings />} />
        </Route>
        {/* <Route path='/catalog'>
          <Route index={true} element={<Catalog />} />
          <Route index={false} path=':slug'>
            <Route index={true} element={<Village />} />
            <Route index={false} path='hotel/:slug'>
              <Route index={true} element={<Hotel />} />
            </Route>
          </Route>
        </Route>*/}
      </Route>
    </Route>
    {/* --------------client side route-------------- */}
  </Routes>
);
export default Pages;
