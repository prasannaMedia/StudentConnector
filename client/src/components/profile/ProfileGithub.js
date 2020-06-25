import React, { useEffect } from "react";
import { getGithubRepos } from "../../action/profile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
const ProfileGithub = ({ getGithubRepos, username, profile: { repos } }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);
  return (
    <div className="profile-github">
      <h2 className="text-primary my-1"> github repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo.id} className="repo bg-white my-1 p-1">
            <div>
              <h4>
                <a href={repo.html_url}>{repo.name}</a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  stars:{repo.stargazers_count}
                </li>
                <li className="badge badge-dark">
                  watchers:{repo.watchers_count}
                </li>
                <li className="badge badge-light">forks:{repo.forks_count}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
