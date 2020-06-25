import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    college,
    location,
    skills,
  },
}) => {
  return (
    <div className="profile  bg-light">
      <img src={avatar} className="round-img"></img>
      <h2>{name}</h2>
      <p>
        {status}
        {college && <span> at {college}</span>}
      </p>
      <p className="my-1">{location && <span>{location}</span>}</p>
      <Link to={`/profile/${_id}`} className="btn btn-primary">
        view profile
      </Link>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProfileItem;
