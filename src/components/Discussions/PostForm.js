import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postData, setPostData] = useState([]);
  const [post, setPost] = useState('')
  let navigate = useNavigate();

  function handleTitleChange(e){
    setTitle(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    const newPostObj = {
      title:title,
      description:description,
    }

    fetch ('https://virtualschools.herokuapp.com/discussions',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPostObj)
    })
    .then(response => response.json())
    .then (navigate("/discussions", {replace: true } ))
    setTitle("")
    setDescription("")
  }

  useEffect(() => {
    fetch ('https://virtualschools.herokuapp.com/discussions')
    .then(r => r.json())
    .then(data => setPostData(data))
  }, [] )

  const postOptions = postData.map ( ({ id, post_name }) =>
  <option key={id} value={id}> {post_name} </option>
  )
  function handlePostSelect (e){
    setPost(e.target.value)
  }
  

  return (
    <>
      <br />
      <h2> Add a Post</h2>
      <br />
      <form onSubmit={handleSubmit} className='form'>
        <label className='input-label' htmlFor='post-data'>Post</label>
        <br />
        <select id='post-data' onChange={handlePostSelect}>
          {postOptions}
        </select>
        <br />
        <br />
        <label className='input-label' htmlFor='title' >Title </label>
          <input
            name='Title'
            type='string'
            placeholder='Enter Title'
            value={title}
            onChange={handleTitleChange}
            className='form-input'
          ></input>
          <br/>
          <br/>
          <label className='input-label' htmlFor='description' >Description</label>
          <input
            name='description'
            type='string'
            placeholder='Enter post'
            value={description}
            onChange={handleDescriptionChange}
            className='form-input'
          ></input>
          <br/>
          <br/>
          <button className="form-input" type="submit">Add Post</button> 

      </form>
      
    </>
  )
}

export default PostForm;
