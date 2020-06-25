import React, { Fragment, useState, useEffect } from "react";
import { createProfile, getCurrentProfile } from "../../action/profile";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    college: "",
    currentyear: "",
    location: "",
    bio: "",
    status: "",
    githubusername: "",
    skills: "",
    twitter: "",
    facebook: "",
    youtube: "",
    linkedin: "",
    instagram: "",
  });
  const {
    college,
    currentyear,
    location,
    bio,
    status,
    githubusername,
    skills,
    twitter,
    facebook,
    youtube,
    linkedin,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    console.log("in on submit");
    e.preventDefault();
    createProfile(formData, history, true);
  };

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      college: loading || !profile.college ? " " : profile.college,
      currentyear: loading || !profile.currentyear ? "" : profile.currentyear,
      location: loading || !profile.location ? " " : profile.location,
      status: loading || !profile.status ? " " : profile.status,
      skills: loading || !profile.skills ? " " : profile.skills,
      githubusername:
        loading || !profile.githubusername ? " " : profile.githubusername,
      bio: loading || !profile.bio ? " " : profile.bio,
      twitter: loading || !profile.twitter ? " " : profile.twitter,
      facebook: loading || !profile.facebook ? " " : profile.facebook,
      linkedin: loading || !profile.linkedin ? " " : profile.linkedin,
      youtube: loading || !profile.youtube ? " " : profile.youtube,
      instagram: loading || !profile.instagram ? " " : profile.instagram,
    });
  }, [loading]);

  return (
    <Fragment>
      <div className="container text-dark">
        <div className="row">
          <div className="col col-md-6 mx-auto">
            <h1 className="large text-primary">Create Your Profile</h1>
            <p className="lead">
              <i className="fas fa-user"></i> Let's get some information to make
              your profile stand out
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <select
                  name="status"
                  value={status}
                  onChange={(e) => onChange(e)}
                >
                  <option value="0">* Select your field of study</option>
                  <option value="Computer Science engineering">
                    Computer Science engineering
                  </option>
                  <option value=" Information Science engineering">
                    Information Science engineering
                  </option>
                  <option value="Mechanical engineering ">
                    Mechanical engineering
                  </option>
                  <option value="Bio tech engineering">
                    Bio tech engineering
                  </option>
                  <option value="Civil engineering">Civil engineering </option>
                  <option value="Electrical engineering">
                    Electrical engineering
                  </option>
                  <option value="Electronics engineering">
                    Electronics engineering
                  </option>
                  <option value="Other">Other</option>
                </select>
                <small className="form-text">
                  Give us an idea of where you are at in your career
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Collge"
                  name="college"
                  value={college}
                  onChange={(e) => onChange(e)}
                />
                <small className="form-text">
                  Could be your college where your studying??
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="currentyear"
                  name="currentyear"
                  value={currentyear}
                  onChange={(e) => onChange(e)}
                />
                <small className="form-text">currentyear.....</small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={location}
                  onChange={(e) => onChange(e)}
                />
                <small className="form-text">
                  City & state suggested (eg. Banglore, MA)
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="* Skills"
                  name="skills"
                  value={[skills]}
                  onChange={(e) => onChange(e)}
                />
                <small className="form-text">
                  Please use comma separated values (eg.
                  HTML,CSS,JavaScript,PHP)
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Github Username"
                  name="githubusername"
                  value={githubusername}
                  onChange={(e) => onChange(e)}
                />
                <small className="form-text">
                  If you want your latest repos and a Github link, include your
                  username
                </small>
              </div>
              <div className="form-group">
                <textarea
                  placeholder="A short bio of yourself"
                  name="bio"
                  value={bio}
                  onChange={(e) => onChange(e)}
                ></textarea>
                <small className="form-text">
                  Tell us a little about yourself
                </small>
              </div>

              <div className="my-2">
                <button type="button" className="btn btn-light">
                  Add Social Network Links
                </button>
                <span>Optional</span>
              </div>

              <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x"></i>
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x"></i>
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x"></i>
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x"></i>
                <input
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x"></i>
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <input type="submit" className="btn btn-primary my-1" />
              <Link className="btn btn-light my-1" to="/dashboard">
                Go Back
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
