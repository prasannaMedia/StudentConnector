import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import { register, login } from "../../action/auth";
import { Link, Redirect } from "react-router-dom";
//import PropTypes from 'prop-types'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("password not matching", "danger");
    } else register({ name, email, password });
  };
  // const newUser = {
  //   name,
  //   email,
  //   password,
  // };
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const body = JSON.stringify(newUser);

  //     const res = await axios.post("/api/user", body, config);
  //     console.log(res);
  //   } catch (err) {
  //     console.error(err.response);
  //   }
  // };
  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="container text-dark">
        <div className="row">
          <div className="col col-md-10 mx-auto">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead">
              <i className="fas fa-user"></i> Create Your Account
            </p>
            <form
              className="form"
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
                <small className="form-text">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  minLength="6"
                  value={password}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  minLength="6"
                  value={password2}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </form>
            <p className="my-1">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
