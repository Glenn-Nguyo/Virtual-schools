import React, { useState } from 'react';
    import UpdateAnswers from './Updateanswers';
    const AnswersCard = ({data, handleDeleteAnswer, handleUpdateAnswers}) => {

      const [isUpdating, setIsUpdating] = useState(false);
      const [visible, setVisible] = useState(true)
      const {question,answer,school_id,course_id} = data
    
      function handleDelete(){
        fetch (`https://virtualschools.herokuapp.com/answers`, {
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deletedAnswer) => handleDeleteAnswer(deletedAnswer))
      }
      return (
        <div className='card'>
            {visible?
              (<div> { isUpdating ? (
                <UpdateAnswers
                id={id}
                data={data}
                setIsUpdating={isUpdating}
                handleUpdateAnswers={handleUpdateAnswers}
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
                 <div className='answers-card'>
                   <h2 className='res-info' onClick={() => setVisible(!visible)}  >Answers Info</h2>
                   <h3>{title}</h3>
                 </div>
               )
               }
              </div>
              )
            }
    export default AnswersCard;
    
    
    