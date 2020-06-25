import React, { Fragment } from "react";
import Moment from "react-moment";
import auth from "../../reducer/auth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../action/post";
const PostItem = ({
  post: { _id, user, text, name, avatar, likes, comments, date },
  auth,
  showAction,
  addLike,
  removeLike,
  deletePost,
}) => {
  return (
    <div className="posts">
      <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`profile/${user}`}>
            <img className="round-img" src={avatar} alt="" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">{text}</p>
          <p className="post-date">
            Posted on <Moment>{date}</Moment>
          </p>
          {showAction && (
            <Fragment>
              <button
                type="button"
                className="btn btn-light"
                onClick={(e) => addLike(_id)}
              >
                <i className="fas fa-thumbs-up"></i>
                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
              </button>
              <button
                type="button"
                onClick={(e) => removeLike(_id)}
                className="btn btn-light"
              >
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to={`posts/${_id}`} className="btn btn-primary">
                Discussion{" "}
                <span className="comment-count">{comments.length}</span>
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => deletePost(_id)}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </Fragment>
          )}
          <button
            type="button"
            className="btn btn-light"
            onClick={(e) => addLike(_id)}
          >
            <i className="fas fa-thumbs-up"></i>
            <span>{likes.length}</span>
          </button>
          <button
            type="button"
            onClick={(e) => removeLike(_id)}
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-down"></i>
          </button>
          <Link to={`posts/${_id}`} className="btn btn-primary">
            Discussion <span className="comment-count">{comments.length}</span>
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={(e) => deletePost(_id)}
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
PostItem.defaultProps = {
  showAction: false,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
