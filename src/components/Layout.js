import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useAuthProvider } from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";

export default function Layout({ children }) {
  const { currentUser, isLoading } = useAuthProvider();

  console.log("currentUser", currentUser);

  return (
    <div>
      <header className="header">
        <nav className="container">
          <ul className="d-flex header__menu align-items-center">
            <li className="header__item">
              <StaticImage
                style={{ width: 25, height: 25 }}
                className="mx-2"
                src="../images/icon.png"
                alt="logo"
              ></StaticImage>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/">
                Homepage
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/blog">
                Blogs
              </Link>
            </li>

            {isLoading ? null : currentUser ? (
              <li className="header__item ms-auto">
                <Link className="header__link" to="/admin/dashboard">
                  Admin
                </Link>
              </li>
            ) : (
              <li className="header__item ms-auto">
                <Link className="header__link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>

      <div className="container mt-3">{children}</div>
    </div>
  );
}

const AdminLayout = ({ children }) => {
  const { setCurrentUser } = useAuthProvider();

  const lgout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <>
      <PrivateRoute>
        <header className="header">
          <nav className="container">
            <ul className="d-flex header__menu align-items-center">
              <li className="header__item d-flex align-items-center">
                <Link to="/">
                  <StaticImage
                    style={{ width: 25, height: 25 }}
                    className="mx-2"
                    src="../images/icon.png"
                    alt="logo"
                  ></StaticImage>
                </Link>
                <span className="text-white">
                  <strong>Admin page</strong>
                </span>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/admin/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/admin/blog">
                  Blogs
                </Link>
              </li>
              <li onClick={lgout} className="header__item ms-auto">
                <a className="header__link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="container mt-3">{children}</div>
      </PrivateRoute>
    </>
  );
};

Layout.AdminLayout = AdminLayout;
