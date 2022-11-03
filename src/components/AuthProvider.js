import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export default function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("user")) {
        setCurrentUser({ username: "admin", role: "Admin", password: "admin" });
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoading, currentUser, setIsLoading, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthProvider = () => {
  const values = useContext(AuthContext);

  return {
    ...values,
  };
};
