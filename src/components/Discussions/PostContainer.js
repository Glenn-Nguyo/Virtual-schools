import React from 'react';
import PostList from './PostList';

const PostContainer = ({data, handleDeletePost, handleUpdatePost}) => {
  return (
    <>
    <br/>
    <h2>My Resources </h2>
    <br />
    <PostList
    data={data}
    handleDeleteResource={handleDeletePost}
    handleUpdateResource={handleUpdatePost}
    />
      
    </>
  )
}

export default PostContainer;
