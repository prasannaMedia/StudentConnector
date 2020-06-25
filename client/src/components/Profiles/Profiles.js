import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../action/profile";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <Fragment>
      <div className="container text-dark">
        <div className="row">
          <div className="col col-md-10 mx-auto">
            {loading ? (
              <Spinner />
            ) : (
              <Fragment>
                <h1 className="lead">Students</h1>
                <i className="fab fa-connectdevelop">CONNECT WITH STUDENTS</i>
                {console.log(profiles)}
                <div className="profiles">
                  {profiles.length > 0 ? (
                    profiles.map((profile) => (
                      <ProfileItem key={profile._id} profile={profile} />
                    ))
                  ) : (
                    <h4>....No profiles found check your connection</h4>
                  )}
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = () => (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
