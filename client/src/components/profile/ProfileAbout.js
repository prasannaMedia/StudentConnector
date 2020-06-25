import React, { Fragment } from "react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div className="container mt-4">
      <div className="card text-center card-form">
        <div className="card-body">
          <div className="row ">
            <div className="col col-md-10">
              {bio && (
                <Fragment>
                  <h2 className="text-primary card-title ">{name} s Bio</h2>
                  <p>{bio}</p>
                  <div className="line" />
                </Fragment>
              )}
              <h2 className="text-primary">Skill Set</h2>
              <div className="skills">
                {skills.map((skill, index) => (
                  <div key={index} className="p-1">
                    <i className="fas fa-check" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileAbout;
