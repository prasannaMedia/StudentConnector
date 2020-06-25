import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../action/post";
import PostItem from "../../components/Posts/PostItem";
import Spinner from "../../components/layout/Spinner";
import PostForm from "../Posts/Post-Form/PostForm";
const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container text-dark">
        <div className="row">
          <div className="col col-md-10 mx-auto">
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
              <i className="fas fa-user"></i> Welcome to the community!
            </p>
            <PostForm />
            <div className="posts">
              {posts.map((post) => (
                <PostItem key={post._id} post={post} />
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

export default connect(mapStateToProps, { getPosts })(Posts);
