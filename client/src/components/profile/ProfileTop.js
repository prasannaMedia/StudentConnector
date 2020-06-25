import React from "react";

export const ProfileTop = ({
  profile: {
    user: { name, avatar },
    location,
    college,
    skills,
    bio,
    social,
    status,
  },
}) => {
  return (
    <div className="row">
      <div className="col col-sm-10">
        <div className="profile-top bg-primary p-2">
          <img className="round-img my-1" src={avatar} alt="" />
          <p className="lead">
            {status} {college && <span>student at {college}</span>}
          </p>
          <p>{location}</p>
          <div className="icons my-1">
            {social && social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            )}
            {social && social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            )}
            {social && social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            )}
            {social && social.youtube && (
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            )}
            {social && social.instagram && (
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileTop;
