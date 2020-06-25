import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteAccount } from "../../action/profile";

const Dashboardaction = ({ deleteAccount }) => {
  const onClick = (e) => {
    deleteAccount();
  };
  return (
    <div className="container1 mt-5">
      <div className="row1 ">
        <div className="col1 mb1-1">
          <Link to="/posts" className="btn btn-secondary pr3 ">
            <i className="fas fa-user-circle text-primary"></i> Check Posts
          </Link>
        </div>
      </div>
      <div className="row1">
        <div className="col1  mb1-1  ">
          <Link to="/profiles" className="btn btn-secondary pr5">
            <i className="fas fa-user-circle text-primary"></i> Profiles
          </Link>
        </div>
      </div>
      <div className="row1">
        <div className="col1  mb1-1 ">
          <Link to="/edit-profile" className="btn btn-success pr4 ">
            <i className="fas fa-user-circle text-primary"></i> Edit Profile
          </Link>
        </div>
      </div>
      <div className="row1">
        <div className="col col-md-4 ">
          <button className="btn btn-danger pr1" onClick={(e) => onClick(e)}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deleteAccount })(Dashboardaction);
