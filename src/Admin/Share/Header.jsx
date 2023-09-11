import { useState } from "react";
import "../../coponent/style.css";
import { RxCaretDown } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/deshboard">Home</Link>
              </li>
              <li>
                <Link to="/deshboard-poetry">Poetry</Link>
              </li>
              {/* fiction */}
              <li>
                <details
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <summary>Fiction</summary>
                  <ul className={`p-2 ${isHovered ? "visible" : "hidden"}`}>
                    <li>
                      <Link to="/deshboard-story">Story</Link>
                    </li>
                    <li>
                      <Link to="/deshboard-novel">Novel</Link>
                    </li>
                  </ul>
                </details>
              </li>
              {/* -------- */}
              {/* Essay */}
              <li>
                <details
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <summary>Essay</summary>
                  <ul className={`p-2 ${isHovered ? "visible" : "hidden"}`}>
                    <li>
                      <Link to="/prose">Prose</Link>
                    </li>
                    <li>
                      <Link to="/deshboard-travel-prose">Travel Prose</Link>
                    </li>
                  </ul>
                </details>
              </li>
              {/* -------- */}
              <li>
                <Link to="/translation">Translation</Link>
              </li>
              {/* Art */}
              <li>
                <details
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <summary>Art</summary>
                  <ul className={`p-2 ${isHovered ? "visible" : "hidden"}`}>
                    <li>
                      <Link to="/deshboard-movie">Movie</Link>
                    </li>
                    <li>
                      <Link to="/deshboard-painting-art">Painting Art</Link>
                    </li>
                    <li>
                      <Link to="/photograph">Photograph</Link>
                    </li>
                  </ul>
                </details>
              </li>
              {/* -------- */}
              <li>
                <Link to="/deshboard-interview">Interview</Link>
              </li>
              {/* Books */}
              <li>
                <details
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <summary>Art</summary>
                  <ul className={`p-2 ${isHovered ? "visible" : "hidden"}`}>
                    <li>
                      <Link to="/deshboard-my-book">My Book</Link>
                    </li>
                  </ul>
                </details>
              </li>
              {/* -------- */}
              <li>
                <Link to="/deshboard-deshboard">Admin</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li className="menu-item dropdown">
              <summary>
                Dropwond
                <span>
                  <RxCaretDown></RxCaretDown>
                </span>
              </summary>

              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a className="menu-link dropdown-link">Submenu 1</a>
                </li>
                <li className="dropdown-item">
                  <a className="menu-link dropdown-link">Submenu 2</a>
                </li>
              </ul>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
