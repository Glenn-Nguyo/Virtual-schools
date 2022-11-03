import React, { useState } from 'react';
import PostCard from './PostCard';

const PostList = ({data, handleDeletePost, handleUpdatePost}) => {
    const [dataIndex, setDataIndex] = useState(0)

    const postlist =[...data]
    .filter((data) =>{
        return data.user.username.toLowerCase();
    })
    .slice(dataIndex, dataIndex +4)

    .map((data) =>
    <PostCard
    key={data.id}
    data={data}
    handleDeletePost={handleDeletePost}
    handleUpdatePost={handleUpdatePost}
    />
    )

    function handleClickMore(){
        setDataIndex((dataIndex) => (dataIndex + 4) % data.length); 
    }

  return (
      <> 
        <div className='res-list'>
         {postlist}
        </div>
        <br/>
        <div className='next-cont'>
            <button className='next-btn' onClick={handleClickMore}> Next </button>
        </div>
      </>
  
    

  )
}

export default PostList;
