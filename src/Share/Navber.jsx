/* eslint-disable react/jsx-no-undef */

import "../coponent/style.css";
import { RxCaretDown } from "react-icons/rx";
// import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  // const AllRoutes = <React.Fragment></React.Fragment>;

  return (
    <div>
      <div
        className="navbar  text-white"
        style={{
          backgroundColor: "royalblue",
        }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn  lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-black"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/poetry">Poetry</Link>
              </li>
              {/* fiction */}
              <li>
                <details>
                  <summary>Fiction</summary>
                  <ul>
                    <li>
                      <Link to="/story">Story</Link>
                    </li>
                    <li>
                      <Link to="/novel">Novel</Link>
                    </li>
                  </ul>
                </details>
              </li>
              {/* -------- */}
              {/* Essay */}
              <li>
                <details>
                  <summary>Essay</summary>
                  <ul>
                    <li>
                      <Link to="/prose">Prose</Link>
                    </li>
                    <li>
                      <Link to="/travel-prose">Travel Prose</Link>
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
                <details>
                  <summary>Art</summary>
                  <ul>
                    <li>
                      <Link to="/movie">Movie</Link>
                    </li>
                    <li>
                      <Link to="/painting-art">Painting Art</Link>
                    </li>
                    <li>
                      <Link to="/photograph">Photograph</Link>
                    </li>
                  </ul>
                </details>
              </li>
              {/* -------- */}
              <li>
                <Link to="/interview">Interview</Link>
              </li>
              {/* Books */}
              <li>
                <details>
                  <summary>Books</summary>
                  <ul>
                    <li>
                      <Link to="/my-book">My Book</Link>
                    </li>
                  </ul>
                </details>
              </li>
              {/* -------- */}
              <li>
                <Link to="/deshboard">Admin</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/poetry">Poetry</Link>
            </li>
            {/* fiction */}
            <li className="menu-item dropdown">
              <summary>
                Ficton
                <span>
                  <RxCaretDown></RxCaretDown>
                </span>
              </summary>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link className="menu-link dropdown-link" to="/story">
                    Story
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="menu-link dropdown-link" to="/novel">
                    Novel
                  </Link>
                </li>
              </ul>
            </li>
            {/* ======= */}
            {/* Essay */}
            <li className="menu-item dropdown">
              <summary>
                Essay
                <span>
                  <RxCaretDown></RxCaretDown>
                </span>
              </summary>

              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link className="menu-link dropdown-link" to="/prose">
                    Prose
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="menu-link dropdown-link" to="/travel-prose">
                    Travel Prose
                  </Link>
                </li>
              </ul>
            </li>
            {/* ============= */}
            <li>
              <Link to="/translation">Translation</Link>
            </li>
            {/* Art */}
            <li className="menu-item dropdown">
              <summary>
                Essay
                <span>
                  <RxCaretDown></RxCaretDown>
                </span>
              </summary>

              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link className="menu-link dropdown-link" to="/movie">
                    Movie
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="menu-link dropdown-link" to="/painting-art">
                    Painting Art
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="menu-link dropdown-link" to="/photograph">
                    Photograph
                  </Link>
                </li>
              </ul>
            </li>
            {/* ============= */}
            <li>
              <Link to="/interview">Interview</Link>
            </li>
            {/* Books */}
            <li className="menu-item dropdown">
              <summary>
                Books
                <span>
                  <RxCaretDown></RxCaretDown>
                </span>
              </summary>

              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link className="menu-link dropdown-link" to="/my-book">
                    My Book
                  </Link>
                </li>
              </ul>
            </li>
            {/* ============= */}
            <li>
              <Link to="/deshboard">Admin</Link>
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

export default Navber;
