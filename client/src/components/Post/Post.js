import React, { useEffect, Fragment } from "react";
import { getPost } from "../../action/post";
import { connect } from "react-redux";
import PostItem from "../../components/Posts/PostItem";
import CommentForm from "../Posts/Post-Form/CommentForm";
import CommentItem from "../Post/CommentItem";
import Spinner from "../../components/layout/Spinner";
import { Link } from "react-router-dom";
const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container text-dark">
        <div className="row">
          <div className="col col-md-10 mx-auto">
            <Link to={"/posts"} className="btn btn-secondary">
              Back to Posts
            </Link>
            <PostItem showAction={false} post={post} />
            <CommentForm postId={post._id} />
            <div className="comments">
              {post.comments.map((comment) => (
                <CommentItem
                  key={comment._id}
                  postId={post._id}
                  comment={comment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPost })(Post);
