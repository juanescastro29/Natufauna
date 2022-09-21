import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const PrivateRoute = ({ children }) => {

  const { adminSession } = useContext(AdminContext);

  if (adminSession) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;