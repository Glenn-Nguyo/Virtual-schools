// import React, {useState} from 'react'; 
// import {useParams} from 'react-router-dom'
// import CreateQuestions from './CreateQuestions';


// function UpdateQuestion({handleQuestionUpdate}){

//     const [updatedQuestion, setUpdatedQuestion] = useState({
//         question: "",
//     })

//      let {questionId} = useParams()

//     function handleChange(e){
//         setUpdatedQuestion({...updatedQuestion, [e.target.name]: e.target.value})

//     }

//     console.log(updatedQuestion)

//     function handleSubmit(e){
//         e.preventDefault();
         

//         const updatedObj = {
//             question: updatedQuestion.question,
//             points: updatedQuestion.points,
//             exam_id: updatedQuestion.exam_id
//         }

//             fetch(`https://virtualschools.herokuapp.com/questions/${questionId}`,{
        
//              method: "PATCH",
//              headers: {
//                  "Content-Type": "application/json",
//              },
//              body: JSON.stringify(updatedObj),

//          })
//          .then((res) => res.json())
//          .then((updatedQuestion) => handleQuestionUpdate(updatedQuestion))
//     }

//     return (
//         <div className="updateForm">
//             <form onSubmit={handleSubmit}>
//                     <h3>Udate Question</h3>
//                 <div>
//                     <label for="question" className="form-label">Question</label>
//                     <input
//                         className="form-control"
//                         type="text"
//                         name="question"
//                         value= {updatedQuestion.question}
//                         onChange={handleChange}
//                         placeholder="question"/>
//                 </div>
               
//                <div>
//                <input
//                     className=" mt-4 btn btn-primary"type="submit"/>
//                </div>
//             </form>
//         </div>
//     )
// }

// export default UpdateQuestion;

