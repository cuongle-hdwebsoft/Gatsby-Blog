import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <nav>
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
              <Link
                className="header__link"
                activeClassName="header__link--active"
                to="/"
              >
                Homepage
              </Link>
            </li>
            <li className="header__item">
              <Link
                className="header__link"
                activeClassName="header__link--active"
                to="/blog"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container mt-3">{children}</div>
    </div>
  );
}
