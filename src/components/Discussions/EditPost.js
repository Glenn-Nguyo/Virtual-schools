import React, {useState} from 'react'

const EditPost = ({data, setIsEditing, handleUpdatePost}) => {
    const {id,title,description}= data

  const [updatedTitle, setUpdatedTitle]= useState(title)
  const [updatedDescription, setUpdatedDescription]= useState(description)


  function handleTitleChange(e){
    setUpdatedTitle(e.target.value);
  }

  function handleDescriptionChange(e){
    setUpdatedDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch (`https://virtualschools.herokuapp.com/resources/${id}`,{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:updatedTitle,
        description:updatedDescription,

      }),

    })
    .then((r) => r.json())
    .then ((updatedPost) => handleUpdatePost(updatedPost))
    .then (() => setIsEditing(false));
  }

  return (
    <form className='edit-post' onSubmit={handleSubmit}>
      <label className='form-label' htmlFor='title'>Title</label>
      <input 
      name='title'
      type='text'
      placeholder='Title'
      value={updatedTitle}
      onChange={handleTitleChange}
      className='edit-title'
      ></input>
      <br />
      <label className='form-label' htmlFor='description'>Description</label>
      <input 
      name='description'
      type='text'
      placeholder='Title'
      value={updatedDescription}
      onChange={handleDescriptionChange}
      className='edit-title'
      ></input>
      <br />
      <input className="save-button" type="submit" value="Save" />


    </form>
  )
}

export default EditPost;
