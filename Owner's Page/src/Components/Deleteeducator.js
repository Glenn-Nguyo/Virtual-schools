import React, { useState } from 'react';
    import UpdateEducators from './Updateeducators';
    const EducatorCard = ({data, handleDeleteEducator, handleUpdateEducators}) => {

      const [isEditing, setIsEditing] = useState(false);
      const [visible, setVisible] = useState(true)
      const {name,email,password,school_id,course_id,owner_id} = data
    
      function handleDelete(){
        fetch (`https://virtualschools.herokuapp.com/educators`, {
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deletedEducator) => handleDeleteEducator(deletedEducator))
      }
      return (
        <div className='card'>
            {visible?
              (<div> { isUpdating ? (
                <UpdateEducators
                id={id}
                data={data}
                setIsUpdating={isUpdating}
                handleUpdateEducators={handleUpdateEducators}
                />
                ): (
                <>
                  <div className='delete-btns'>
                    <button className='update-btn' onClick={() => setIsUpdating((isUpdating) => !isUpdating) } >
                    </button>
                    <button onClick={handleDelete} className='delete-btn'>X</button>
                  </div>
                </>
               )} </div>):(
                 <div className='educators-card'>
                   <h2 className='res-info' onClick={() => setVisible(!visible)}  >Educators Info</h2>
                   <h3>{title}</h3>
                 </div>
               )
               }
              </div>
              )
            }
    export default EducatorCard;
    