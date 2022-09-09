import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, AuthRoute } from "./PrivateRoute";

import { InitialPage } from "./pages";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route element={<PrivateRoute />}>
        {/* routes when user remains logged in */}
      </Route>

      <Route element={<AuthRoute />}>
        <Route path="/" element={<InitialPage />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
