import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Favourites = lazy(() => import("../screens/Favourites"));

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/favourites" exact element={<Favourites />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};

export default AppRoutes;
