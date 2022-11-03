import React,{ useState, useEffect} from 'react'; 
import PostForm from './PostForm';
import PostContainer from './PostContainer';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Discussion = () => {
  const [data, setData] = useState ([])

  useEffect(() =>{
    fetch('https://virtualschools.herokuapp.com/discussions/')
    .then(r => r.json())
    .then(data =>{
      setData(data)
    })
  }, [])


  function handleDeletePost(postToDelete){
    const updatedPosts = data.filter((post) => {
      if (post.id !== postToDelete.id) {
        return post
      } else {
        return null
      }
    });
    setData(updatedPosts);
  }

  function handleUpdatePost(updatedPostObj) {
    const editedPosts = data.map((post) => {
      if (post.id === updatedPostObj.id) {
        return updatedPostObj;
      } else {
        return post;
      }
    });
    setData(editedPosts);
  }

  return (
    <Router>
      <div className='posts'>
        <Routes>
        <Route exact path='/discussion' element={
          <PostContainer
          data={data}
          handleDeletePost={handleDeletePost}
          handleUpdatePost={handleUpdatePost}
          />
        }
        />
        <Route exact path='/create-post' element={<PostForm/>} />

        </Routes>

      </div>
      
    </Router>
  )
}

export default Discussion;
