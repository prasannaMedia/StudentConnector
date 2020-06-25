import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Carosuel from "./Carousel";
const img = require("../../img/img2.jpg");
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="landing" src={img}>
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Student Connector</h1>
          <p className="lead">
            Create a student profile/portfolio, share posts and get help from
            other Student
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary ">
              Sign Up
            </Link>
            <Link to="/Login" className="btn btn-secondary ">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
