import React, {useState} from 'react';
import EditPost from './EditPost';

function PostCard({data, handleDeletePost, handleUpdatePost }) {
    const [isEditing, setIsEditing] = useState(false);
    const [visible, setVisible] = useState(true)

    const {id,title,description}= data

    function handleDelete(){
      fetch(`https://virtualschools.herokuapp.com/discussions/${id}`, {
        method: 'DELETE',
      })
      .then((r) => r.json())
      .then ((deletePost) => handleDelete(deletePost))
    }
  
  return (
    <div className='card'>
      {visible?
        ( <div> { isEditing ? (
          <EditPost 
          id={id}
          data={data}
          setIsEditing={isEditing}
          handleUpdatePost={handleUpdatePost}
          />
        ) : (
          <>
          <div className='delete-btn'>
          <button className='edit-btn' onClick={() => setIsEditing((isEditing) => !isEditing) } >

          </button>
          <button onClick={handleDelete} className='delete-btn'>X</button>


          </div>
          </>
        )
      } </div>
        ) :(
          <div className='post-card'>
            <h2 className='post-info' onClick={() => setVisible(!visible)}  >Post Info</h2>
            <h3>{title}</h3>
            <h5>{description}</h5>
          </div>
        )
      

      }
      
    </div>
  )
}

export default PostCard;
