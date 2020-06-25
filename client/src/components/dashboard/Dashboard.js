import { Fragment, useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../action/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Dashboardaction from "../dashboard/Dashboardaction";
const explore = require("../../img/explore.jpg");
const share = require("../../img/share.jpg");
// import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="home-section" className="text-white mb1">
        <div className="dark-overlay2">
          <div className="home-inner2  mt1">
            <h1 className=" large text-primary">Dashboard</h1>
            <p className="lead  text-primary">
              <i className="fas fa-user" />
              Welcome {user && user.name}
            </p>
            {profile !== null ? (
              <Fragment>
                <Dashboardaction />
              </Fragment>
            ) : (
              <Fragment>
                <p>you have not setup a profile add some info</p>
                <Link to="/createprofile" className="btn btn-primary my-1">
                  create profile
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <section id="explore-section" className="bg-light text-muted mt1">
        <div className="container1">
          <div className="row">
            <div className="col-md-6">
              <img
                src={explore}
                alt=""
                className="img-fluid mb-3 rounded-circle"
              />
            </div>
            <div className="col-md-7">
              <h3>Explore</h3>
              <p></p>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check"></i>
                </div>
                <div className="p-4 align-self-end">
                  In everyday life, the development of life skills helps
                  students to: Find new ways of thinking and problem solving.
                  Recognise the impact of their actions and teaches them to take
                  responsibility for what they do rather than blame others.
                  Build confidence both in spoken skills and for group
                  collaboration and cooperation
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check"></i>
                </div>
                <div className="p-4 align-self-end">
                  Importance of developing your skills. More and more, job roles
                  are requiring formal training qualifications either because of
                  legislative requirements or to meet ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="share-section" className="py-5 bg-light text-muted ">
        <div className="container1">
          <div className="row">
            <div className="col-md-6">
              <img
                src={share}
                alt=""
                className="img-fluid mb-3 rounded-circle"
              />
            </div>
            <div className="col-md-6">
              <h3>Share what you create</h3>
              <p>share your post with everyone.....</p>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check"></i>
                </div>
                <div className="p-4 align-self-end">
                  How Sharing Your Expertise Can Benefit You. It Engrains What
                  You Know. Nothing helps strengthen knowledge as effectively as
                  sharing it. It Expands What You Know. It Establishes Your
                  Reputation as an Authority. It Increases Your Professional
                  Value. Become a Mentor. Write. Train Others. Be a Resource.
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check"></i>
                </div>
                <div className="p-4 align-self-end">
                  Getting exposed to different skills and know-how from your
                  peers can help you want more from yourself, engaging everybody
                  in a game plan of ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="main-footer" className="bg-dark mt-0">
        <div className="container1">
          <div className="row">
            <div className="col text-center">
              <div className="py-4">
                <h1 className="h3">Student Connector</h1>
                <p>Copyright &copy (developed by prasanna); 2020</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
