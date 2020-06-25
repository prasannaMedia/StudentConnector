import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../action/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/Posts">
          <span className="hide-sm"></span> Posts
        </Link>
      </li>
      <li>
        <Link to="/profiles">Student profile</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i> <span className="hide-sm"></span>{" "}
          Dashboard
        </Link>
      </li>
      <li>
        <a onClick={logout} href="/">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Student profile</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/Login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark ">
      <h1>
        <Link to="/">
          <i className="fas fa-graduation-cap"></i> Student connector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
