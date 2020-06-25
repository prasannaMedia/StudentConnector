import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getProfileById, getGithubRepos } from "../../action/profile";
import Spinner from "../../components/layout/Spinner";
import { Link } from "react-router-dom";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileGithub from "./ProfileGithub";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col col-md-10 mx-auto">
            {profile === null || loading ? (
              <Spinner />
            ) : (
              <Fragment>
                <Link to="/profiles" className="btn btn-light">
                  back to profiles
                </Link>
                {auth.isAuthenticated &&
                  auth.loading === false &&
                  auth.user._id === profile.user._id && (
                    <Link to="/edit-profile">Edit profile</Link>
                  )}
                <div className="profile-grid my-1">
                  <ProfileTop profile={profile} />
                  <ProfileAbout profile={profile} />
                </div>
                <div>
                  <ProfileGithub username={profile.githubusername} />
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getProfileById })(Profile);
