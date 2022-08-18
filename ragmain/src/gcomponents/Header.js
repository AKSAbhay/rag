import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary pl-3 pr-3 fixed-top">
      <Link class="navbar-brand text-white" to="/">
        <b>ARG</b>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link text-white" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" to="/payments">
              Test
            </Link>
          </li>
          <li class="nav-item dropdown">
            <Link
              class="nav-link dropdown-toggle text-white"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              to="/payments"
            >
              Payment Actions
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/payments">
                Payments
              </Link>
              <Link class="dropdown-item" to="/deposits">
                Deposits
              </Link>
            </div>
          </li>
        </ul>
        <div class="my-2 my-lg-0 pr-3">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle text-white"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="/payments"
              >
                User
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/profile">
                  Profile
                </Link>
                <Link class="dropdown-item" to="/logout">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
