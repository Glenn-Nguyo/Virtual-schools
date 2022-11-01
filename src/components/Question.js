import React from 'react';
import {Link} from 'react-router-dom'
import UpdateQuestion from './UpdateQuestion';
import { confirmAlert } from 'react-confirm-alert'

function Question({key, question, questionId, setQuestionList, questionList, handleQuestionUpdate}){

  console.log(questionId)

  function handleDelete(){

    confirmAlert({
			title: "Confirm deletion",
			message:"All data will be lost. Wish to continue?",
			buttons: [
				{
					label: "Yes",
					onClick : ()=> handleDelete()
				},
				{
					label: "No",
					onClick: () => null
				}
			]
		})
    fetch(`https://virtualschools.herokuapp.com/questions/${questionId}`,{
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(()=>{
     setQuestionList(questionList.filter(question => question.id !== questionId))
    
    })

    
  }

  <UpdateQuestion handleQuestionUpdate={handleQuestionUpdate}/>

    return (
    <div key={key}>
      <h4><em>Q {questionId}</em>: {question}</h4>
      <Link to={"/question/" + questionId} className="btn btn-secondary">Update</Link>
      <button className="btn btn-warning mt-1" onClick={handleDelete}>Delete</button>
    </div>

    )
}

export default Question;


