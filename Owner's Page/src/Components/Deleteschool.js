import React, { useState } from 'react';
    import UpdateSchools from './Updateschools';
    const SchoolCard = ({data, handleDeleteSchools, handleUpdateSchools}) => {

      const [isEditing, setIsEditing] = useState(false);
      const [visible, setVisible] = useState(true)
      const {name,school_id,course_id,owner_id} = data
    
      function handleDelete(){
        fetch (`https://virtualschools.herokuapp.com/schools`, {
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deleteSchools) => handleDeleteSchools(deletedEducator))
      }
      return (
        <div className='card'>
            {visible?
              (<div> { isUpdating ? (
                <UpdateEducators
                id={id}
                data={data}
                setIsUpdating={isUpdating}
                handleUpdateSchools={handleUpdateSchools}
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
                 <div className='schools-card'>
                   <h2 className='res-info' onClick={() => setVisible(!visible)}  >schools Info</h2>
                   <h3>{title}</h3>
                 </div>
               )
               }
              </div>
              )
            }
    export default Schoolscard;
    