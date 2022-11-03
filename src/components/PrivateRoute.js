import { navigate } from "gatsby";
import React from "react";
import { useAuthProvider } from "./AuthProvider";

export default function PrivateRoute({ children }) {
  const { isLoading, currentUser } = useAuthProvider();
  const location = typeof window === "object" ? window.location : null;
  const pathname = location ? location.pathname : null;

  console.log("isLoading", isLoading);
  console.log("currentUser", currentUser);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (
    !isLoading &&
    (!currentUser || currentUser.role !== "Admin") &&
    pathname !== "/login"
  ) {
    navigate("/login");
    return null;
  }

  return <div className="private-route">{children}</div>;
}
